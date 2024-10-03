---
title: lib\-random.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[\#](#section-0)












[\#](#section-1)

lib\-random.glsl
================

---




**Public Functions:**
`getBlueNoiseThreshold`
`getBlueNoiseThresholdTemporal`
`fibonacci1D`
`fibonacci2D`
`fibonacci2DDitheredTemporal`


Import from library





```glsl
import lib-defines.glsl
```







[\#](#section-2)

A 2D blue noise texture containing scalar values





```glsl
//: param auto texture_blue_noise
 uniform sampler2D texture_blue_noise;
```







[\#](#section-3)

Blue noise texture resolution





```glsl
const ivec2 texture_blue_noise_size = ivec2(256);
```







[\#](#section-4)

Current frame random seed





```glsl
//: param auto random_seed
 uniform int alg_random_seed;
```







[\#](#section-5)

Get an uniform random value based on pixel coordinates.





```glsl
float getBlueNoiseThreshold()
 {
   return texture(texture_blue_noise, gl_FragCoord.xy / vec2(texture_blue_noise_size)).x + 0.5 / 65536.0;
 }
```







[\#](#section-6)

Get an uniform random value based on pixel coordinates and frame id.





```glsl
float getBlueNoiseThresholdTemporal()
 {
   return fract(getBlueNoiseThreshold() + M_GOLDEN_RATIO * alg_random_seed);
 }
```







[\#](#section-7)

Return the i*th* number from fibonacci sequence.





```glsl
float fibonacci1D(int i)
 {
   return fract((float(i) + 1.0) * M_GOLDEN_RATIO);
 }
```







[\#](#section-8)

Return the i*th* couple from the fibonacci sequence.
 nbSample is required to get an uniform distribution.





```glsl
vec2 fibonacci2D(int i, int nbSamples)
 {
   return vec2(
     (float(i)+0.5) / float(nbSamples),
     fibonacci1D(i)
   );
 }
```







[\#](#section-9)

Return the i*th* couple from the fibonacci sequence.
 nbSample is required to get an uniform distribution.
 This version has a per frame and per pixel pseudo\-random rotation applied.





```glsl
vec2 fibonacci2DDitheredTemporal(int i, int nbSamples)
 {
   vec2 s = fibonacci2D(i, nbSamples);
   s.x += getBlueNoiseThresholdTemporal();
   return s;
 }
 
 
```






