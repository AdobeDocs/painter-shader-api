"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8674],{1843:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return u},default:function(){return i}});var a=t(87462),o=t(63366),l=(t(15007),t(64983)),m=t(91515),r=["components"],u={},s={_frontmatter:u},p=m.Z;function i(e){var n=e.components,t=(0,o.Z)(e,r);return(0,l.mdx)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-0"},"#")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-1"},"#")),(0,l.mdx)("h1",{id:"lib-bent-normalglsl"},"lib","-","bent","-","normal.glsl"),(0,l.mdx)("hr",null),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"computeWSBentNormal"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"computeBentNormals"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"getDiffuseBentNormal"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"getBentNormalSpecularAmount")),(0,l.mdx)("p",null,"Import from library"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'import lib-normal.glsl\n \n //: param auto texture_bent_normals\n uniform SamplerSparse bent_normal_texture;\n \n //: param custom {\n //:   "default": false,\n //:   "label": "Enable",\n //:   "group": "Geometry/Bent Normal",\n //:   "description": "<html><head/><body><p>Uses the baked mesh map <b>Bent normals</b> for more accurate lighting. This is especially noticeable with metallic surfaces.</p></body></html>"\n //: }\n uniform_specialization bool use_bent_normal;\n \n //: param custom {\n //:   "default": 1.0,\n //:   "min": 0.0,\n //:   "max": 1.0,\n //:   "visible": "input.use_bent_normal",\n //:   "label": "Diffuse amount",\n //:   "group": "Geometry/Bent Normal",\n //:   "description": "<html><head/><body><p>How much the mesh map <b>Bent normals</b> affects the diffuse reflection. E.g: A value of 0 would disregard the bent normals completely and use only the regular <b>Normals</b> mesh map.</p></body></html>"\n //: }\n uniform float bent_normal_diffuse_amount;\n \n //: param custom {\n //:   "default": 1.0,\n //:   "min": 0.0,\n //:   "max": 1.0,\n //:   "visible": "input.use_bent_normal",\n //:   "label": "Specular amount",\n //:   "group": "Geometry/Bent Normal",\n //:   "description": "<html><head/><body><p>How much the mesh map <b>Bent normals</b> affects the specular reflection. E.g: A value of 0 would disregard the bent normals completely and use only the regular <b>Normals</b> mesh map.</p></body></html>"\n //: }\n uniform float bent_normal_specular_amount;\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-2"},"#")),(0,l.mdx)("p",null,"Helper to compute the bent normal from tangent space normal given by\ngetTSNormal helpers, and local frame of the mesh."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 computeWSBentNormal(SparseCoord coord, vec3 tangent, vec3 bitangent, vec3 normal)\n {\n   vec3 bent_normal_vec = getTSNormal(coord, bent_normal_texture);\n   return normalize(\n     bent_normal_vec.x * tangent +\n     bent_normal_vec.y * bitangent +\n     bent_normal_vec.z * normal\n   );\n }\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-3"},"#")),(0,l.mdx)("p",null,"Compute bent normals\nFill world space bent normal in vectors"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"void computeBentNormal(inout LocalVectors vectors, V2F inputs) {\n   if (use_bent_normal) {\n     vectors.bent = computeWSBentNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, inputs.normal);\n   }\n }\n \n vec3 getDiffuseBentNormal(LocalVectors vectors) {\n   return use_bent_normal ?\n     normalize(mix(vectors.normal, vectors.bent, bent_normal_diffuse_amount)) :\n     vectors.normal;\n }\n \n float getBentNormalSpecularAmount() {\n   return use_bent_normal ? bent_normal_specular_amount : 0.0;\n }\n \n \n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-bent-normal-md-d0cd2c7f00622b90bdd8.js.map