---
title: Basic pixelating shader (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























Basic pixelating shader
=======================

---




Import from libraries.





```glsl
import lib-sampler.glsl
```









We define the global light position





```glsl
const vec3 light_pos = vec3(10.0, 10.0, 10.0);
```









We **bind** the auto param world eye position to our uniform **camera_pos**.





```glsl
//: param auto world_eye_position
 uniform vec3 camera_pos;
```









We **bind** the document's channel **base color** to our uniform **basecolor_tex**.





```glsl
//: param auto channel_basecolor
 uniform SamplerSparse basecolor_tex;
```









We define a new custom tweak for this shader, along with its default value.
 This one is used to tweak the thickness of outline, when shadowed.





```glsl
//: param custom {
 //:  "default": 0.4,
 //:   "min": 0.0,
 //:   "max": 1.0,
 //:   "label": "Unlit outline thickness"
 //: }
 uniform float unlit_outline_thickness;
```









We define a new custom tweak for this shader, along with its default value.
 This one is used to tweak the thickness of outline, when lit.





```glsl
//: param custom {
 //:   "default": 0.1,
 //:   "min": 0.0,
 //:   "max": 1.0,
 //:   "label": "Lit outline thickness"
 //: }
 uniform float lit_outline_thickness;
```









Entry point of the shader.





```glsl
void shade(V2F inputs)
 {
```









We compute a few useful values.





```glsl
  vec3 V = normalize(camera_pos - inputs.position);
   vec3 N = normalize(inputs.normal);
   vec3 L = normalize(light_pos - inputs.position);
   float NdV = dot(N, V);
   float NdL = max(0.0, dot(N, L));
```









**Priority** is to performs the **outline detection**.
 If outline condition is reach, exit with black color.





```glsl
  if (NdV < mix(unlit_outline_thickness, lit_outline_thickness, NdL)) {
     return;
   }
 
   vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);
```









Introduce some jitter to mask size, based on base color luminance





```glsl
  float maskRadiusJitter = pow(dot(baseColor, vec3(0.3333)), 0.1);
```









Compute a mask value, based on screen space position of fragment.
 This will create a grid like pattern.





```glsl
  float mask = pow(1.0 - length(fract(gl_FragCoord.xy / 7.0) - vec2(0.5)), maskRadiusJitter * 5.0) * 5.0;
```









Here, we sample the base color and apply a simple diffuse attenuation





```glsl
  vec3 color = baseColor * NdL;
 
   diffuseShadingOutput(mask * color);
 }
 
 
```






