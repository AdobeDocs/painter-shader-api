---
title: lib-emissive.glsl (Shader API)
description: Substance 3D Shader API
keywords:
	- Creative Cloud
	- Substance 3D
	- Painter
layout: none
---




lib-emissive.glsl








[ ](#section-0)












[ ](#section-1)

lib-emissive.glsl
=================


**Public Functions:**
`pbrComputeEmissive`


Import from library





```glsl
import lib-sparse.glsl
```







[ ](#section-2)

The emissive channel texture.





```glsl
//: param auto channel_emissive
 uniform SamplerSparse emissive_tex;
```







[ ](#section-3)

A value used to tweak the emissive intensity.





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





```glsl
vec3 pbrComputeEmissive(SamplerSparse emissive, SparseCoord coord)
 {
  return emissive_intensity * textureSparse(emissive, coord).rgb;
 }
 
 
```






