"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2682],{90472:function(e,o,a){a.r(o),a.d(o,{_frontmatter:function(){return c},default:function(){return p}});var n=a(87462),t=a(63366),r=(a(15007),a(64983)),s=a(91515),l=["components"],c={},u={_frontmatter:c},i=s.Z;function p(e){var o=e.components,a=(0,t.Z)(e,l);return(0,r.mdx)(i,(0,n.Z)({},u,a,{components:o,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,r.mdx)("h1",{id:"substance-3d-painter-metalrough-coating-pbr-shader"},"Substance 3D Painter Metal/Rough Coating PBR shader"),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"Import from libraries."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'import lib-sss.glsl\n import lib-pbr.glsl\n import lib-emissive.glsl\n import lib-sampler.glsl\n import lib-utils.glsl\n \n // Link Coated Metal/Roughness MDL for Iray\n //: metadata {\n //: "mdl":"mdl::alg::materials::skin_metallic_roughness_coated::skin_metallic_roughness_coated"\n //: }\n \n //: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n //: param auto channel_roughness\n uniform SamplerSparse roughness_tex;\n //: param auto channel_metallic\n uniform SamplerSparse metallic_tex;\n //: param auto channel_specularlevel\n uniform SamplerSparse specularlevel_tex;\n //: param auto channel_user0\n uniform SamplerSparse roughnesscoat_tex;\n //: param auto channel_user1\n uniform SamplerSparse maskcoat_tex;\n \n //: param custom { "group": "Coat Layer", "default": 0.01, "label": "Roughness", "min": 0.0, "max": 1.0 }\n uniform float coating_rough;\n //: param custom { "group": "Coat Layer", "default": "false", "label": "Override with RoughnessCoat (user0) channel" }\n uniform bool coating_rough_use_tex;\n //: param custom { "group": "Coat Layer", "default": 1.0, "label": "Opacity", "min": 0.0, "max": 1.0 }\n uniform float coating_opacity;\n //: param custom { "group": "Coat Layer", "default": "false", "label": "Multiply with MaskCoat (user1) channel" }\n uniform bool coating_opacity_use_tex;\n //: param custom {\n //: "group": "Coat Layer",\n //: "label": "Surface behavior",\n //: "widget": "combobox",\n //: "default": 1,\n //: "values": {\n //: "Smooth surface": 0,\n //: "Keep details": 1\n //: }\n //: }\n uniform int coating_surface_behavior;\n //: param custom { "group": "Coat Layer", "default": 1.5, "label": "IOR", "min": 1.0, "max": 1.8 }\n uniform float coating_ior;\n \n float iorToSpecularLevel(float ior)\n {\n  float sqrtR0 = (ior-1) / (ior+1);\n  return sqrtR0*sqrtR0;\n }\n \n float textureLookup(SamplerSparse samplerSparse, SparseCoord coord, float defaultValue)\n {\n  vec2 sampledValue = textureSparse(samplerSparse, coord).rg;\n  return sampledValue.r + defaultValue * (1.0 - sampledValue.g);\n }\n \n float getCoatRoughness(SparseCoord coord)\n {\n  return coating_rough_use_tex?\n  textureLookup(roughnesscoat_tex, coord, 0.01) :\n  coating_rough;\n }\n \n float getCoatOpacity(SparseCoord coord)\n {\n  return coating_opacity_use_tex?\n  textureLookup(maskcoat_tex, coord, 1.0) * coating_opacity :\n  coating_opacity;\n }\n \n void shade(V2F inputs)\n {\n  float roughness = getRoughness(roughness_tex, inputs.sparse_coord);\n  vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);\n  float metallic = getMetallic(metallic_tex, inputs.sparse_coord);\n  float specularLevel = getSpecularLevel(specularlevel_tex, inputs.sparse_coord);\n  vec3 diffColor = generateDiffuseColor(baseColor, metallic);\n  vec3 specColor = generateSpecularColor(specularLevel, baseColor, metallic);\n  // Get detail (ambient occlusion) and global (shadow) occlusion factors\n  float occlusion = getAO(inputs.sparse_coord) * getShadowFactor();\n  float specOcclusion = specularOcclusionCorrection(occlusion, metallic, roughness);\n \n  // Material layer\n  LocalVectors vectors = computeLocalFrame(inputs);\n \n  // Feed parameters for a physically based BRDF integration\n  vec3 emissiveColor = pbrComputeEmissive(emissive_tex, inputs.sparse_coord);\n  albedoOutput(diffColor);\n  vec3 diffuseShading = occlusion * envIrradiance(vectors.normal);\n  vec3 specularShading = specOcclusion * pbrComputeSpecular(vectors, specColor, roughness);\n  sssCoefficientsOutput(getSSSCoefficients(inputs.sparse_coord));\n \n  vec4 baseSSSColor = getSSSColor(inputs.sparse_coord);\n  if (usesSSSScatteringColorChannel()) {\n  // Must be dimmed by metallic factor as for diffuse color\n  baseSSSColor.rgb = generateDiffuseColor(baseSSSColor.rgb, metallic);\n  }\n  sssColorOutput(baseSSSColor);\n \n  // Coat layer, specular only\n  vec3 wsCoatNormal = coating_surface_behavior == 0?\n  tangentSpaceToWorldSpace(vec3(0, 0, 1.0), inputs) :\n  computeWSNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, inputs.normal);\n  LocalVectors coatVectors = computeLocalFrame(inputs, wsCoatNormal, 0.0);\n  float coatRoughness = getCoatRoughness(inputs.sparse_coord);\n  vec3 coat = specOcclusion * pbrComputeSpecular(coatVectors, vec3(1.0), coatRoughness);\n \n  float coatOpacity = getCoatOpacity(inputs.sparse_coord);\n  float blendFactor = coatOpacity * fresnel(max(1e-8, dot(vectors.eye, vectors.normal)), vec3(iorToSpecularLevel(coating_ior))).x;\n  emissiveColorOutput(emissiveColor * (1.0 - blendFactor));\n  diffuseShadingOutput(diffuseShading * (1.0 - blendFactor));\n  specularShadingOutput(mix(specularShading, coat, blendFactor));\n }\n \n \n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-pbr-coated-md-4b03f7471799b3392d1b.js.map