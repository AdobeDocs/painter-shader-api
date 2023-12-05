"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[878],{26258:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return u}});var o=a(87462),t=a(63366),s=(a(15007),a(64983)),r=a(91515),l=["components"],p={},i={_frontmatter:p},c=r.Z;function u(e){var n=e.components,a=(0,t.Z)(e,l);return(0,s.mdx)(c,(0,o.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,s.mdx)("h1",{id:"substance-3d-painter-metalrough-anisotropy-pbr-shader"},"Substance 3D Painter Metal/Rough Anisotropy PBR shader"),(0,s.mdx)("p",null,"Import from libraries."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-pbr.glsl\n import lib-pbr-aniso.glsl\n import lib-bent-normal.glsl\n import lib-emissive.glsl\n import lib-sss.glsl\n import lib-alpha.glsl\n import lib-utils.glsl\n")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,s.mdx)("p",null,"Declare the iray mdl material to use with this shader."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: metadata {\n //: "mdl":"mdl::alg::materials::skin_metallic_roughness::skin_metallic_roughness"\n //: }\n')),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,s.mdx)("p",null,"Show back faces as there may be holes in front faces."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: state cull_face off\n")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,s.mdx)("p",null,"Channels needed for metal/rough workflow are bound here."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n //: param auto channel_roughness\n uniform SamplerSparse roughness_tex;\n //: param auto channel_metallic\n uniform SamplerSparse metallic_tex;\n //: param auto channel_anisotropylevel\n uniform SamplerSparse anisotropylevel_tex;\n //: param auto channel_anisotropyangle\n uniform SamplerSparse anisotropyangle_tex;\n")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,s.mdx)("p",null,"Shader entry point."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"void shade(V2F inputs)\n {\n \n  // Fetch material parameters, and conversion to the specular/roughness model\n  float roughness = getRoughness(roughness_tex, inputs.sparse_coord);\n  float anisotropyLevel = getAnisotropyLevel(anisotropylevel_tex, inputs.sparse_coord);\n  vec2 roughnessAniso = generateAnisotropicRoughness(roughness, anisotropyLevel);\n  float anisotropyAngle = getAnisotropyAngle(anisotropyangle_tex, inputs.sparse_coord);\n \n  vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);\n  float metallic = getMetallic(metallic_tex, inputs.sparse_coord);\n \n  // Get detail (ambient occlusion) and global (shadow) occlusion factors\n  // separately in order to blend the bent normals properly\n  float shadowFactor = getShadowFactor();\n  float occlusion = getAO(inputs.sparse_coord, true, use_bent_normal);\n  float specOcclusion = specularOcclusionCorrection(\n  use_bent_normal ? shadowFactor : occlusion * shadowFactor,\n  metallic,\n  roughness);\n \n  vec3 normal = computeWSNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, inputs.normal);\n  LocalVectors vectors = computeLocalFrame(inputs, normal, anisotropyAngle);\n  computeBentNormal(vectors,inputs);\n \n  // Feed parameters for a physically based BRDF integration\n  alphaOutput(getOpacity(opacity_tex, inputs.sparse_coord));\n  emissiveColorOutput(pbrComputeEmissive(emissive_tex, inputs.sparse_coord));\n  sssCoefficientsOutput(getSSSCoefficients(inputs.sparse_coord));\n  sssColorOutput(getSSSColor(inputs.sparse_coord));\n \n  // Discard current fragment on the basis of the opacity channel\n  // and a user defined threshold\n  alphaKill(inputs.sparse_coord);\n \n  vec3 diffColor = generateDiffuseColor(baseColor, metallic);\n  albedoOutput(diffColor);\n  diffuseShadingOutput(occlusion * shadowFactor * envIrradiance(getDiffuseBentNormal(vectors)));\n  vec3 specColor = generateSpecularColor(baseColor, metallic);\n  specularShadingOutput(specOcclusion * pbrComputeSpecularAnisotropic(vectors, specColor, roughnessAniso, occlusion, getBentNormalSpecularAmount()));\n }\n \n \n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-pbr-metal-rough-anisotropy-angle-md-dfaf532a50f737e28417.js.map