---
title: lib\-pbr\-aniso.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[\#](#section-0)












[\#](#section-1)

lib\-pbr\-aniso.glsl
====================

---




**Public Functions:**
`normal_distrib`
`G1`
`visibility`
`cook_torrance_contrib`
`importanceSampleGGX`
`probabilityGGX`
`pbrComputeSpecularAnisotropic`


Import from library





```glsl
import lib-pbr.glsl
```







[\#](#section-2)

BRDF related functions





```glsl
float normal_distrib(
   vec3 localH,
   vec2 alpha)
 {
   localH.xy /= alpha;
   float tmp = dot(localH, localH);
   return 1.0 / (M_PI * alpha.x * alpha.y * tmp * tmp);
 }
 
 float G1(
   vec3 localW,
   vec2 alpha)
 {
   // One generic factor of the geometry function divided by ndw
   localW.xy *= alpha;
   return 2.0 / (localW.z + length(localW));
 }
 
 float visibility(
   vec3 localL,
   vec3 localV,
   vec2 alpha)
 {
   // visibility is a Cook-Torrance geometry function divided by (n.l)*(n.v)
   return G1(localL, alpha) * G1(localV, alpha);
 }
 
 vec3 cook_torrance_contrib(
   float vdh,
   float ndh,
   vec3 localL,
   vec3 localE,
   vec3 F0,
   vec3 F82,
   vec2 alpha)
 {
   // This is the contribution when using importance sampling with the GGX based
   // sample distribution. This means ct_contrib = ct_brdf / ggx_probability
   return fresnel(vdh, F0, F82) * (visibility(localL, localE, alpha) * vdh * localL.z / ndh);
 }
 
 vec3 cook_torrance_contrib(
   float vdh,
   float ndh,
   vec3 localL,
   vec3 localE,
   vec3 Ks,
   vec2 alpha)
 {
   return cook_torrance_contrib(vdh, ndh, localL, localE, Ks, vec3(1.0), alpha);
 }
 
 vec3 importanceSampleGGX(vec2 Xi, vec2 alpha)
 {
   float phi = 2.0 * M_PI * Xi.x;
   vec2 slope = sqrt(Xi.y / (1.0 - Xi.y)) * alpha * vec2(cos(phi), sin(phi));
   return normalize(vec3(slope, 1.0));
 }
 
 float probabilityGGX(vec3 localH, float vdh, vec2 alpha)
 {
   return normal_distrib(localH, alpha) * localH.z / (4.0 * vdh);
 }
 
 vec3 pbrComputeSpecularAnisotropic(
   LocalVectors vectors,
   vec3 F0,
   vec3 F82,
   vec2 roughness,
   float occlusion,
   float bentNormalSpecularAmount)
 {
   vec3 radiance = vec3(0.0);
   vec2 alpha = roughness * roughness;
   mat3 TBN = mat3(vectors.tangent, vectors.bitangent, vectors.normal);
   vec3 localE = vectors.eye * TBN;
   mat3 envTBN = mat3(
     worldToEnvSpace(vectors.tangent),
     worldToEnvSpace(vectors.bitangent),
     worldToEnvSpace(vectors.normal));
   vec3 envVertexN =  worldToEnvSpace(vectors.vertexNormal);
   vec3 envBent =  worldToEnvSpace(vectors.bent);
 
   // Bent normals occlusion
   float occlusionStart = 0.75 - occlusion;
   float occlusionEnd = 1.0 - occlusion;
 
   for(int i=0; i<nbSamples; ++i)
   {
     vec2 Xi = fibonacci2DDitheredTemporal(i, nbSamples);
     vec3 localH = importanceSampleGGX(Xi, alpha);
     vec3 localL = reflect(-localE, localH);
 
     float specOcclusion = 1.0;
     vec3 envL = envTBN * localL;
 
     if(bentNormalSpecularAmount!=0.0)
     {
         float mask = 1.0 - sqrt(1.0 - max(0.0, dot(envBent, envL)));
         specOcclusion = smoothstep(occlusionStart, occlusionEnd, mask);
         specOcclusion = mix(1.0, specOcclusion, bentNormalSpecularAmount);
     }
 
     if (localL.z > 0.0)
     {
       float vdh = max(1e-8, dot(localE, localH));
 
       float fade = horizonFading(dot(envVertexN, envL), horizonFade);
       float pdf = probabilityGGX(localH, vdh, alpha);
       float lodS = max(roughness.x, roughness.y) < 0.01 ? 0.0 : computeLOD(envL, pdf);
       // Offset lodS to trade bias for more noise
       lodS -= 1.0;
       vec3 preconvolvedSample = envSample(envL, lodS);
 
       radiance +=
         fade * specOcclusion * cook_torrance_contrib(vdh, localH.z, localL, localE, F0, F82, alpha) *
         preconvolvedSample;
     }
   }
 
   return radiance / float(nbSamples);
 }
 
 vec3 pbrComputeSpecularAnisotropic(
   LocalVectors vectors,
   vec3 F0,
   vec3 F82,
   vec2 roughness)
 {
   return pbrComputeSpecularAnisotropic(vectors, F0, F82, roughness, 1.0, 0.0);
 }
 
 vec3 pbrComputeSpecularAnisotropic(
   LocalVectors vectors,
   vec3 specColor,
   vec2 roughness,
   float occlusion,
   float bentNormalSpecularAmount)
 {
   return pbrComputeSpecularAnisotropic(vectors, specColor, vec3(1.0), roughness, occlusion, bentNormalSpecularAmount);
 }
 
 vec3 pbrComputeSpecularAnisotropic(
   LocalVectors vectors,
   vec3 specColor,
   vec2 roughness)
 {
   return pbrComputeSpecularAnisotropic(vectors, specColor, roughness, 1.0, 0.0);
 }
 
 
```






