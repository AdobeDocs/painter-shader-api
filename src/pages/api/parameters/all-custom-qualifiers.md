---
title: Custom qualifiers (Shader API)
description: Substance 3D Shader API
keywords:
	- Creative Cloud
	- Substance 3D
	- Painter
layout: none
---




all-custom-qualifiers.glsl








[ ](#section-0)












[ ](#section-1)

Custom qualifiers
=================


uniform_specialization
-----------------------


*uniform_specialization* custom qualifier can be used as drop-in replacement of *uniform*
 qualifier before *bool*, *int*, *float*, *ivec2*, *ivec3*, *ivec4*, *vec2*, *vec3*, *vec4* types.
 It's handled as a regular uniform, except that it forces shader specializations: uniform value
 is inlined as a constant.
 An optimized shader is instanced and compiled for each different value chosen by the user.
 For float types, only zero values are specialized.


By reducing complexity of shaders, in particular uber shaders,
 it allows visible performance boost when used properly, without sacrificing flexibility.


Basic usage:





```glsl
//: param custom { "default": false, "label": "Heavy feature" }
 uniform_specialization bool u_enable_heavy_featureA;
 //: param custom { "default": 0, "label": "Contribution weight of another heavy feature" }
 uniform_specialization float u_weight_heavy_featureB;
 
 vec4 heavyFeatureA() { ... }
 vec4 heavyFeatureB() { ... }
```







[ ](#section-2)

Shader entry point





```glsl
vec4 shade(V2F inputs)
 {
  vec4 result_color(0.0);
 
  if (u_enable_heavy_featureA) {
  // Eliminated if u_enable_heavy_feature is false
  result_color += heavyFeatureA();
  }
 
  // heavyFeatureB() is eliminated if u_weight_heavy_computation is 0
  result_color += heavyFeatureB() * u_weight_heavy_featureB;
 
  return result_color;
 }
 
 
```






