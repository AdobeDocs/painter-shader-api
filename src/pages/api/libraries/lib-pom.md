---
title: lib-pom.glsl (Shader API)
description: Substance 3D Shader API
keywords:
- Creative Cloud
- Substance 3D
- Painter
layout: none
---




lib-pom.glsl








[ ](#section-0)












[ ](#section-1)

lib-pom.glsl
============


**Public Functions:**
`getParallaxOffset`
`applyParallaxOffset`


Import from library





```glsl
import lib-sampler.glsl
```







[ ](#section-2)

Parallax occlusion mapping related uniforms





```glsl
//: param auto is_2d_view
 uniform bool isTextureView;
 
 //: param auto channel_displacement
 uniform SamplerSparse displacement_texture;
 
 //: param custom {
 //: "label": "Enable",
 //: "default": false,
 //: "group": "Geometry/Parallax Occlusion Mapping",
 //: "description": "<html><head/><body><p>Simulates displacement of the surface without actually moving the mesh's vertices.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Displacement</b></p></body></html>"
 //: }
 uniform_specialization bool usePOM;
 
 //: param custom {
 //: "label": "Strength",
 //: "default": 1.0,
 //: "min": 0.01,
 //: "max": 10.0,
 //: "group": "Geometry/Parallax Occlusion Mapping",
 //: "visible": "input.usePOM",
 //: "description": "<html><head/><body><p>The strength of the simulated displacement.</p></body></html>"
 //: }
 uniform float pomStrength;
 
 //: param custom {
 //: "label": "Minimum samples",
 //: "default": 4,
 //: "min": 1,
 //: "max": 64,
 //: "group": "Geometry/Parallax Occlusion Mapping",
 //: "visible": "input.usePOM",
 //: "description": "<html><head/><body><p>The minimum number of samples performed for the intersection lookup.</p></body></html>"
 //: }
 uniform int minPOMSamples;
 
 //: param custom {
 //: "label": "Maximum samples",
 //: "default": 16,
 //: "min": 1,
 //: "max": 64,
 //: "group": "Geometry/Parallax Occlusion Mapping",
 //: "visible": "input.usePOM",
 //: "description": "<html><head/><body><p>The maximum number of samples performed for the intersection lookup.</p></body></html>"
 //: }
 uniform int maxPOMSamples;
```







[ ](#section-3)

Compute the offset of texture coordinates based on parallax





```glsl
vec2 getParallaxOffset(SparseCoord coord, vec3 viewTS)
 {
  if (!usePOM || isTextureView || !displacement_texture.is_set) return vec2(0.0);
 
  vec2 dfdx,dfdy;
  textureSparseQueryGrad(dfdx, dfdy, displacement_texture, coord);
 
  // Convention: 1.0 is top, -1.0 is bottom - POM is always inward, no extrusion
  int nbSteps = int(mix(maxPOMSamples, minPOMSamples, viewTS.z));
  float amplitude = 4.0 * pomStrength / (HEIGHT_FACTOR * abs(viewTS.z) * nbSteps);
  vec3 rayStep = vec3(-amplitude * viewTS.xy, -2.0 / nbSteps);
 
  // Raymarch until we cross the surface
  vec3 rayPos = vec3(coord.tex_coord, 1.0);
  float prevHeight;
  float currHeight = getDisplacement(textureGrad(displacement_texture.tex, rayPos.xy, dfdx, dfdy));
  int i = 0;
  do {
  rayPos += rayStep;
  prevHeight = currHeight;
  currHeight = getDisplacement(textureGrad(displacement_texture.tex, rayPos.xy, dfdx, dfdy));
  i++;
  } while (i < nbSteps && currHeight < rayPos.z);
 
  // Binary search with linear interpolation to refine intersection
  vec3 prevRayPos = rayPos - rayStep;
  vec3 newRayPos = prevRayPos;
  float newHeight = prevHeight;
  i = 0;
  while (i < 3 && abs(newHeight - newRayPos.z) > 1e-3) {
  float prevDelta = prevRayPos.z - prevHeight;
  float delta = currHeight - rayPos.z;
  newRayPos = (prevDelta * rayPos + delta * prevRayPos) / (prevDelta + delta);
  newHeight = getDisplacement(textureGrad(displacement_texture.tex, newRayPos.xy, dfdx, dfdy));
 
  if (newHeight > newRayPos.z) {
  currHeight = newHeight;
  rayPos = newRayPos;
  } else {
  prevHeight = newHeight;
  prevRayPos = newRayPos;
  }
 
  i++;
  }
 
  return newRayPos.xy - coord.tex_coord;
 }
```







[ ](#section-4)

Update input texture coordinates with parallax offset





```glsl
void applyParallaxOffset(inout V2F inputs, vec3 viewTS)
 {
  vec2 offset = getParallaxOffset(inputs.sparse_coord, viewTS);
  if (any(notEqual(offset,vec2(0.0)))) {
  inputs.tex_coord += offset;
  inputs.sparse_coord = getSparseCoord(inputs.tex_coord);
  }
 }
 
 
```






