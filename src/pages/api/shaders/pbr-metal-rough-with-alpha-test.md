---
title: Substance 3D Painter Metal/Rough and opacity PBR shader (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























Substance 3D Painter Metal/Rough and opacity PBR shader
=======================================================

---




Import from libraries.





```glsl
import lib-pbr.glsl
 import lib-bent-normal.glsl
 import lib-emissive.glsl
 import lib-pom.glsl
 import lib-sss.glsl
 import lib-alpha.glsl
 import lib-utils.glsl
 
 // Link Metal/Roughness MDL for Iray
 //: metadata {
 //:   "mdl":"mdl::alg::materials::skin_metallic_roughness::skin_metallic_roughness"
 //: }
```









Show back faces as there may be holes in front faces.





```glsl
//: state cull_face off
```









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
   sssCoefficientsOutput(getSSSCoefficients(inputs.sparse_coord));
 
   vec4 baseSSSColor = getSSSColor(inputs.sparse_coord);
   if (usesSSSScatteringColorChannel()) {
     // Must be dimmed by metallic factor as for diffuse color
     baseSSSColor.rgb = generateDiffuseColor(baseSSSColor.rgb, metallic);
   }
   sssColorOutput(baseSSSColor);
 
   // Discard current fragment on the basis of the opacity channel
   // and a user defined threshold
   alphaKill(inputs.sparse_coord);
 
   vec3 diffColor = generateDiffuseColor(baseColor, metallic);
   albedoOutput(diffColor);
   diffuseShadingOutput(occlusion * shadowFactor * envIrradiance(getDiffuseBentNormal(vectors)));
   vec3 specColor = generateSpecularColor(specularLevel, baseColor, metallic);
   specularShadingOutput(specOcclusion * pbrComputeSpecular(vectors, specColor, roughness, occlusion, getBentNormalSpecularAmount()));
 }
 
 
```






