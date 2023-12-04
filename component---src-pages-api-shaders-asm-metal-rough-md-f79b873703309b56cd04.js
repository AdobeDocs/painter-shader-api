"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7767],{67744:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return c},default:function(){return u}});var o=a(87462),t=a(63366),l=(a(15007),a(64983)),s=a(91515),r=["components"],c={},i={_frontmatter:c},p=s.Z;function u(e){var n=e.components,a=(0,t.Z)(e,r);return(0,l.mdx)(p,(0,o.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"asm-metal-rough.glsl"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,l.mdx)("h1",{id:"adobe-standard-material-definition-asm-shader"},"Adobe Standard Material Definition (ASM) shader"),(0,l.mdx)("p",null,"Import from libraries."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'import lib-pbr.glsl\n import lib-pbr-aniso.glsl\n \n //: param custom {\n //: "group": "Base Surface",\n //: "label": "Enable anisotropy",\n //: "default": false,\n //: "asm": "anisotropy",\n //: "description": "<html><head/><body><p>Allows reflections to stretch in one direction along the surface.<br/><b>Please note</b>: The following channels need to be present for this parameter to have an effect: <b>Anisotropy angle</b> and <b>Anisotropy level</b>.</p></body></html>"\n //: }\n uniform_specialization bool anisotropyEnabled;\n //: param custom {\n //: "group": "Base Surface",\n //: "label": "Index of refraction",\n //: "min": 0.0,\n //: "max": 40.0,\n //: "default": 1.5,\n //: "asm": "specular_ior",\n //: "description": "<html><head/><body><p>The amount light bends as it passes through the object. Also affects the specular reflection intensity.</p></body></html>"\n //: }\n uniform float specularIoR;\n //: param custom {\n //: "group": "Base Surface",\n //: "label": "Enable edge color",\n //: "default": false,\n //: "asm": "specular_edge_color",\n //: "description": "<html><head/><body><p>Allows specifying the color of light reflections. Affects glancing angles for metallic materials.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Specular edge color</b></p></body></html>"\n //: }\n uniform_specialization bool specularEdgeColorEnabled;\n \n import lib-sheen.glsl\n \n //: param custom {\n //: "group": "Geometry",\n //: "label": "Double sided",\n //: "default": false,\n //: "description": "<html><head/><body><p>When enabled, the surface is visible on both sides, i.e. back-face culling is disabled.</p></body></html>"\n //: }\n uniform_specialization bool doubleSided;\n \n import lib-pom.glsl\n import lib-bent-normal.glsl\n \n //: param custom {\n //: "group": "Interior",\n //: "label": "Enable translucency",\n //: "default": false,\n //: "asm": "translucency",\n //: "description": "<html><head/><body><p>Allows for refractive transmission of light through the surface.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Translucency</b></p></body></html>",\n //: "enable": "!input.sssEnabled",\n //: "description_disabled": "<html><head/><body><p>Disable the <b>Subsurface Scattering</b> to use <b>Translucency</b>.</p></body></html>"\n //: }\n uniform_specialization bool translucencyEnabled;\n \n import lib-sss.glsl\n \n //: param custom {\n //: "group": "Interior",\n //: "label": "Enable absorption",\n //: "default": false,\n //: "asm": "absorption_color",\n //: "description": "<html><head/><body><p>Filters the light that passes through the volume by absorbing certain colors. Affects both translucency and subsurface scattering.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Absorption color</b></p></body></html>",\n //: "visible": "input.translucencyEnabled || input.sssEnabled"\n //: }\n uniform_specialization bool absorptionEnabled;\n \n import lib-alpha-test.glsl\n \n //: param custom {\n //: "group": "Geometry/Opacity",\n //: "label": "Enable alpha blending",\n //: "default": false,\n //: "asm": "opacity",\n //: "description": "<html><head/><body><p>Uses the opacity texture to progressively blend the transparent surface over the background.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Opacity</b></p></body></html>",\n //: "enable": "!input.sssEnabled",\n //: "description_disabled": "<html><head/><body><p>Disable the <b>Subsurface Scattering</b> to use <b>Alpha blending</b>.</p></body></html>"\n //: }\n uniform_specialization bool alphaBlendEnabled;\n \n import lib-coat.glsl\n import lib-utils.glsl\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,l.mdx)("p",null,"Declare the iray mdl material to use with this shader."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: metadata {\n //: "mdl":"mdl::alg::materials::painter::standard"\n //: }\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,l.mdx)("p",null,"Disable culling if double sided option is enabled"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: state cull_face off {"enable":"input.doubleSided"}\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,l.mdx)("p",null,"Enable 'over' alpha blending if opacity alpha blend"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: state blend over {"enable":"input.alphaBlendEnabled && !input.sssEnabled && !input.translucencyEnabled"}\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,l.mdx)("p",null,"Enable 'premultiplied over' alpha blending if translucency"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: state blend over_premult {"enable":"input.translucencyEnabled && !input.absorptionEnabled && !input.sssEnabled"}\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,l.mdx)("p",null,"Enable 'add multiply' alpha blending if absorption is required"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: state blend add_multiply {"enable":"input.translucencyEnabled && input.absorptionEnabled && !input.sssEnabled"}\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,l.mdx)("p",null,"Channels needed for metal/rough workflow are bound here."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n //: param auto channel_roughness\n uniform SamplerSparse roughness_tex;\n //: param auto channel_metallic\n uniform SamplerSparse metallic_tex;\n //: param auto channel_anisotropylevel\n uniform SamplerSparse anisotropylevel_tex;\n //: param auto channel_anisotropyangle\n uniform SamplerSparse anisotropyangle_tex;\n //: param auto channel_specularlevel\n uniform SamplerSparse specularlevel_tex;\n //: param auto channel_specularedgecolor\n uniform SamplerSparse specularedgecolor_tex;\n //: param auto channel_absorptioncolor\n uniform SamplerSparse absorptioncolor_tex;\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,l.mdx)("p",null,"Shader entry point."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"void shade(V2F inputs)\n {\n  // Apply parallax occlusion mapping if possible\n  vec3 viewTS = worldSpaceToTangentSpace(getEyeVec(inputs.position), inputs);\n  applyParallaxOffset(inputs, viewTS);\n \n  // Fetch material parameters, and conversion to the specular/roughness model\n  float baseRoughness = getRoughness(roughness_tex, inputs.sparse_coord);\n \n  float anisotropyLevel = 0.0;\n  float anisotropyAngle = 0.0;\n  if (anisotropyEnabled) {\n  anisotropyLevel = getAnisotropyLevel(anisotropylevel_tex, inputs.sparse_coord);\n  if (anisotropyLevel > 0.0) {\n  anisotropyAngle = getAnisotropyAngle(anisotropyangle_tex, inputs.sparse_coord);\n  }\n  }\n \n  vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);\n  float metallic = getMetallic(metallic_tex, inputs.sparse_coord);\n  vec3 diffColor = generateDiffuseColor(baseColor, metallic);\n  float specularLevel = getSpecularLevel(specularlevel_tex, inputs.sparse_coord);\n  vec3 specColor_metal = baseColor;\n  float dielectricF0 = iorToSpecularLevel(1.0, specularIoR);\n  float coatOpacity = 0.0;\n  if (coatEnabled) {\n  coatOpacity = getCoatOpacity(coatOpacity_tex, inputs.sparse_coord);\n  if (coatOpacity > 0.0) {\n  float underCoatF0 = iorToSpecularLevel(coatIoR, specularIoR);\n  dielectricF0 = mix(dielectricF0, underCoatF0, coatOpacity);\n  }\n  }\n  vec3 specColor_dielectric = vec3(dielectricF0 * 2.0 * specularLevel);\n \n  // Get detail (ambient occlusion) and global (shadow) occlusion factors\n  // separately in order to blend the bent normals properly\n  float shadowFactor = getShadowFactor();\n  float occlusion = getAO(inputs.sparse_coord, true, use_bent_normal);\n \n  float specOcclusion = specularOcclusionCorrection(\n  use_bent_normal ? shadowFactor : occlusion * shadowFactor,\n  metallic,\n  baseRoughness);\n \n  vec3 normal = computeWSNormal(inputs.sparse_coord,\n  inputs.tangent, inputs.bitangent, inputs.normal);\n  LocalVectors vectors = computeLocalFrame(inputs, normal, anisotropyAngle);\n  computeBentNormal(vectors,inputs);\n \n  // Diffuse lobe:\n  vec3 diffuseShading = occlusion * shadowFactor * envIrradiance(getDiffuseBentNormal(vectors));\n \n  // Specular lobes:\n  // The specs can be interpreted as interpolating between two lobes.\n  // However, due to the prohibitive cost for real-time, we interpolate\n  // between two specular colors and use it for a single specular lobe.\n  vec3 specColor = mix(specColor_dielectric, specColor_metal, metallic);\n  vec3 specSecondaryColor = vec3(1.0);\n  if (specularEdgeColorEnabled) {\n  specSecondaryColor = getSpecularEdgeColor(specularedgecolor_tex, inputs.sparse_coord);\n  }\n  vec3 specEdgeColor = mix(vec3(1.0), specSecondaryColor, metallic);\n  vec3 specColoring = mix(vec3(1.0), specSecondaryColor, 1.0 - metallic);\n  vec3 specReflection = vec3(0.0);\n  if (anisotropyEnabled) {\n  vec2 roughnessAniso = generateAnisotropicRoughnessASM(baseRoughness, anisotropyLevel);\n  specReflection = pbrComputeSpecularAnisotropic(\n  vectors,\n  specColor,\n  specEdgeColor,\n  roughnessAniso,\n  occlusion,\n  getBentNormalSpecularAmount());\n  }\n  else {\n  specReflection = pbrComputeSpecular(\n  vectors,\n  specColor,\n  specEdgeColor,\n  baseRoughness,\n  occlusion,\n  getBentNormalSpecularAmount());\n  }\n  vec3 specularShading = specOcclusion * specColoring * specReflection;\n \n  // Sheen:\n  if (sheenEnabled) {\n  float sheenOpacity = getSheenOpacity(sheenOpacity_tex, inputs.sparse_coord);\n  if (sheenOpacity > 0.0) {\n  float sheenRoughness = getSheenRoughness(sheenRoughness_tex, inputs.sparse_coord);\n  vec3 sheenColor = sheenOpacity * getSheenColor(sheenColor_tex, inputs.sparse_coord);\n  vec3 sheenSpecularShading = pbrComputeSheen(vectors, sheenColor, sheenRoughness);\n  specularShading += specOcclusion * sheenSpecularShading;\n  }\n  }\n \n  // Coating:\n  // Keep track of coat absorption quantity to know how much to reduce contribution for lower layers\n  vec3 coatAbsorption = vec3(1.0);\n  if (coatOpacity > 0.0) {\n  vec3 coatNormal = getWSCoatNormal(inputs.sparse_coord,\n  inputs.tangent, inputs.bitangent, inputs.normal);\n  LocalVectors coatVectors = computeLocalFrame(inputs, coatNormal, 0.0);\n \n  vec3 coatColor = getCoatColor(coatColor_tex, inputs.sparse_coord);\n  float coatSpecularLevel = getCoatSpecularLevel(coatSpecularLevel_tex, inputs.sparse_coord);\n  vec3 coatSpecColor = vec3(iorToSpecularLevel(1.0, coatIoR) * 2.0 * coatSpecularLevel);\n \n  float coatRoughness = getCoatRoughness(coatRoughness_tex, inputs.sparse_coord);\n  float coatSpecOcclusion = specularOcclusionCorrection(occlusion * shadowFactor, 0.0, coatRoughness);\n  vec3 coatSpecularShading = pbrComputeSpecular(coatVectors, coatSpecColor, coatRoughness);\n \n  float ndv = clamp(dot(coatVectors.normal, vectors.eye), 1e-4, 1.0);\n  coatAbsorption = coatPassageColorMultiplier(coatColor, coatOpacity, ndv);\n  coatAbsorption *= coatAbsorption;\n \n  diffuseShading *= coatAbsorption;\n  specularShading *= coatAbsorption;\n  specularShading += (coatSpecOcclusion * coatOpacity) * coatSpecularShading;\n  }\n \n  albedoOutput(diffColor);\n \n  vec3 emissiveShading = pbrComputeEmissive(emissive_tex, inputs.sparse_coord);\n \n  // Blending related effects\n  if ((translucencyEnabled || alphaBlendEnabled) && !sssEnabled) {\n  float alpha = 1.0;\n  // Opacity cut-through\n  if (alphaBlendEnabled) {\n  alpha = getOpacity(opacity_tex, inputs.sparse_coord);\n  }\n \n  // Refractive transmission\n  if (translucencyEnabled) {\n  // Blending premultiplied over: must premultiply contributions manually\n  emissiveShading *= alpha;\n  specularShading *= alpha;\n  diffuseShading *= alpha;\n \n  float translucency = getTranslucency(sss_translucency_tex, inputs.sparse_coord) * (1.0-metallic);\n  diffuseShading *= 1.0-translucency;\n \n  vec3 absorption = vec3(1.0);\n  if (absorptionEnabled) {\n  // Absorption use dual output blending mode\n  absorption = coatAbsorption * getAbsorptionColor(absorptioncolor_tex, inputs.sparse_coord);\n  color1Output(vec4(vec3(1.0)-alpha*(vec3(1.0)-absorption*translucency*(1.0-baseRoughness)), 1.0));\n  }\n \n  // Approximation: roughness cutoff the transparency\n  diffuseShading += absorption * alpha * baseRoughness * translucency * envIrradiance(-vectors.normal);\n  \n  alpha *= 1.0-(translucency*(1.0-baseRoughness));\n  }\n \n  alphaOutput(alpha);\n  }\n \n  emissiveColorOutput(emissiveShading);\n  diffuseShadingOutput(diffuseShading);\n  specularShadingOutput(specularShading);\n \n  sssCoefficientsOutput(getSSSCoefficients(inputs.sparse_coord));\n \n  vec4 baseSSSColor = getSSSColor(inputs.sparse_coord);\n  if (sssEnabled && absorptionEnabled) {\n  // Combine absorption color with scattering color if both enabled\n  baseSSSColor.rgb *= getAbsorptionColor(absorptioncolor_tex, inputs.sparse_coord);\n  }\n  sssColorOutput(baseSSSColor);\n \n  // Discard current fragment on the basis of the opacity channel\n  // and a user defined threshold\n  alphaKill(inputs.sparse_coord);\n }\n \n \n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-asm-metal-rough-md-f79b873703309b56cd04.js.map