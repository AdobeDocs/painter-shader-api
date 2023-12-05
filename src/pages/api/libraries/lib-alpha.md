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












[ ](#section-1)


==============


**Public Functions:**
`alphaKill`





```glsl


```







[ ](#section-2)

Opacity map, provided by the engine.





```glsl
//: param auto channel_opacity
 uniform SamplerSparse opacity_tex;
```







[ ](#section-3)

Alpha test threshold.





```glsl
//: param custom {
 //: "default": 0.33,
 //: "label": "Alpha threshold",
 //: "min": 0.0,
 //: "max": 1.0,
 //: "group": "Common Parameters"
 //: }
 uniform float alpha_threshold;
```







[ ](#section-4)

Alpha test dithering.





```glsl
//: param custom {
 //: "default": false,
 //: "label": "Alpha dithering",
 //: "group": "Common Parameters"
 //: }
 uniform bool alpha_dither;
```







[ ](#section-5)

Emulate alpha test : discard current fragment if
 its opacity is below a user defined threshold.
 Should be called AFTER texture sampling calls: it can break derivatives





```glsl
void alphaKill(float alpha)
 {
  float threshold = alpha_dither ? getBlueNoiseThresholdTemporal() : alpha_threshold;
  if (alpha < threshold) discard;
 }
 
 void alphaKill(SparseCoord coord)
 {
  alphaKill(getOpacity(opacity_tex, coord));
 }
 
 
```






