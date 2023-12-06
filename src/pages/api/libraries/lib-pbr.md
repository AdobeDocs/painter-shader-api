---
title: lib-pbr.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)












[ ](#section-1)

lib-pbr.glsl
============

---




**Public Functions:**
`normal_distrib`
`fresnel`
`G1`
`visibility`
`horizonFading`
`pbrComputeDiffuse`
`pbrComputeSpecular`


Number of miplevels in the envmap.





```glsl
//: param auto environment_max_lod
 uniform float maxLod;
```







[ ](#section-2)

An int representing the number of samples made for specular contribution
 computation. The more the higher quality and the performance impact.





```glsl
//: param custom {
 //: "default": 16,
 //: "label": "Specular quality",
 //: "widget": "combobox",
 //: "values": {
 //: "Very low (4 spp)": 4,
 //: "Low (16 spp)": 16,
 //: "Medium (32 spp)": 32,
 //: "High (64 spp)": 64,
 //: "Very high (128 spp)": 128,
 //: "Ultra (256 spp)": 256
 //: },
 //: "group": "Base Surface",
 //: "description": "<html><head/><body><p>The quality of the specular reflection. Choose the number of samples per pixel (SPP).</p></body></html>"
 //: }
 uniform int nbSamples;
```







[ ](#section-3)

Value used to control specular reflection leaking through the surface.





```glsl
//: param custom {
 //: "default": 1.3,
 //: "label": "Horizon fading",
 //: "min": 0.0,
 //: "max": 2.0,
 //: "group": "Base Surface",
 //: "description": "<html><head/><body><p>Reduces unexpected specular reflection at angles pointing beneath the surface horizon.</p></body></html>"
 //: }
 uniform float horizonFade;
```







[ ](#section-4)

Import from library, other parameters





```glsl
import lib-env.glsl
 import lib-emissive.glsl
 import lib-random.glsl
 import lib-vectors.glsl
```







[ ](#section-5)

BRDF related functions





```glsl
const float EPSILON_COEF = 1e-4;
 
 float normal_distrib(
  float ndh,
  float Roughness)
 {
  // use GGX / Trowbridge-Reitz, same as Disney and Unreal 4
  // cf http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf p3
  float alpha = Roughness * Roughness;
  float tmp = alpha / max(1e-8,(ndh*ndh*(alpha*alpha-1.0)+1.0));
  return tmp * tmp * M_INV_PI;
 }
 
 vec3 fresnel(
  float vdh,
  vec3 F0)
 {
  // Schlick with Spherical Gaussian approximation
  // cf http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf p3
  float sphg = exp2((-5.55473*vdh - 6.98316) * vdh);
  return F0 + (vec3(1.0) - F0) * sphg;
 }
 
 vec3 fresnel(
  float vdh,
  vec3 F0,
  vec3 F82)
 {
  vec3 b = (1.0 - F82) * (F0 * 9.48471792 + 8.16666665);
  float e = 1.0 - vdh;
  float e5 = e * e; e5 *= e5 * e;
  vec3 offset = (1.0 - F0 - b * (vdh * e)) * e5;
  return clamp(F0 + offset, 0.0, 1.0);
 }
 
 float G1(
  float ndw, // w is either Ln or Vn
  float k)
 {
  // One generic factor of the geometry function divided by ndw
  // NB : We should have k > 0
  return 1.0 / ( ndw*(1.0-k) + k );
 }
 
 float visibility(
  float ndl,
  float ndv,
  float Roughness)
 {
  // Schlick with Smith-like choice of k
  // cf http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf p3
  // visibility is a Cook-Torrance geometry function divided by (n.l)*(n.v)
  float k = max(Roughness * Roughness * 0.5, 1e-5);
  return G1(ndl,k)*G1(ndv,k);
 }
 
 vec3 cook_torrance_contrib(
  float vdh,
  float ndh,
  float ndl,
  float ndv,
  vec3 F0,
  vec3 F82,
  float Roughness)
 {
  // This is the contribution when using importance sampling with the GGX based
  // sample distribution. This means ct_contrib = ct_brdf / ggx_probability
  return fresnel(vdh, F0, F82) * (visibility(ndl, ndv, Roughness) * vdh * ndl / ndh );
 }
 
 vec3 cook_torrance_contrib(
  float vdh,
  float ndh,
  float ndl,
  float ndv,
  vec3 Ks,
  float Roughness)
 {
  return cook_torrance_contrib(vdh, ndh, ndl, ndv, Ks, vec3(1.0), Roughness);
 }
 
 vec3 uniformSample(vec2 Xi, vec3 T, vec3 B, vec3 N)
 {
  float cosT = Xi.y;
  float sinT = sqrt(1.0-cosT*cosT);
  float phi = 2.0*M_PI*Xi.x;
  return
  T * (sinT*cos(phi)) +
  B * (sinT*sin(phi)) +
  N * cosT;
 }
 
 vec3 importanceSampleGGX(vec2 Xi, vec3 T, vec3 B, vec3 N, float roughness)
 {
  float a = roughness*roughness;
  float cosT = sqrt((1.0-Xi.y)/(1.0+(a*a-1.0)*Xi.y));
  float sinT = sqrt(1.0-cosT*cosT);
  float phi = 2.0*M_PI*Xi.x;
  return
  T * (sinT*cos(phi)) +
  B * (sinT*sin(phi)) +
  N * cosT;
 }
 
 float probabilityGGX(float ndh, float vdh, float Roughness)
 {
  return normal_distrib(ndh, Roughness) * ndh / (4.0*vdh);
 }
 
 float distortion(vec3 Wn)
 {
  // Computes the inverse of the solid angle of the (differential) pixel in
  // the cube map pointed at by Wn
  float sinT = sqrt(1.0-Wn.y*Wn.y);
  return sinT;
 }
 
 float computeLOD(vec3 Ln, float p)
 {
  return max(0.0, (maxLod-1.5) - 0.5 * log2(float(nbSamples) * p * distortion(Ln)));
 }
```







[ ](#section-6)

Horizon fading trick from <https://marmosetco.tumblr.com/post/81245981087>





```glsl
float horizonFading(float ndl, float horizonFade)
 {
  float horiz = clamp(1.0 + horizonFade * ndl, 0.0, 1.0);
  return horiz * horiz;
 }
```







[ ](#section-7)

Compute the lambertian diffuse radiance to the viewer's eye





```glsl
vec3 pbrComputeDiffuse(vec3 normal, vec3 diffColor)
 {
  return envIrradiance(normal) * diffColor;
 }
```







[ ](#section-8)

Compute the microfacets specular reflection to the viewer's eye





```glsl
vec3 pbrComputeSpecular(
  LocalVectors vectors,
  vec3 F0,
  vec3 F82,
  float roughness,
  float occlusion,
  float bentNormalSpecularAmount)
 {
  vec3 radiance = vec3(0.0);
  float ndv = dot(vectors.eye, vectors.normal);
 
  // Bent normals occlusion
  float occlusionStart = 0.75 - occlusion;
  float occlusionEnd = 1.0 - occlusion;
  vec3 envT = worldToEnvSpace(vectors.tangent);
  vec3 envB = worldToEnvSpace(vectors.bitangent);
  vec3 envN = worldToEnvSpace(vectors.normal);
  vec3 envE = worldToEnvSpace(vectors.eye);
  vec3 envVertexNormal = worldToEnvSpace(vectors.vertexNormal);
  vec3 envBent = worldToEnvSpace(vectors.bent);
 
  for(int i=0; i<nbSamples; ++i)
  {
  vec2 Xi = fibonacci2DDitheredTemporal(i, nbSamples);
  vec3 Hn = importanceSampleGGX(Xi, envT, envB, envN, roughness);
  vec3 Ln = -reflect(envE,Hn);
 
  float fade = horizonFading(dot(envVertexNormal, Ln), horizonFade);
 
  float specOcclusion = 1.0;
  if(bentNormalSpecularAmount!=0.0)
  {
  float mask = 1.0 - sqrt(1.0 - max(0.0, dot(envBent, Ln)));
  specOcclusion = smoothstep(occlusionStart, occlusionEnd, mask);
  specOcclusion = mix(1.0, specOcclusion, bentNormalSpecularAmount);
  }
 
  float ndl = dot(envN, Ln);
  ndl = max( 1e-8, ndl );
  float vdh = max(1e-8, dot(envE, Hn));
  float ndh = max(1e-8, dot(envN, Hn));
  float lodS = roughness < 0.01 ? 0.0 : computeLOD(Ln, probabilityGGX(ndh, vdh, roughness));
  radiance += fade * specOcclusion * envSample(Ln, lodS) *
  cook_torrance_contrib(vdh, ndh, ndl, ndv, F0, F82, roughness);
  }
  // Remove occlusions on shiny reflections
  radiance /= float(nbSamples);
 
  return radiance;
 }
 
 vec3 pbrComputeSpecular(
  LocalVectors vectors,
  vec3 F0,
  vec3 F82,
  float roughness)
 {
  return pbrComputeSpecular(vectors, F0, F82, roughness, 1.0, 0.0);
 }
 
 vec3 pbrComputeSpecular(
  LocalVectors vectors,
  vec3 specColor,
  float roughness,
  float occlusion,
  float bentNormalSpecularAmount)
 {
  return pbrComputeSpecular(vectors, specColor, vec3(1.0), roughness, occlusion, bentNormalSpecularAmount);
 }
 
 vec3 pbrComputeSpecular(
  LocalVectors vectors,
  vec3 specColor,
  float roughness)
 {
  return pbrComputeSpecular(vectors, specColor, roughness, 1.0, 0.0);
 }
 
 
```






