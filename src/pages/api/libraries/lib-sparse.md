---
title: lib-sparse.glsl (Shader API)
description: Substance 3D Shader API
keywords:
	- Creative Cloud
	- Substance 3D
	- Painter
layout: none
---




lib-sparse.glsl








[ ](#section-0)












[ ](#section-1)

lib-sparse.glsl
===============


This file provides useful functions to ensure sparse textures sampling
 correctness (ARB_sparse_texture).
 Allows to sample only part of textures really present in video memory.


**Public Functions:**
`getSparseCoord`
`getSparseCoordLod0`
`textureSparseQueryLod`
`textureSparse`


**Public Structures:**
`SamplerSparse`
`SparseCoord`


The `FEATURE_SPARSE_TEXTURE` macro is defined only if the sparse virtual texture extension is enabled.


If enabled, process additional texture lookup checks to climb up mipmap pyramid if texels are missing.





```glsl
#ifdef FEATURE_SPARSE_TEXTURE
 //: param auto material_lod_check_needed
 uniform bool material_lod_check_needed = false;
 //: param auto material_lod_mask
 uniform usampler2D material_lod_mask;
 #endif // FEATURE_SPARSE_TEXTURE
 //: param auto uvtile_reference_sampler
 uniform sampler2D uvtile_reference_sampler;
 //: param auto uvtile_size
 uniform vec2 uvtile_size;
 //: param auto uvtile_inverse_size
 uniform vec2 uvtile_inverse_size;
 //: param auto uvtile_lod_bias
 uniform float uvtile_lod_bias;
```







[ ](#section-2)

Sampler and sparse texture information structure


Used to query all sampler related uniforms with a single auto binding





```glsl
struct SamplerSparse {
  sampler2D tex;
  vec4 size; // width, height, 1/width, 1/height
  bool is_set; // a boolean indicating whether the texture is in the texture set or not
  bool is_color; // a boolean indicating whether the texture is color (RGBA) or grayscale (R, GB)
  uvec3 lod_mask_select; // masking operations description allowing to retrieve loaded mipmaps information
 };
```







[ ](#section-3)

Sparse sampling coordinates


Store the UV coordinates & material-wise sparse LoD mask





```glsl
struct SparseCoord {
  vec2 tex_coord;
  vec2 dfdx;
  vec2 dfdy;
  float lod;
  uint material_lod_mask;
 };
 
 
 #if defined(SHADER_FRAGMENT)
```







[ ](#section-4)

Build texture coordinates structure used by `textureSparse()` sampling function
 (must be called from fragment shader)


Example: `SparseCoord uv1coord = getSparseCoord(inputs.multi_tex_coord[1]);`





```glsl
SparseCoord getSparseCoord(vec2 tex_coord) {
  SparseCoord res;
  res.tex_coord = tex_coord;
  res.dfdx = dFdx(tex_coord);
  res.dfdy = dFdy(tex_coord);
 #ifdef FEATURE_SPARSE_TEXTURE
  res.material_lod_mask = material_lod_check_needed ?
  textureLod(material_lod_mask,tex_coord,0.0).r :
  0u;
  res.lod = getLodFromReferenceSampler(tex_coord);
 #endif // FEATURE_SPARSE_TEXTURE
  return res;
 }
 #endif
```







[ ](#section-5)

Build texture coordinates structure used by `textureSparse()` sampling function
 Base level sampling version (can be used if outside fragment shader)





```glsl
SparseCoord getSparseCoordLod0(vec2 tex_coord) {
  SparseCoord res;
  res.tex_coord = tex_coord;
  res.dfdx = vec2(0.0);
  res.dfdy = vec2(0.0);
 #ifdef FEATURE_SPARSE_TEXTURE
  res.material_lod_mask = material_lod_check_needed ?
  textureLod(material_lod_mask,tex_coord,0.0).r :
  0u;
  res.lod = 0.0;
 #endif // FEATURE_SPARSE_TEXTURE
  return res;
 }
 
 #if defined(SHADER_FRAGMENT)
```







[ ](#section-6)

Compute the level-of-detail that would be used to sample from a sparse texture


Climb up mipmap pyramid if texels are missing
 Returns LoD BEFORE LoD bias applied





```glsl
float textureSparseQueryLod(SamplerSparse smp, SparseCoord coord) {
 #ifdef FEATURE_SPARSE_TEXTURE
  float lodfix = coord.lod;
  if (material_lod_check_needed) {
  lodfix = getFixedSparseLod(getTextureLodMask(smp.lod_mask_select, coord.material_lod_mask), lodfix);
  }
  return lodfix-uvtile_lod_bias;
 #else // FEATURE_SPARSE_TEXTURE
  // Do not use textureQueryLod here: workaround of MacOS driver issue (dramatic FPS drop)
  vec2 dx = coord.dfdx * smp.size.xy;
  vec2 dy = coord.dfdy * smp.size.xy;
  return max(0.0, 0.5 * log2(max(dot(dx, dx), dot(dy, dy))));
 #endif // FEATURE_SPARSE_TEXTURE
 }
 #endif // SHADER_FRAGMENT
```







[ ](#section-7)

Compute the derivatives that would be used to sample from a sparse texture


Climb up mipmap pyramid if texels are missing





```glsl
void textureSparseQueryGrad(out vec2 dfdx, out vec2 dfdy, SamplerSparse smp, SparseCoord coord) {
 #ifdef FEATURE_SPARSE_TEXTURE
  if (material_lod_check_needed) {
  float lodfix = getFixedSparseLod(getTextureLodMask(smp.lod_mask_select, coord.material_lod_mask), coord.lod);
  if (coord.lod!=lodfix) {
  // Fix dfdx dfdy, take account offset, no more anisotropy
  vec2 ddfix = exp2(lodfix-uvtile_lod_bias) * uvtile_inverse_size;
  dfdx = vec2(ddfix.x,0.0);
  dfdy = vec2(0.0,ddfix.y);
  return;
  }
  }
 #endif // FEATURE_SPARSE_TEXTURE
  dfdx = coord.dfdx;
  dfdy = coord.dfdy;
 }
```







[ ](#section-8)

Performs a texture lookup on a sparse texture, go up the mipmap levels if necessary


This function replaces the standard `texture(sampler2D, vec2)` to retrieve texels from a sparse texture





```glsl
vec4 textureSparse(SamplerSparse smp, SparseCoord coord) {
  vec2 dfdx,dfdy;
  textureSparseQueryGrad(dfdx, dfdy, smp, coord);
  return textureGrad(smp.tex, coord.tex_coord, dfdx, dfdy);
 }
```







[ ](#section-9)

Given a texture, performs an optimized multiple texture lookups with small offsets


We are providing alternatives versions of this helper for up to N=4





```glsl
void textureSparseOffsets(SamplerSparse smp, SparseCoord coord, vec2 offsets[N], out vec4 results[N]) {
  vec2 dfdx,dfdy;
  textureSparseQueryGrad(dfdx, dfdy, smp, coord);
  for(int i = 0; i < N; ++i) {
  results[i] = textureGrad(smp.tex, coord.tex_coord + offsets[i], dfdx, dfdy);
  }
 }
 
 
```






