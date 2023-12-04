---
title: lib-sampler.glsl (Shader API)
description: Substance 3D Shader API
keywords:
	- Creative Cloud
	- Substance 3D
	- Painter
layout: none
---




lib-sampler.glsl








[ ](#section-0)












[ ](#section-1)

lib-sampler.glsl
================


**Public Functions:**
`getAO`
`getShadowFactor`
`getGlossiness`
`getRoughness`
`getMetallic`
`getAnisotropyLevel`
`getAnisotropyAngle`
`getOpacity`
`getHeight`
`getDisplacement`
`getSpecularLevel`
`getBaseColor`
`getDiffuse`
`getSpecularColor`
`getTranslucency`
`getAbsorptionColor`
`getScatteringPerComponent`
`getScatteringColor`
`getSpecularEdgeColor`
`getSpecularTint`
`getSheenOpacity`
`getSheenColor`
`getSheenRoughness`
`getCoatOpacity`
`getCoatColor`
`getCoatRoughness`
`getCoatSpecularLevel`
`generateAnisotropicRoughness`
`generateDiffuseColor`
`generateSpecularColor`


Import from library





```glsl
import lib-defines.glsl
 import lib-sparse.glsl
```







[ ](#section-2)

Default background colors when there is no data in channel (alpha is 0)





```glsl
const vec3 DEFAULT_BASE_COLOR = vec3(0.5);
 const float DEFAULT_ROUGHNESS = 0.3;
 const float DEFAULT_METALLIC = 0.0;
 const float DEFAULT_ANISOTROPY_LEVEL = 0.0;
 const float DEFAULT_ANISOTROPY_ANGLE = 0.0;
 const float DEFAULT_OPACITY = 1.0;
 const float DEFAULT_AO = 1.0;
 const float DEFAULT_SPECULAR_LEVEL = 0.5;
 const float DEFAULT_HEIGHT = 0.0;
 const float DEFAULT_DISPLACEMENT = 0.0;
 const float DEFAULT_TRANSMISSIVE = 0.0;
 const float DEFAULT_TRANSLUCENCY = 0.0;
 const vec3 DEFAULT_ABSORPTION_COLOR = vec3(1.0);
 const float DEFAULT_SCATTERING = 0.0;
 const vec3 DEFAULT_SCATTERINGCOLOR = vec3(1.0);
 const vec3 DEFAULT_SPECULAR_TINT = vec3(1.0);
 const vec3 DEFAULT_SPEC_EDGE_COLOR = vec3(1.0);
 const float DEFAULT_SHEEN_OPACITY = 0.0;
 const vec3 DEFAULT_SHEEN_COLOR = vec3(1.0);
 const float DEFAULT_SHEEN_ROUGHNESS = 0.5;
 const float DEFAULT_COAT_OPACITY = 0.0;
 const vec3 DEFAULT_COAT_COLOR = vec3(1.0);
 const float DEFAULT_COAT_ROUGHNESS = 0.0;
 const float DEFAULT_COAT_SPEC_LEVEL = 0.5;
```







[ ](#section-3)

AO map.





```glsl
//: param auto ao_blending_mode
 uniform int ao_blending_mode;
 //: param auto texture_ao
 uniform SamplerSparse base_ao_tex;
 //: param auto channel_ao
 uniform SamplerSparse ao_tex;
```







[ ](#section-4)

A value used to tweak the Ambient Occlusion intensity.





```glsl
//: param custom {
 //: "default": 0.75,
 //: "label": "AO Intensity",
 //: "min": 0.00,
 //: "max": 1.0,
 //: "group": "Base Surface",
 //: "description": "<html><head/><body><p>Ambience occlusion (AO) represents shadows from cavities and creases preventing light from hitting the surface. Uses the baked mesh map <b>Ambient occlusion</b> and/or the channel <b>Ambient occlusion</b>.</p></body></html>"
 //: }
 uniform float ao_intensity;
```







[ ](#section-5)

Shadowmask.





```glsl
//: param auto shadow_mask_enable
 uniform bool sm_enable;
 //: param auto shadow_mask_opacity
 uniform float sm_opacity;
 //: param auto shadow_mask
 uniform sampler2D sm_tex;
 //: param auto screen_size
 uniform vec4 screen_size;
```







[ ](#section-6)

Return sampled glossiness or a default value





```glsl
float getGlossiness(vec4 sampledValue)
 {
  return sampledValue.r + (1.0 - DEFAULT_ROUGHNESS) * (1.0 - sampledValue.g);
 }
 
 float getGlossiness(SamplerSparse smp, SparseCoord coord)
 {
  return getGlossiness(textureSparse(smp, coord));
 }
```







[ ](#section-7)

Return sampled roughness or a default value





```glsl
float getRoughness(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_ROUGHNESS * (1.0 - sampledValue.g);
 }
 
 float getRoughness(SamplerSparse smp, SparseCoord coord)
 {
  return getRoughness(textureSparse(smp, coord));
 }
```







[ ](#section-8)

Return sampled metallic or a default value





```glsl
float getMetallic(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_METALLIC * (1.0 - sampledValue.g);
 }
 
 float getMetallic(SamplerSparse smp, SparseCoord coord)
 {
  return getMetallic(textureSparse(smp, coord));
 }
```







[ ](#section-9)

Return sampled anisotropy level or a default value





```glsl
float getAnisotropyLevel(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_ANISOTROPY_LEVEL * (1.0 - sampledValue.g);
 }
 
 float getAnisotropyLevel(SamplerSparse smp, SparseCoord coord)
 {
  return getAnisotropyLevel(textureSparse(smp, coord));
 }
```







[ ](#section-10)

Return sampled anisotropy angle or a default value





```glsl
float getAnisotropyAngle(vec4 sampledValue)
 {
  return M_2PI * (sampledValue.r + DEFAULT_ANISOTROPY_ANGLE * (1.0 - sampledValue.g));
 }
 
 float getAnisotropyAngle(SamplerSparse smp, SparseCoord coord)
 {
  // Manual trilinear filtering
  float level = max(0.0, textureSparseQueryLod(smp, coord) + uvtile_lod_bias);
  int level0 = int(level);
  int level1 = level0 + 1;
 
  ivec2 texSize0 = ivec2(smp.size.xy) >> level0;
  ivec2 texSize1 = texSize0 >> 1;
  ivec2 itex_coord0 = ivec2(coord.tex_coord * vec2(texSize0));
  ivec2 itex_coord1 = ivec2(coord.tex_coord * vec2(texSize1));
 
  // Assuming tex sizes are pow of 2, we can do the fast modulo
  ivec2 texSizeMask0 = texSize0 - ivec2(1);
  ivec2 texSizeMask1 = texSize1 - ivec2(1);
 
  // Fetch the 8 samples needed
  float a000 = getAnisotropyAngle(texelFetch(smp.tex, itex_coord0 & texSizeMask0, level0));
  float a001 = getAnisotropyAngle(texelFetch(smp.tex, (itex_coord0 + ivec2(1, 0)) & texSizeMask0, level0)) - a000;
  float a010 = getAnisotropyAngle(texelFetch(smp.tex, (itex_coord0 + ivec2(0, 1)) & texSizeMask0, level0)) - a000;
  float a011 = getAnisotropyAngle(texelFetch(smp.tex, (itex_coord0 + ivec2(1, 1)) & texSizeMask0, level0)) - a000;
  float a100 = getAnisotropyAngle(texelFetch(smp.tex, itex_coord1 & texSizeMask1, level1)) - a000;
  float a101 = getAnisotropyAngle(texelFetch(smp.tex, (itex_coord1 + ivec2(1, 0)) & texSizeMask1, level1)) - a000;
  float a110 = getAnisotropyAngle(texelFetch(smp.tex, (itex_coord1 + ivec2(0, 1)) & texSizeMask1, level1)) - a000;
  float a111 = getAnisotropyAngle(texelFetch(smp.tex, (itex_coord1 + ivec2(1, 1)) & texSizeMask1, level1)) - a000;
 
  // Detect if the angle warps inside the filtering footprint, and fix it
  a001 += abs(a001) > M_PI ? sign(a001) * -M_2PI + a000 : a000;
  a010 += abs(a010) > M_PI ? sign(a010) * -M_2PI + a000 : a000;
  a011 += abs(a011) > M_PI ? sign(a011) * -M_2PI + a000 : a000;
  a100 += abs(a100) > M_PI ? sign(a100) * -M_2PI + a000 : a000;
  a101 += abs(a101) > M_PI ? sign(a101) * -M_2PI + a000 : a000;
  a110 += abs(a110) > M_PI ? sign(a110) * -M_2PI + a000 : a000;
  a111 += abs(a111) > M_PI ? sign(a111) * -M_2PI + a000 : a000;
 
  // Trilinear blending of the samples
  vec2 t0 = coord.tex_coord * vec2(texSize0) - vec2(itex_coord0);
  vec2 t1 = coord.tex_coord * vec2(texSize1) - vec2(itex_coord1);
  return mix(
  mix(mix(a000, a001, t0.x), mix(a010, a011, t0.x), t0.y),
  mix(mix(a100, a101, t1.x), mix(a110, a111, t1.x), t1.y),
  level - float(level0));
 }
```







[ ](#section-11)

Return sampled opacity or a default value





```glsl
float getOpacity(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_OPACITY * (1.0 - sampledValue.g);
 }
 
 float getOpacity(SamplerSparse smp, SparseCoord coord)
 {
  return getOpacity(textureSparse(smp, coord));
 }
```







[ ](#section-12)

Return sampled height or a default value





```glsl
float getHeight(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_HEIGHT * (1.0 - sampledValue.g);
 }
 
 float getHeight(SamplerSparse smp, SparseCoord coord)
 {
  return getHeight(textureSparse(smp, coord));
 }
```







[ ](#section-13)

Return sampled displacement or a default value





```glsl
float getDisplacement(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_DISPLACEMENT * (1.0 - sampledValue.g);
 }
 
 float getDisplacement(SamplerSparse smp, SparseCoord coord)
 {
  return getDisplacement(textureSparse(smp, coord));
 }
```







[ ](#section-14)

Return ambient occlusion





```glsl
float getAO(SparseCoord coord, bool is_premult, bool is_full_strength)
 {
  vec2 ao_lookup = textureSparse(base_ao_tex, coord).ra;
  float ao = ao_lookup.x + DEFAULT_AO * (1.0 - ao_lookup.y);
 
  if (ao_tex.is_set) {
  ao_lookup = textureSparse(ao_tex, coord).rg;
  if (!is_premult) ao_lookup.x *= ao_lookup.y;
  float channel_ao = ao_lookup.x + DEFAULT_AO * (1.0 - ao_lookup.y);
  if (ao_blending_mode == BlendingMode_Replace) {
  ao = channel_ao;
  } else if (ao_blending_mode == BlendingMode_Multiply) {
  ao *= channel_ao;
  }
  }
  
  // skip mix if full strength
  // Otherwise modulate AO value by AO_intensity
  return is_full_strength ? ao : mix(1.0, ao, ao_intensity);
 }
 
 float getAO(SparseCoord coord, bool is_premult)
 {
  return getAO(coord, is_premult, false);
 }
 
 float getAO(SparseCoord coord)
 {
  return getAO(coord, true, false);
 }
```







[ ](#section-15)

Return specular level





```glsl
float getSpecularLevel(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_SPECULAR_LEVEL * (1.0 - sampledValue.g);
 }
 
 float getSpecularLevel(SamplerSparse smp, SparseCoord coord)
 {
  return getSpecularLevel(textureSparse(smp, coord));
 }
```







[ ](#section-16)

Fetch the shadowing factor (screen-space)





```glsl
float getShadowFactor()
 {
  float shadowFactor = 1.0;
 
  if (sm_enable) {
  vec2 screenCoord = (gl_FragCoord.xy * vec2(screen_size.z, screen_size.w));
  vec2 shadowSample = texture(sm_tex, screenCoord).xy;
  // shadowSample.x / shadowSample.y is the normalized shadow factor.
  // shadowSample.x may already be normalized, shadowSample.y contains 0.0 in this case.
  shadowFactor = shadowSample.y == 0.0 ? shadowSample.x : shadowSample.x / shadowSample.y;
  }
 
  return mix(1.0, shadowFactor, sm_opacity);
 }
```







[ ](#section-17)

Return sampled base color or a default value





```glsl
vec3 getBaseColor(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_BASE_COLOR * (1.0 - sampledValue.a);
 }
 
 vec3 getBaseColor(SamplerSparse smp, SparseCoord coord)
 {
  return getBaseColor(textureSparse(smp, coord));
 }
```







[ ](#section-18)

Return sampled diffuse color or a default value





```glsl
vec3 getDiffuse(vec4 sampledValue)
 {
  return getBaseColor(sampledValue);
 }
 
 vec3 getDiffuse(SamplerSparse smp, SparseCoord coord)
 {
  return getDiffuse(textureSparse(smp, coord));
 }
```







[ ](#section-19)

Return sampled specular color or a default value
 Specular/Glossiness PBR workflow only





```glsl
vec3 getSpecularColor(vec4 sampledValue)
 {
  vec3 specColor = sampledValue.rgb + DEFAULT_BASE_COLOR * (1.0 - sampledValue.a);
  vec3 defaultF0 = mix(vec3(0.04), specColor, DEFAULT_METALLIC);
  return mix(specColor, defaultF0, (1.0 - sampledValue.a));
 }
 
 vec3 getSpecularColor(SamplerSparse smp, SparseCoord coord)
 {
  return getSpecularColor(textureSparse(smp, coord));
 }
```







[ ](#section-20)

Generate anisotropic roughness from roughness and anisotropy level





```glsl
vec2 generateAnisotropicRoughness(float roughness, float anisoLevel)
 {
  return vec2(roughness, roughness / sqrt(max(1e-8, 1.0 - anisoLevel)));
 }
```







[ ](#section-21)

Generate anisotropic roughness from roughness and anisotropy level,
 for the ASM model.





```glsl
vec2 generateAnisotropicRoughnessASM(float roughness, float anisoLevel)
 {
  float alphaU = min(1., roughness*roughness + pow(anisoLevel , 4.0));
  return vec2(sqrt(alphaU), roughness);
 }
```







[ ](#section-22)

Generate diffuse color from base color and metallic factor





```glsl
vec3 generateDiffuseColor(vec3 baseColor, float metallic)
 {
  return baseColor * (1.0 - metallic);
 }
```







[ ](#section-23)

Generate specular color from dielectric specular level, base color and metallic factor





```glsl
vec3 generateSpecularColor(float specularLevel, vec3 baseColor, float metallic)
 {
  return mix(vec3(0.08 * specularLevel), baseColor, metallic);
 }
```







[ ](#section-24)

Generate specular color from base color and metallic factor, using default
 specular level (0.04) for dielectrics





```glsl
vec3 generateSpecularColor(vec3 baseColor, float metallic)
 {
  return mix(vec3(0.04), baseColor, metallic);
 }
```







[ ](#section-25)

Return sampled transmissive value or a default value





```glsl
float getTranslucency(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_TRANSLUCENCY * (1.0 - sampledValue.g);
 }
 
 float getTranslucency(SamplerSparse smp, SparseCoord coord)
 {
  return getTranslucency(textureSparse(smp, coord));
 }
 
 vec3 getAbsorptionColor(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_ABSORPTION_COLOR * (1.0 - sampledValue.a);
 }
 
 vec3 getAbsorptionColor(SamplerSparse smp, SparseCoord coord)
 {
  return getAbsorptionColor(textureSparse(smp, coord));
 }
```







[ ](#section-26)

Return sampled scattering value per component or a default value
 Handle grayscale (same radius for R, G & B) or color texture





```glsl
vec3 getScatteringPerComponent(SamplerSparse smp, SparseCoord coord)
 {
  vec4 sampledValue = textureSparse(smp, coord);
  return smp.is_color ?
  sampledValue.rgb + vec3(DEFAULT_SCATTERING) * (1.0 - sampledValue.a) :
  vec3(sampledValue.r + DEFAULT_SCATTERING * (1.0 - sampledValue.g));
 }
```







[ ](#section-27)

Return sampled scatter color or a default value





```glsl
vec3 getScatteringColor(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_SCATTERINGCOLOR * (1.0 - sampledValue.a);
 }
 
 vec3 getScatteringColor(SamplerSparse smp, SparseCoord coord)
 {
  return getScatteringColor(textureSparse(smp, coord));
 }
```







[ ](#section-28)

Return sampled specular tint value or a default value





```glsl
vec3 getSpecularTint(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_SPECULAR_TINT * (1.0 - sampledValue.a);
 }
 
 vec3 getSpecularTint(SamplerSparse smp, SparseCoord coord)
 {
  return getSpecularTint(textureSparse(smp, coord));
 }
 
 vec3 getSpecularEdgeColor(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_SPEC_EDGE_COLOR * (1.0 - sampledValue.a);
 }
 
 vec3 getSpecularEdgeColor(SamplerSparse smp, SparseCoord coord)
 {
  return getSpecularEdgeColor(textureSparse(smp, coord));
 }
```







[ ](#section-29)

Return sampled sheen opacity (sheen weight) value or a default value





```glsl
float getSheenOpacity(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_SHEEN_OPACITY * (1.0 - sampledValue.g);
 }
 
 float getSheenOpacity(SamplerSparse smp, SparseCoord coord)
 {
  return getSheenOpacity(textureSparse(smp, coord));
 }
```







[ ](#section-30)

Return sampled sheen color value or a default value





```glsl
vec3 getSheenColor(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_SHEEN_COLOR * (1.0 - sampledValue.a);
 }
 
 vec3 getSheenColor(SamplerSparse smp, SparseCoord coord)
 {
  return getSheenColor(textureSparse(smp, coord));
 }
```







[ ](#section-31)

Return sampled sheen roughness value or a default value





```glsl
float getSheenRoughness(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_SHEEN_ROUGHNESS * (1.0 - sampledValue.g);
 }
 
 float getSheenRoughness(SamplerSparse smp, SparseCoord coord)
 {
  return getSheenRoughness(textureSparse(smp, coord));
 }
```







[ ](#section-32)

Return sampled coat opacity (coat weight) value or a default value





```glsl
float getCoatOpacity(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_COAT_OPACITY * (1.0 - sampledValue.g);
 }
 
 float getCoatOpacity(SamplerSparse smp, SparseCoord coord)
 {
  return getCoatOpacity(textureSparse(smp, coord));
 }
```







[ ](#section-33)

Return sampled coat color value or a default value





```glsl
vec3 getCoatColor(vec4 sampledValue)
 {
  return sampledValue.rgb + DEFAULT_COAT_COLOR * (1.0 - sampledValue.a);
 }
 
 vec3 getCoatColor(SamplerSparse smp, SparseCoord coord)
 {
  return getCoatColor(textureSparse(smp, coord));
 }
```







[ ](#section-34)

Return sampled coat roughness value or a default value





```glsl
float getCoatRoughness(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_COAT_ROUGHNESS * (1.0 - sampledValue.g);
 }
 
 float getCoatRoughness(SamplerSparse smp, SparseCoord coord)
 {
  return getCoatRoughness(textureSparse(smp, coord));
 }
```







[ ](#section-35)

Return sampled coat specular level value or a default value





```glsl
float getCoatSpecularLevel(vec4 sampledValue)
 {
  return sampledValue.r + DEFAULT_COAT_SPEC_LEVEL * (1.0 - sampledValue.g);
 }
 
 float getCoatSpecularLevel(SamplerSparse smp, SparseCoord coord)
 {
  return getCoatSpecularLevel(textureSparse(smp, coord));
 }
 
 
```






