---
title: lib\-alpha\-test.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[\#](#section-0)












[\#](#section-1)

lib\-alpha\-test.glsl
=====================

---




**Public Functions:**
`alphaKill`





```glsl
import lib-sampler.glsl
 import lib-random.glsl
```







[\#](#section-2)

Opacity map, provided by the engine.





```glsl
//: param auto channel_opacity
 uniform SamplerSparse opacity_tex;
 
 //: param custom {
 //:   "group": "Geometry/Opacity",
 //:   "label": "Enable alpha test",
 //:   "default": false,
 //:   "asm": "_opacity_alpha_test",
 //:   "description": "<html><head/><body><p>Creates a binary cut-through, meaning any point on the texture is either fully transparent or fully opaque.<br/><b>Please note:</b> The following channel needs to be present for this parameter to have an effect: <b>Opacity</b></p></body></html>"
 //: }
 uniform_specialization bool alpha_test_enabled;
```







[\#](#section-3)

Alpha test threshold.





```glsl
//: param custom {
 //:   "group": "Geometry/Opacity",
 //:   "label": "Alpha test threshold",
 //:   "visible": "input.alpha_test_enabled",
 //:   "default": 0.33,
 //:   "asm": "_opacity_alpha_threshold",
 //:   "min": 0.0,
 //:   "max": 1.0,
 //:   "description": "<html><head/><body><p>The threshold of the <b>Alpha test</b>. The geometry is displayed as fully transparent for values of the <b>Opacity</b> channel that are below this threshold.</p></body></html>"
 //: }
 uniform float alpha_test_threshold;
```







[\#](#section-4)

Alpha test dithering.





```glsl
//: param custom {
 //:   "group": "Geometry/Opacity",
 //:   "label": "Alpha test dithering",
 //:   "visible": "input.alpha_test_enabled",
 //:   "default": false,
 //:   "description": "<html><head/><body><p>Applies a dithered noise to the <b>Alpha test</b> mask.<br/><b>Please note</b>: It is recommended to enable <b>Activate Temporal Anti-Aliasing</b> in <b>Display Settings</b> for a smoother result.</p></body></html>"
 //: }
 uniform bool alpha_test_dither;
```







[\#](#section-5)

Emulate alpha test : discard current fragment if
 its opacity is below a user defined threshold.
 Should be called AFTER texture sampling calls: it can break derivatives





```glsl
void alphaKill(SparseCoord coord)
 {
 	if (alpha_test_enabled) {
 		float alpha = getOpacity(opacity_tex, coord);
 		float threshold = alpha_test_dither ? getBlueNoiseThresholdTemporal() : alpha_test_threshold;
 		if (alpha < threshold) discard;
 	}
 }
 
 
```






