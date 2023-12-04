"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1595],{10102:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return m}});var o=a(87462),l=a(63366),t=(a(15007),a(64983)),r=a(91515),s=["components"],i={},u={_frontmatter:i},c=r.Z;function m(e){var n=e.components,a=(0,l.Z)(e,s);return(0,t.mdx)(c,(0,o.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,"pbr-velvet.glsl"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,t.mdx)("h1",{id:"substance-3d-painter-pbr-velvet-shader"},"Substance 3D Painter PBR Velvet shader"),(0,t.mdx)("p",null,"Import from libraries."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-sampler.glsl\n import lib-pbr.glsl\n import lib-normal.glsl\n import lib-utils.glsl\n \n //: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n //: param auto channel_roughness\n uniform SamplerSparse roughness_tex;\n //: param auto channel_metallic\n uniform SamplerSparse metallic_tex;\n //: param auto channel_specularlevel\n uniform SamplerSparse specularlevel_tex;\n")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,t.mdx)("p",null,"-------EXTERNAL ---------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": "fibers", "label": "Fibers Texture", "usage": "texture" }\n uniform sampler2D fiber_tex;\n //: param custom { "default": 50.0, "label": "Fiber Scale", "min": 1.0, "max": 100.0 }\n uniform float fiber_scale;\n //: param custom { "default": 0.5, "label": "Sheen", "min": 0.0, "max": 2.0 }\n uniform float sheen;\n //: param custom { "default": "sheen_noise", "label": "Sheen Variation", "usage": "texture" }\n uniform sampler2D sheen_noise;\n //: param custom { "default": 3.0, "label": "Variation Scale", "min": 1.0, "max": 10.0 }\n uniform float sheen_noise_scale;\n //: param custom { "default": 8.0, "label": "Edginess", "min": 1.0, "max": 16.0 }\n uniform float edginess;\n //: param custom { "default": 0.75, "label": "Fabric Tint", "min": 0.0, "max": 1.0 }\n uniform float tint_amount;\n \n \n // SHADER\n void shade(V2F inputs)\n {\n  float roughness = getRoughness(roughness_tex, inputs.sparse_coord);\n  vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);\n  float metallic = getMetallic(metallic_tex, inputs.sparse_coord);\n  float specularLevel = getSpecularLevel(specularlevel_tex, inputs.sparse_coord);\n  vec3 diffColor = generateDiffuseColor(baseColor, metallic);\n  vec3 specColor = generateSpecularColor(specularLevel, baseColor, metallic);\n  // Get detail (ambient occlusion) and global (shadow) occlusion factors\n  float occlusion = getAO(inputs.sparse_coord) * getShadowFactor();\n  float specOcclusion = specularOcclusionCorrection(occlusion, metallic, roughness);\n \n  LocalVectors vectors = computeLocalFrame(inputs);\n \n  // Material\n  vec3 diffuse = occlusion * pbrComputeDiffuse(vectors.normal, diffColor);\n  vec3 specular = specOcclusion * pbrComputeSpecular(vectors, specColor, roughness);\n \n  // Velvet reflection, simply summed over previous computation\n  float cosine = clamp(dot(normalize(vectors.normal), normalize(vectors.eye)), 0.0, 1.0);\n  float sine = sqrt(1.0 - cosine * cosine);\n  float rand = texture(fiber_tex, inputs.tex_coord * fiber_scale).r;\n  float noise = texture(sheen_noise, inputs.tex_coord * sheen_noise_scale).r;\n  float intensity = rand * (sheen * noise + 0.002) * pow(sine, edginess);\n  vec3 tint = mix(vec3(1.0), diffColor, tint_amount);\n  diffuse += intensity * mix(occlusion, 1.0, 1.0 / edginess) * envIrradiance(vectors.normal) * tint;\n \n  diffuseShadingOutput(diffuse);\n  specularShadingOutput(specular);\n }\n \n \n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-pbr-velvet-md-cfb6bbd2be02fc33b657.js.map