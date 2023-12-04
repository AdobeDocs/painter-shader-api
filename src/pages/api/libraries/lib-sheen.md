---
title:  (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
layout: none
---













[ ](#section-0)












[ ](#section-1)


==============


**Public Functions:**
`pbrComputeSheen`


Import from library





```glsl

```







[ ](#section-2)

All engine parameters useful for sheen.





```glsl
//: param custom {
 //: "group": "Base Surface",
 //: "label": "Enable sheen",
 //: "default": false,
 //: "asm": "sheen",
 //: "description": "<html><head/><body><p>Simulates the effect of microscopic fibers or fuzz on the surface.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Sheen opacity</b>. Optionally, the following channels provide additional control: <b>Sheen color</b> and <b>Sheen roughness</b>.</p></body></html>"
 //: }
 uniform_specialization bool sheenEnabled;
 //: param auto channel_sheenopacity
 uniform SamplerSparse sheenOpacity_tex;
 //: param auto channel_sheencolor
 uniform SamplerSparse sheenColor_tex;
 //: param auto channel_sheenroughness
 uniform SamplerSparse sheenRoughness_tex;
```







[ ](#section-3)

Import from library





```glsl

```







[ ](#section-4)

Compute the sheen BRDF contribution for importance sampling.





```glsl
vec3 sheen_contrib(float ndh, float ndl, float ndv, vec3 Ks, float roughness)
 {
  float ndh2 = ndh*ndh;
  float ndl2 = ndl*ndl;
  float ndv2 = ndv*ndv;
  float r2 = roughness*roughness;
 
  // TODO: move the D component out, to the importance sampling.
  float t = 1.0 - ndh2 + ndh2/r2;
  float Pi_D = 1.0 / (roughness * t * t);
 
  float Li = sqrt(1.0 - ndl2 + r2*ndl2) / ndl;
  float Lo = sqrt(1.0 - ndv2 + r2*ndv2) / ndv;
  float G = (1.0 - exp(-(Li + Lo))) / (Li + Lo);
 
  // This is the contribution when using importance sampling with uniform
  // sample distribution. This means sheen_contrib = sheen_brdf / (1/(2*Pi))
  // ndl is omitted since it cancels out with the ndl outside the BRDF.
  return Ks * ((2.0 * Pi_D * G / ndv) * 0.5);
 }
```







[ ](#section-5)

Compute the microfacets sheen specular reflection to the viewer's eye.





```glsl
vec3 pbrComputeSheen(LocalVectors vectors, vec3 specColor, float roughness)
 {
  vec3 radiance = vec3(0.0);
  float ndv = dot(vectors.eye, vectors.normal);
  roughness = max(1e-3, roughness);
  vec3 envT = worldToEnvSpace(vectors.tangent);
  vec3 envB = worldToEnvSpace(vectors.bitangent);
  vec3 envN = worldToEnvSpace(vectors.normal);
  vec3 envE = worldToEnvSpace(vectors.eye);
  vec3 envVertexNormal = worldToEnvSpace(vectors.vertexNormal);
 
  for(int i=0; i<nbSamples; ++i)
  {
  vec2 Xi = fibonacci2D(i, nbSamples);
  vec3 Ln = uniformSample(Xi, envT, envB, envN);
  vec3 Hn = normalize(Ln + envE);
  float fade = horizonFading(dot(envVertexNormal, Ln), horizonFade);
 
  float ndl = dot(envN, Ln);
  if (ndl > 0.0 && ndv > 0.0) {
  ndl = max( 1e-8, ndl );
  float vdh = max(1e-8, dot(envE, Hn));
  float ndh = max(1e-8, dot(envN, Hn));
  float lodS = computeLOD(Ln, 0.5 * M_INV_PI);
  radiance += fade * envSample(Ln, lodS) * sheen_contrib(ndh, ndl, ndv, specColor, roughness);
  }
  }
  radiance /= float(nbSamples);
 
  return radiance;
 }
 
 
```






