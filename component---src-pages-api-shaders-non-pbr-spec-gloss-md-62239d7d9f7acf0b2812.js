"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[380],{31940:function(n,e,s){s.r(e),s.d(e,{_frontmatter:function(){return i},default:function(){return u}});var t=s(87462),o=s(63366),a=(s(15007),s(64983)),r=s(91515),l=["components"],i={},m={_frontmatter:i},p=r.Z;function u(n){var e=n.components,s=(0,o.Z)(n,l);return(0,a.mdx)(p,(0,t.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,a.mdx)("h1",{id:"substance-3d-painter-specularglossiness-non-pbr-shader"},"Substance 3D Painter Specular/Glossiness Non-PBR shader"),(0,a.mdx)("p",null,"Import from libraries."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-glsl"},'import lib-alpha.glsl\n import lib-emissive.glsl\n import lib-env.glsl\n import lib-sampler.glsl\n import lib-vectors.glsl\n \n //: param auto channel_diffuse\n uniform SamplerSparse diffuse_tex;\n //: param auto channel_specular\n uniform SamplerSparse specular_tex;\n //: param auto channel_glossiness\n uniform SamplerSparse glossiness_tex;\n \n //: param auto main_light\n uniform vec4 light_main;\n \n //: param custom {\n //: "default": 5.0,\n //: "label": "Fresnel Power",\n //: "min": 1.0,\n //: "max": 10.0\n //: }\n uniform float fresnel_power;\n \n //: param custom {\n //: "default": 1.0,\n //: "label": "Fresnel Strength",\n //: "min": 0.0,\n //: "max": 1.0\n //: }\n uniform float fresnel_str;\n \n //: param custom {\n //: "default": 0.25,\n //: "label": "Ambient Light",\n //: "min": 0.0,\n //: "max": 1.0\n //: }\n uniform float ambient_str;\n \n //: param custom {\n //: "default": 1.0,\n //: "label": "Light Intensity",\n //: "min": 0.0,\n //: "max": 10.0\n //: }\n uniform float light_str;\n \n \n void shade(V2F inputs)\n {\n  vec3 diffColor = getDiffuse(diffuse_tex, inputs.sparse_coord);\n  vec3 specColor = getSpecularColor(specular_tex, inputs.sparse_coord);\n  float glossiness = getGlossiness(glossiness_tex, inputs.sparse_coord);\n  float occlusion = getAO(inputs.sparse_coord) * getShadowFactor();\n \n  // Compute local vectors and cos of some useful angles\n  inputs.normal = normalize(inputs.normal);\n  LocalVectors vectors = computeLocalFrame(inputs);\n \n  // Emissive contribution\n  emissiveColorOutput(pbrComputeEmissive(emissive_tex, inputs.sparse_coord));\n \n  // Discard current fragment on the basis of the opacity channel\n  // and a user defined threshold\n  alphaKill(inputs.sparse_coord);\n \n  float ndl = max(0.0, dot(vectors.normal, light_main.xyz));\n  float ndv = clamp(dot(vectors.normal, vectors.eye), 0.0, 1.0);\n  float ndh = max(0.0, dot(vectors.normal, normalize(light_main.xyz + vectors.eye)));\n \n  // Ambient and diffuse contribution\n  vec3 Kd = (envIrradiance(inputs.normal) * ambient_str + ndl) * diffColor * occlusion;\n \n  // Specular contribution (normalized Blinn-Phong)\n  float exponent = exp2(9.0 * glossiness);\n  vec3 Ks = fresnel_str * mix(vec3(pow(1.0 - ndv, fresnel_power)), vec3(1.0), specColor); // Fresnel\n  Ks *= ndl * pow(ndh, exponent); // Reflection\n  Ks *= (0.125 * exponent + 1.0); // Normalization\n  Ks *= mix(occlusion, 1.0, glossiness * glossiness); // Occlusion\n \n  // Multiply by light irradiance (estimation of texel irradiance)\n  diffuseShadingOutput(light_str * environment_exposure * Kd);\n  specularShadingOutput(light_str * environment_exposure * Ks);\n }\n \n \n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-non-pbr-spec-gloss-md-62239d7d9f7acf0b2812.js.map