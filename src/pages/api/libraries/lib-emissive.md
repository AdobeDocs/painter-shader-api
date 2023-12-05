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


=================


**Public Functions:**
`pbrComputeEmissive`


Import from library





<CodeBlock languages="glsl"/>
```glsl

```







[ ](#section-2)

The emissive channel texture.





<CodeBlock languages="glsl"/>
```glsl
//: param auto channel_emissive
 uniform SamplerSparse emissive_tex;
```







[ ](#section-3)

A value used to tweak the emissive intensity.





<CodeBlock languages="glsl"/>
```glsl
//: param custom {
 //: "default": 1.0,
 //: "label": "Emissive intensity",
 //: "min": 0.0,
 //: "max": 100.0,
 //: "group": "Base Surface",
 //: "asm": "emission",
 //: "description": "<html><head/><body><p>The intensity of light emitted by the surface.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Emissive</b></p></body></html>"
 //: }
 uniform float emissive_intensity;
```







[ ](#section-4)

Compute the emissive radiance to the viewer's eye





<CodeBlock languages="glsl"/>
```glsl
vec3 pbrComputeEmissive(SamplerSparse emissive, SparseCoord coord)
 {
  return emissive_intensity * textureSparse(emissive, coord).rgb;
 }
 
 
```






