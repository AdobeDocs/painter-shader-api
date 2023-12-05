---
title: Substance 3D Painter Metal/Rough PBR shader (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)












[ ](#section-1)

Substance 3D Painter Metal/Rough PBR shader
===========================================


Import from libraries.





```glsl






```







[ ](#section-2)

Declare the iray mdl material to use with this shader.





```glsl
//: metadata {
 //: "mdl":"mdl::alg::materials::skin_metallic_roughness::skin_metallic_roughness"
 //: }
```







[ ](#section-3)

Channels needed for metal/rough workflow are bound here.





```glsl
//: param auto channel_basecolor
 uniform SamplerSparse basecolor_tex;
 //: param auto channel_roughness
 uniform SamplerSparse roughness_tex;
 //: param auto channel_metallic
 uniform SamplerSparse metallic_tex;
 //: param auto channel_specularlevel
 uniform SamplerSparse specularlevel_tex;
```







[ ](#section-4)

Shader entry point.





```glsl
void shade(V2F inputs)
 {
  // Apply parallax occlusion mapping if possible
  vec3 viewTS = worldSpaceToTangentSpace(getEyeVec(inputs.position), inputs);
  applyParallaxOffset(inputs, viewTS);
 
  // Fetch material parameters, and conversion to the specular/roughness model
  float roughness = getRoughness(roughness_tex, inputs.sparse_coord);
  vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);
  float metallic = getMetallic(metallic_tex, inputs.sparse_coord);
  float specularLevel = getSpecularLevel(specularlevel_tex, inputs.sparse_coord);
  vec3 diffColor = generateDiffuseColor(baseColor, metallic);
  vec3 specColor = generateSpecularColor(specularLevel, baseColor, metallic);
 
  // Get detail (ambient occlusion) and global (shadow) occlusion factors
  // separately in order to blend the bent normals properly
  float shadowFactor = getShadowFactor();
  float occlusion = getAO(inputs.sparse_coord, true, use_bent_normal);
  float specOcclusion = specularOcclusionCorrection(
  use_bent_normal ? shadowFactor : occlusion * shadowFactor,
  metallic,
  roughness);
 
  LocalVectors vectors = computeLocalFrame(inputs);
  computeBentNormal(vectors,inputs);
 
  // Feed parameters for a physically based BRDF integration
  emissiveColorOutput(pbrComputeEmissive(emissive_tex, inputs.sparse_coord));
  albedoOutput(diffColor);
  diffuseShadingOutput(occlusion * shadowFactor * envIrradiance(getDiffuseBentNormal(vectors)));
  specularShadingOutput(specOcclusion * pbrComputeSpecular(vectors, specColor, roughness, occlusion, getBentNormalSpecularAmount()));
  sssCoefficientsOutput(getSSSCoefficients(inputs.sparse_coord));
  sssColorOutput(getSSSColor(inputs.sparse_coord));
 }
 
 
```






