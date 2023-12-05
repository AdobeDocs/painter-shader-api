---
title:  (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)




<CodeBlock languages="glsl"/>








[ ](#section-1)


===============


**Public Functions:**
`normalBlend`
`normalBlendOriented`
`normalFade`
`normalUnpack`
`normalFromBaseNormal`
`normalFromNormal`
`normalFromHeight`
`getTSNormal`
`computeWSBaseNormal`
`computeWSNormal`


Import from library





<CodeBlock languages="glsl"/>
```glsl


```







[ ](#section-2)

All engine parameters useful for normal-centric operations.





<CodeBlock languages="glsl"/>
```glsl
//: param auto channel_height
 uniform SamplerSparse height_texture;
 //: param auto channel_normal
 uniform SamplerSparse normal_texture;
 //: param auto texture_normal
 uniform SamplerSparse base_normal_texture;
 //: param auto normal_blending_mode
 uniform int normal_blending_mode;
 //: param auto height_2_normal_method
 uniform int height_2_normal_method;
```







[ ](#section-3)

Used to invert the Y axis of the normal map





<CodeBlock languages="glsl"/>
```glsl
//: param auto normal_y_coeff
 uniform float base_normal_y_coeff;
```







[ ](#section-4)

Empirically determined by our artists...





<CodeBlock languages="glsl"/>
```glsl
const float HEIGHT_FACTOR = 400.0;
```







[ ](#section-5)

Perform the blending between 2 normal maps


This is based on Whiteout blending
 http://blog.selfshadow.com/publications/blending-in-detail/





<CodeBlock languages="glsl"/>
```glsl
vec3 normalBlend(vec3 baseNormal, vec3 overNormal)
 {
  return normalize(vec3(
  baseNormal.xy + overNormal.xy,
  baseNormal.z * overNormal.z));
 }
```







[ ](#section-6)

Perform a detail oriented blending between 2 normal maps


This is based on Detail Oriented blending
 http://blog.selfshadow.com/publications/blending-in-detail/





<CodeBlock languages="glsl"/>
```glsl
vec3 normalBlendOriented(vec3 baseNormal, vec3 overNormal)
 {
  baseNormal.z += 1.0;
  overNormal.xy = -overNormal.xy;
  return normalize(baseNormal * dot(baseNormal,overNormal) -
  overNormal*baseNormal.z);
 }
```







[ ](#section-7)

Returns a normal flattened by an attenuation factor





<CodeBlock languages="glsl"/>
```glsl
vec3 normalFade(vec3 normal,float attenuation)
 {
  if (attenuation<1.0 && normal.z<1.0)
  {
  float phi = attenuation * acos(normal.z);
  normal.xy *= 1.0/sqrt(1.0-normal.z*normal.z) * sin(phi);
  normal.z = cos(phi);
  }
 
  return normal;
 }
```







[ ](#section-8)

Unpack a normal w/ alpha channel





<CodeBlock languages="glsl"/>
```glsl
vec3 normalUnpack(vec4 normal_alpha, float y_coeff)
 {
  if (normal_alpha.a == 0.0 || normal_alpha.xyz == vec3(0.0)) {
  return vec3(0.0, 0.0, 1.0);
  }
 
  // Attenuation in function of alpha
  vec3 normal = normal_alpha.xyz/normal_alpha.a * 2.0 - vec3(1.0);
  normal.y *= y_coeff;
  normal.z = max(1e-3, normal.z);
  normal = normalize(normal);
  normal = normalFade(normal, normal_alpha.a);
 
  return normal;
 }
```







[ ](#section-9)

Unpack a normal w/ alpha channel, no Y invertion





<CodeBlock languages="glsl"/>
```glsl
vec3 normalUnpack(vec4 normal_alpha)
 {
  return normalUnpack(normal_alpha, 1.0);
 }
```







[ ](#section-10)

Compute the tangent space normal from document's height channel





<CodeBlock languages="glsl"/>
```glsl
vec3 normalFromHeight(SparseCoord coord, float height_force)
 {
  // Normal computation using height map
 
  // Determine gradient offset in function of derivatives
  vec2 dfd = max(coord.dfdx,coord.dfdy);
  dfd = max(dfd,height_texture.size.zw);
 
  vec2 dfdx,dfdy;
  textureSparseQueryGrad(dfdx, dfdy, height_texture, coord);
  float h_l = textureGrad(height_texture.tex, coord.tex_coord+vec2(-dfd.x, 0 ), dfdx, dfdy).r;
  float h_t = textureGrad(height_texture.tex, coord.tex_coord+vec2( 0, dfd.y), dfdx, dfdy).r;
 
  vec2 dh_dudv;
  if (height_2_normal_method==1) {
  float h_c = textureGrad(height_texture.tex, coord.tex_coord, dfdx, dfdy).r;
  dh_dudv = 4.0 * height_force / dfd * vec2(h_l-h_c,h_c-h_t);
  }
  else {
  float h_r = textureGrad(height_texture.tex, coord.tex_coord+vec2( dfd.x, 0 ), dfdx, dfdy).r;
  float h_b = textureGrad(height_texture.tex, coord.tex_coord+vec2( 0, -dfd.y), dfdx, dfdy).r;
  float h_rt = textureGrad(height_texture.tex, coord.tex_coord+vec2( dfd.x, dfd.y), dfdx, dfdy).r;
  float h_lt = textureGrad(height_texture.tex, coord.tex_coord+vec2(-dfd.x, dfd.y), dfdx, dfdy).r;
  float h_rb = textureGrad(height_texture.tex, coord.tex_coord+vec2( dfd.x, -dfd.y), dfdx, dfdy).r;
  float h_lb = textureGrad(height_texture.tex, coord.tex_coord+vec2(-dfd.x, -dfd.y), dfdx, dfdy).r;
 
  dh_dudv = (0.5 * height_force) / dfd * vec2(
  2.0*(h_l-h_r)+h_lt-h_rt+h_lb-h_rb,
  2.0*(h_b-h_t)+h_rb-h_rt+h_lb-h_lt);
  }
 
  return normalize(vec3(dh_dudv, HEIGHT_FACTOR));
 }
```







[ ](#section-11)

Helper to compute the tangent space normal from base normal and a height
 value, and an optional detail normal.





<CodeBlock languages="glsl"/>
```glsl
vec3 getTSNormal(SparseCoord coord, SamplerSparse texture, vec3 normalFromHeight)
 {
  vec3 normal = normalBlendOriented(
  normalUnpack(textureSparse(texture, coord), base_normal_y_coeff),
  normalFromHeight);
 
  if (normal_texture.is_set) {
  vec3 channelNormal = normalUnpack(textureSparse(normal_texture, coord));
  if (normal_blending_mode == BlendingMode_Replace) {
  normal = normalBlendOriented(normalFromHeight, channelNormal);
  } else if (normal_blending_mode == BlendingMode_NM_Combine) {
  normal = normalBlendOriented(normal, channelNormal);
  }
  }
 
  return normal;
 }
```







[ ](#section-12)

Overload that use base_normal_texture





<CodeBlock languages="glsl"/>
```glsl
vec3 getTSNormal(SparseCoord coord, vec3 normalFromHeight)
 {
  return getTSNormal(coord, base_normal_texture, normalFromHeight);
 }
```







[ ](#section-13)

Helper to compute the tangent space normal from base normal and height, and
 an optional detail normal.





<CodeBlock languages="glsl"/>
```glsl
vec3 getTSNormal(SparseCoord coord, SamplerSparse texture)
 {
  float height_force = 1.0;
  vec3 normalH = normalFromHeight(coord, height_force);
  return getTSNormal(coord, texture, normalH);
 }
```







[ ](#section-14)

Overload that use base_normal_texture





<CodeBlock languages="glsl"/>
```glsl
vec3 getTSNormal(SparseCoord coord)
 {
  return getTSNormal(coord, base_normal_texture);
 }
```







[ ](#section-15)

Helper to compute the world space normal from tangent space base normal.





<CodeBlock languages="glsl"/>
```glsl
vec3 computeWSBaseNormal(SparseCoord coord, vec3 tangent, vec3 bitangent, vec3 normal)
 {
  vec3 normal_vec = normalUnpack(textureSparse(normal_texture, coord), base_normal_y_coeff);
  return normalize(
  normal_vec.x * tangent +
  normal_vec.y * bitangent +
  normal_vec.z * normal
  );
 }
```







[ ](#section-16)

Helper to compute the world space normal from tangent space normal given by
 getTSNormal helpers, and local frame of the mesh.





<CodeBlock languages="glsl"/>
```glsl
vec3 computeWSNormal(SparseCoord coord, vec3 tangent, vec3 bitangent, vec3 normal)
 {
  vec3 normal_vec = getTSNormal(coord);
  return normalize(
  normal_vec.x * tangent +
  normal_vec.y * bitangent +
  normal_vec.z * normal
  );
 }
 
 
```






