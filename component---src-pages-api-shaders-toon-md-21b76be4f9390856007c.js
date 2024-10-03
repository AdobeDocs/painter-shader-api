"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4600],{51540:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return d}});var l=a(87462),t=a(63366),r=(a(15007),a(64983)),o=a(91515),s=["components"],m={},u={_frontmatter:m},p=o.Z;function d(e){var n=e.components,a=(0,t.Z)(e,s);return(0,r.mdx)(p,(0,l.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"basic-toon-shader"},"Basic toon shader"),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"Import from libraries."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-sampler.glsl\n")),(0,r.mdx)("p",null,"We define the global light position"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"const vec3 light_pos = vec3(10.0, 10.0, 10.0);\n")),(0,r.mdx)("p",null,"We ",(0,r.mdx)("strong",{parentName:"p"},"bind")," the auto param world eye position to our uniform ",(0,r.mdx)("strong",{parentName:"p"},"camera_pos"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto world_eye_position\n uniform vec3 camera_pos;\n")),(0,r.mdx)("p",null,"We ",(0,r.mdx)("strong",{parentName:"p"},"bind")," the document's channel ",(0,r.mdx)("strong",{parentName:"p"},"base color")," to our uniform ",(0,r.mdx)("strong",{parentName:"p"},"basecolor_tex"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n")),(0,r.mdx)("p",null,"We ",(0,r.mdx)("strong",{parentName:"p"},"bind")," the ",(0,r.mdx)("strong",{parentName:"p"},"mesh curvature")," to our uniform ",(0,r.mdx)("strong",{parentName:"p"},"curvature_tex"),".\nIf no curvature is available, transparent texture is provided."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto texture_curvature\n uniform SamplerSparse curvature_tex;\n")),(0,r.mdx)("p",null,"We define a new custom tweak for this shader, along with its default value.\nThis one is used to tweak the thickness of outline, when shadowed."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //:  "default": 0.4,\n //:   "min": 0.0,\n //:   "max": 1.0,\n //:   "label": "Unlit outline thickness"\n //: }\n uniform float unlit_outline_thickness;\n')),(0,r.mdx)("p",null,"We define a new custom tweak for this shader, along with its default value.\nThis one is used to tweak the thickness of outline, when lit."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //:   "default": 0.1,\n //:   "min": 0.0,\n //:   "max": 1.0,\n //:   "label": "Lit outline thickness"\n //: }\n uniform float lit_outline_thickness;\n')),(0,r.mdx)("p",null,"Whether we prefer using the curvature or not."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //:   "default": false,\n //:   "label": "Use curvature"\n //: }\n uniform bool use_curvature;\n')),(0,r.mdx)("p",null,"Entry point of the shader."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"void shade(V2F inputs)\n {\n")),(0,r.mdx)("p",null,"We compute a few useful values."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"  vec3 V = normalize(camera_pos - inputs.position);\n   vec3 N = normalize(inputs.normal);\n   vec3 L = normalize(light_pos - inputs.position);\n   float NdV = dot(N, V);\n   float NdL = max(0.0, dot(N, L));\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Priority")," is to performs the ",(0,r.mdx)("strong",{parentName:"p"},"outline detection"),".\nAllow the user to choose whether he prefers using the curvature map\nfor outline detection or not."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"  if (use_curvature) {\n     float curv = textureSparse(curvature_tex, inputs.sparse_coord).r;\n     NdV = 1.0 - curv;\n   }\n")),(0,r.mdx)("p",null,"If outline condition is reach, exit with black color."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"  if (NdV < mix(unlit_outline_thickness, lit_outline_thickness, NdL)) {\n     return;\n   }\n")),(0,r.mdx)("p",null,"Here, we perform a 4 steps discretization of color."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"  vec3 color = getBaseColor(basecolor_tex, inputs.sparse_coord);\n   if (NdL > 0.75) {\n     color = color;\n   } else if (NdL > 0.5) {\n     color = color * 0.5;\n   } else if (NdL > 0.1) {\n     color = color * 0.1;\n   }\n   else\n")),(0,r.mdx)("p",null,"Fallback is black."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"    color = vec3(0.0);\n \n   diffuseShadingOutput(color);\n }\n \n \n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-toon-md-21b76be4f9390856007c.js.map