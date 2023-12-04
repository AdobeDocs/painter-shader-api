"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2184],{75974:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return r},default:function(){return i}});var l=a(87462),t=a(63366),o=(a(15007),a(64983)),m=a(91515),s=["components"],r={},p={_frontmatter:r},d=m.Z;function i(e){var n=e.components,a=(0,t.Z)(e,s);return(0,o.mdx)(d,(0,l.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,o.mdx)("h1",{id:"basic-pixelating-shader"},"Basic pixelating shader"),(0,o.mdx)("p",null,"Import from libraries."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},"")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,o.mdx)("p",null,"We define the global light position"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},"const vec3 light_pos = vec3(10.0, 10.0, 10.0);\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,o.mdx)("p",null,"We ",(0,o.mdx)("strong",{parentName:"p"},"bind")," the auto param world eye position to our uniform ",(0,o.mdx)("strong",{parentName:"p"},"camera_pos"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto world_eye_position\n uniform vec3 camera_pos;\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,o.mdx)("p",null,"We ",(0,o.mdx)("strong",{parentName:"p"},"bind")," the document's channel ",(0,o.mdx)("strong",{parentName:"p"},"base color")," to our uniform ",(0,o.mdx)("strong",{parentName:"p"},"basecolor_tex"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,o.mdx)("p",null,"We define a new custom tweak for this shader, along with its default value.\nThis one is used to tweak the thickness of outline, when shadowed."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "default": 0.4,\n //: "min": 0.0,\n //: "max": 1.0,\n //: "label": "Unlit outline thickness"\n //: }\n uniform float unlit_outline_thickness;\n')),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,o.mdx)("p",null,"We define a new custom tweak for this shader, along with its default value.\nThis one is used to tweak the thickness of outline, when lit."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "default": 0.1,\n //: "min": 0.0,\n //: "max": 1.0,\n //: "label": "Lit outline thickness"\n //: }\n uniform float lit_outline_thickness;\n')),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,o.mdx)("p",null,"Entry point of the shader."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"},"void shade(V2F inputs)\n {\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,o.mdx)("p",null,"We compute a few useful values."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"}," vec3 V = normalize(camera_pos - inputs.position);\n  vec3 N = normalize(inputs.normal);\n  vec3 L = normalize(light_pos - inputs.position);\n  float NdV = dot(N, V);\n  float NdL = max(0.0, dot(N, L));\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-9"}," ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Priority")," is to performs the ",(0,o.mdx)("strong",{parentName:"p"},"outline detection"),".\nIf outline condition is reach, exit with black color."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"}," if (NdV < mix(unlit_outline_thickness, lit_outline_thickness, NdL)) {\n  return;\n  }\n \n  vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-10"}," ")),(0,o.mdx)("p",null,"Introduce some jitter to mask size, based on base color luminance"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"}," float maskRadiusJitter = pow(dot(baseColor, vec3(0.3333)), 0.1);\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-11"}," ")),(0,o.mdx)("p",null,"Compute a mask value, based on screen space position of fragment.\nThis will create a grid like pattern."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"}," float mask = pow(1.0 - length(fract(gl_FragCoord.xy / 7.0) - vec2(0.5)), maskRadiusJitter * 5.0) * 5.0;\n")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"#section-12"}," ")),(0,o.mdx)("p",null,"Here, we sample the base color and apply a simple diffuse attenuation"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-glsl"}," vec3 color = baseColor * NdL;\n \n  diffuseShadingOutput(mask * color);\n }\n \n \n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-pixelated-md-6c1476961e8a63ad2831.js.map