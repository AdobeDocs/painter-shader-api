---
title: Basic toon shader (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)












[ ](#section-1)

Basic toon shader
=================


Import from libraries.





```glsl
import lib-sampler.glsl
```







[ ](#section-2)

We define the global light position





```glsl
const vec3 light_pos = vec3(10.0, 10.0, 10.0);
```







[ ](#section-3)

We **bind** the auto param world eye position to our uniform **camera_pos**.





```glsl
//: param auto world_eye_position
 uniform vec3 camera_pos;
```







[ ](#section-4)

We **bind** the document's channel **base color** to our uniform **basecolor_tex**.





```glsl
//: param auto channel_basecolor
 uniform SamplerSparse basecolor_tex;
```







[ ](#section-5)

We **bind** the **mesh curvature** to our uniform **curvature_tex**.
 If no curvature is available, transparent texture is provided.





```glsl
//: param auto texture_curvature
 uniform SamplerSparse curvature_tex;
```







[ ](#section-6)

We define a new custom tweak for this shader, along with its default value.
 This one is used to tweak the thickness of outline, when shadowed.





```glsl
//: param custom {
 //: "default": 0.4,
 //: "min": 0.0,
 //: "max": 1.0,
 //: "label": "Unlit outline thickness"
 //: }
 uniform float unlit_outline_thickness;
```







[ ](#section-7)

We define a new custom tweak for this shader, along with its default value.
 This one is used to tweak the thickness of outline, when lit.





```glsl
//: param custom {
 //: "default": 0.1,
 //: "min": 0.0,
 //: "max": 1.0,
 //: "label": "Lit outline thickness"
 //: }
 uniform float lit_outline_thickness;
```







[ ](#section-8)

Whether we prefer using the curvature or not.





```glsl
//: param custom {
 //: "default": false,
 //: "label": "Use curvature"
 //: }
 uniform bool use_curvature;
```







[ ](#section-9)

Entry point of the shader.





```glsl
void shade(V2F inputs)
 {
```







[ ](#section-10)

We compute a few useful values.





```glsl
 vec3 V = normalize(camera_pos - inputs.position);
  vec3 N = normalize(inputs.normal);
  vec3 L = normalize(light_pos - inputs.position);
  float NdV = dot(N, V);
  float NdL = max(0.0, dot(N, L));
```







[ ](#section-11)

**Priority** is to performs the **outline detection**.
 Allow the user to choose whether he prefers using the curvature map
 for outline detection or not.





```glsl
 if (use_curvature) {
  float curv = textureSparse(curvature_tex, inputs.sparse_coord).r;
  NdV = 1.0 - curv;
  }
```







[ ](#section-12)

If outline condition is reach, exit with black color.





```glsl
 if (NdV < mix(unlit_outline_thickness, lit_outline_thickness, NdL)) {
  return;
  }
```







[ ](#section-13)

Here, we perform a 4 steps discretization of color.





```glsl
 vec3 color = getBaseColor(basecolor_tex, inputs.sparse_coord);
  if (NdL > 0.75) {
  color = color;
  } else if (NdL > 0.5) {
  color = color * 0.5;
  } else if (NdL > 0.1) {
  color = color * 0.1;
  }
  else
```







[ ](#section-14)

Fallback is black.





```glsl
 color = vec3(0.0);
 
  diffuseShadingOutput(color);
 }
 
 
```






