---
title: lib-coat (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)












[ ](#section-1)


=============


**Public Functions:**
`iorToSpecularLevel`
`getCoatNormal`


Import from library





```glsl

```







[ ](#section-2)

All engine parameters useful for coat.





```glsl
//: param custom {
 //: "group": "Coat",
 //: "label": "Enable",
 //: "default": false,
 //: "asm": "coat",
 //: "description": "<html><head/><body><p>Simulates a layer on top of the material. Used to create clear coats, lacquers, and varnishes.</p></body></html>"
 //: }
 uniform_specialization bool coatEnabled;
 //: param auto channel_coatopacity
 uniform SamplerSparse coatOpacity_tex;
 //: param auto channel_coatcolor
 uniform SamplerSparse coatColor_tex;
 //: param auto channel_coatroughness
 uniform SamplerSparse coatRoughness_tex;
 //: param custom {
 //: "group": "Coat",
 //: "label": "Index of refraction",
 //: "min": 0.0,
 //: "max": 40.0,
 //: "default": 1.6,
 //: "visible": "input.coatEnabled",
 //: "asm": "coat_ior",
 //: "description": "<html><head/><body><p>The amount light bends as it passes through the coat.</p></body></html>"
 //: }
 uniform float coatIoR;
 //: param auto channel_coatspecularlevel
 uniform SamplerSparse coatSpecularLevel_tex;
 //: param auto channel_coatnormal
 uniform SamplerSparse coatNormal_tex;
```







[ ](#section-3)

Import from library





```glsl


```







[ ](#section-4)

Compute an f0 at the interface between to materials from their indices of refraction.





```glsl
float iorToSpecularLevel(float iorFrom, float iorTo)
 {
  float sqrtR0 = (iorTo-iorFrom) / (iorTo+iorFrom);
  return sqrtR0*sqrtR0;
 }
```







[ ](#section-5)

Return the coat normal in world space.





```glsl
vec3 getWSCoatNormal(SparseCoord coord, vec3 tangent, vec3 bitangent, vec3 normal)
 {
  vec3 tsNormal = (coatNormal_tex.is_set ?
  normalUnpack(textureSparse(coatNormal_tex, coord), base_normal_y_coeff) :
  vec3(0.0, 0.0, 1.0));
  return normalize(
  tsNormal.x * tangent +
  tsNormal.y * bitangent +
  tsNormal.z * normal
  );
 }
```







[ ](#section-6)

Compute the approximate colored coat absorption for a given view direction.





```glsl
vec3 coatPassageColorMultiplier(vec3 coatColor, float coatOpacity, float ndv)
 {
  if (min(coatColor.r, min(coatColor.g, coatColor.b)) < 1.0)
  {
  float power = 0.1575 / mix(0.24, 1.0, ndv * ndv) + 0.25;
  return pow(mix(vec3(1.0), coatColor, coatOpacity), vec3(power));
  }
  else
  {
  return vec3(1.);
  }
 }
 
 
```






