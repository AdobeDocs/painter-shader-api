"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2289],{6318:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return s}});var o=n(87462),t=n(63366),r=(n(15007),n(64983)),l=n(91515),m=["components"],p={},c={_frontmatter:p},i=l.Z;function s(e){var a=e.components,n=(0,t.Z)(e,m);return(0,r.mdx)(i,(0,o.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,r.mdx)("h1",{id:"lib-coatglsl"},"lib-coat.glsl"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"iorToSpecularLevel"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"getCoatNormal")),(0,r.mdx)("p",null,"Import from library"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-defines.glsl\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,r.mdx)("p",null,"All engine parameters useful for coat."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "group": "Coat",\n //: "label": "Enable",\n //: "default": false,\n //: "asm": "coat",\n //: "description": "<html><head/><body><p>Simulates a layer on top of the material. Used to create clear coats, lacquers, and varnishes.</p></body></html>"\n //: }\n uniform_specialization bool coatEnabled;\n //: param auto channel_coatopacity\n uniform SamplerSparse coatOpacity_tex;\n //: param auto channel_coatcolor\n uniform SamplerSparse coatColor_tex;\n //: param auto channel_coatroughness\n uniform SamplerSparse coatRoughness_tex;\n //: param custom {\n //: "group": "Coat",\n //: "label": "Index of refraction",\n //: "min": 0.0,\n //: "max": 40.0,\n //: "default": 1.6,\n //: "visible": "input.coatEnabled",\n //: "asm": "coat_ior",\n //: "description": "<html><head/><body><p>The amount light bends as it passes through the coat.</p></body></html>"\n //: }\n uniform float coatIoR;\n //: param auto channel_coatspecularlevel\n uniform SamplerSparse coatSpecularLevel_tex;\n //: param auto channel_coatnormal\n uniform SamplerSparse coatNormal_tex;\n')),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,r.mdx)("p",null,"Import from library"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-normal.glsl\n import lib-sampler.glsl\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,r.mdx)("p",null,"Compute an f0 at the interface between to materials from their indices of refraction."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"float iorToSpecularLevel(float iorFrom, float iorTo)\n {\n  float sqrtR0 = (iorTo-iorFrom) / (iorTo+iorFrom);\n  return sqrtR0*sqrtR0;\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,r.mdx)("p",null,"Return the coat normal in world space."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 getWSCoatNormal(SparseCoord coord, vec3 tangent, vec3 bitangent, vec3 normal)\n {\n  vec3 tsNormal = (coatNormal_tex.is_set ?\n  normalUnpack(textureSparse(coatNormal_tex, coord), base_normal_y_coeff) :\n  vec3(0.0, 0.0, 1.0));\n  return normalize(\n  tsNormal.x * tangent +\n  tsNormal.y * bitangent +\n  tsNormal.z * normal\n  );\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,r.mdx)("p",null,"Compute the approximate colored coat absorption for a given view direction."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 coatPassageColorMultiplier(vec3 coatColor, float coatOpacity, float ndv)\n {\n  if (min(coatColor.r, min(coatColor.g, coatColor.b)) < 1.0)\n  {\n  float power = 0.1575 / mix(0.24, 1.0, ndv * ndv) + 0.25;\n  return pow(mix(vec3(1.0), coatColor, coatOpacity), vec3(power));\n  }\n  else\n  {\n  return vec3(1.);\n  }\n }\n \n \n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-coat-md-380d026cdc8580b86670.js.map