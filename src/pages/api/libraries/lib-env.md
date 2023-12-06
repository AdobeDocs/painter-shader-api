---
title: lib-env.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)












[ ](#section-1)

lib-env.glsl
============

---




**Public Functions:**
`envSample`
`envIrradiance`
`worldToEnvSpace`


Needed for math constants





```glsl
import lib-defines.glsl
```







[ ](#section-2)

Engine provided parameters





```glsl
//: param auto texture_environment
 uniform sampler2D environment_texture;
 //: param auto environment_matrix
 uniform mat3 environment_matrix;
 //: param auto environment_exposure
 uniform float environment_exposure;
 //: param auto environment_irrad_mat_red
 uniform mat4 irrad_mat_red;
 //: param auto environment_irrad_mat_green
 uniform mat4 irrad_mat_green;
 //: param auto environment_irrad_mat_blue
 uniform mat4 irrad_mat_blue;
```







[ ](#section-3)

Helper that allows one to sample environment. Rotation is taken into
 account. The environment map is a panoramic env map behind the scene,
 that's why there is extra computation from dir vector.
 Direction must be in environment space (using worldToEnvSpace function)





```glsl
vec3 envSample(vec3 dir, float lod)
 {
  // WORKAROUND: Intel GLSL compiler for HD5000 is bugged on OSX:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=308366
  // It is necessary to replace atan(y, -x) by atan(y, -1.0 * x) to force
  // the second parameter to be interpreted as a float
  vec2 pos = M_INV_PI * vec2(atan(-dir.z, -1.0 * dir.x), 2.0 * asin(dir.y));
  pos = 0.5 * pos + vec2(0.5);
  return textureLod(environment_texture, pos, lod).rgb * environment_exposure;
 }
```







[ ](#section-4)

Transform a direction from world to environment space





```glsl
vec3 worldToEnvSpace(vec3 dirW)
 {
  return environment_matrix * dirW;
 }
```







[ ](#section-5)

Return the irradiance for a given direction. The computation is based on
 environment's spherical harmonics projection.
 Direction in world space





```glsl
vec3 envIrradiance(vec3 dirW)
 {
  vec4 shDir = vec4(worldToEnvSpace(dirW).xzy, 1.0);
  return max(vec3(0.0), vec3(
  dot(shDir, irrad_mat_red * shDir),
  dot(shDir, irrad_mat_green * shDir),
  dot(shDir, irrad_mat_blue * shDir)
  )) * environment_exposure;
 }
 
 
```






