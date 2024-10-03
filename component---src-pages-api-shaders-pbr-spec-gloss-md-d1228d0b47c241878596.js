"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8494],{97985:function(e,s,n){n.r(s),n.d(s,{_frontmatter:function(){return i},default:function(){return u}});var o=n(87462),r=n(63366),a=(n(15007),n(64983)),t=n(91515),l=["components"],i={},p={_frontmatter:i},c=t.Z;function u(e){var s=e.components,n=(0,r.Z)(e,l);return(0,a.mdx)(c,(0,o.Z)({},p,n,{components:s,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"substance-3d-painter-specularglossiness-pbr-shader"},"Substance 3D Painter Specular/Glossiness PBR shader"),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"Import from libraries."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-glsl"},'import lib-pbr.glsl\n import lib-bent-normal.glsl\n import lib-emissive.glsl\n import lib-pom.glsl\n import lib-sss.glsl\n import lib-utils.glsl\n \n // Link Specular/Glossiness skin MDL for Iray\n //: metadata {\n //:   "mdl" : "mdl::alg::materials::skin_specular_glossiness::skin_specular_glossiness"\n //: }\n')),(0,a.mdx)("p",null,"Channels needed for spec/gloss workflow are bound here."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_diffuse\n uniform SamplerSparse diffuse_tex;\n //: param auto channel_specular\n uniform SamplerSparse specularcolor_tex;\n //: param auto channel_glossiness\n uniform SamplerSparse glossiness_tex;\n \n \n void shade(V2F inputs)\n {\n   // Apply parallax occlusion mapping if possible\n   vec3 viewTS = worldSpaceToTangentSpace(getEyeVec(inputs.position), inputs);\n   applyParallaxOffset(inputs, viewTS);\n \n   float glossiness = getGlossiness(glossiness_tex, inputs.sparse_coord);\n   vec3 specColor = getSpecularColor(specularcolor_tex, inputs.sparse_coord);\n   vec3 diffColor = getDiffuse(diffuse_tex, inputs.sparse_coord) * (vec3(1.0) - specColor);\n \n   // Get detail (ambient occlusion) and global (shadow) occlusion factors\n   // separately in order to blend the bent normals properly\n   float shadowFactor = getShadowFactor();\n   float occlusion = getAO(inputs.sparse_coord, true, use_bent_normal);\n   float specOcclusion = use_bent_normal ? shadowFactor : occlusion * shadowFactor;\n \n   LocalVectors vectors = computeLocalFrame(inputs);\n   computeBentNormal(vectors,inputs);\n \n   // Feed parameters for a physically based BRDF integration\n   emissiveColorOutput(pbrComputeEmissive(emissive_tex, inputs.sparse_coord));\n   albedoOutput(diffColor);\n   diffuseShadingOutput(occlusion * shadowFactor * envIrradiance(getDiffuseBentNormal(vectors)));\n   specularShadingOutput(specOcclusion * pbrComputeSpecular(vectors, specColor, 1.0 - glossiness, occlusion, getBentNormalSpecularAmount()));\n   sssCoefficientsOutput(getSSSCoefficients(inputs.sparse_coord));\n \n   vec4 baseSSSColor = getSSSColor(inputs.sparse_coord);\n   if (usesSSSScatteringColorChannel()) {\n     // Must be dimmed by specColor as for diffuse color\n     baseSSSColor.rgb *= vec3(1.0) - specColor;\n   }\n   sssColorOutput(baseSSSColor);\n }\n \n \n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-pbr-spec-gloss-md-d1228d0b47c241878596.js.map