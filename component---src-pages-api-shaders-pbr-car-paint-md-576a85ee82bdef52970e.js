"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6983],{14633:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return c}});var o=a(87462),l=a(63366),r=(a(15007),a(64983)),t=a(91515),s=["components"],m={},i={_frontmatter:m},p=t.Z;function c(e){var n=e.components,a=(0,l.Z)(e,s);return(0,r.mdx)(p,(0,o.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-0"},"#")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-1"},"#")),(0,r.mdx)("h1",{id:"substance-3d-painter-car-paint-pbr-shader"},"Substance 3D Painter Car Paint PBR shader"),(0,r.mdx)("hr",null),(0,r.mdx)("p",null,"Import from libraries."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-sampler.glsl\n import lib-pbr.glsl\n \n //: param auto channel_basecolor\n uniform SamplerSparse basecolor_tex;\n //: param auto channel_roughness\n uniform SamplerSparse roughness_tex;\n //: param auto channel_metallic\n uniform SamplerSparse metallic_tex;\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-2"},"#")),(0,r.mdx)("p",null,"-","-","-","-","-","-","-","EXTERNAL ","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","//"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": "flakes", "label": "Flakes Texture", "usage": "texture" }\n uniform sampler2D flakes_tex;\n \n //: param custom { "default": 25, "label": "Flakes Scale", "min": 1.0, "max": 100.0 }\n uniform float flakes_scale;\n \n //: param custom { "default": 0.75, "label": "Flakes Intensity", "min": 0.0, "max": 1.0 }\n uniform float normalPerturbation;\n \n //: param custom { "default": [0.3,0.3,0], "label": "Flake Color", "widget": "color" }\n uniform vec3 flakeLayerColor;\n \n //: param custom { "default": [0.2,0.0,0.2], "label": "Secondary Paint Color", "widget": "color" }\n uniform vec3 paintColorMid;\n \n //: param custom { "default": [0.3,0.2,0.0], "label": "Tertiary Paint Color", "widget": "color" }\n uniform vec3 paintColor2;\n \n \n void shade(V2F inputs)\n {\n   vec3 baseColor = getBaseColor(basecolor_tex, inputs.sparse_coord);\n   float metallic = getMetallic(metallic_tex, inputs.sparse_coord);\n   vec3 diffColor = generateDiffuseColor(baseColor, metallic);\n   // Get detail (ambient occlusion) and global (shadow) occlusion factors\n   float occlusion = getAO(inputs.sparse_coord) * getShadowFactor();\n \n   LocalVectors vectors = computeLocalFrame(inputs);\n \n   //Flakes\n   vec3 vFlakesNormal = texture(flakes_tex, inputs.tex_coord * flakes_scale).rgb;\n   vec3 vNp1 = normalize(vectors.normal + 0.2 * vFlakesNormal);\n   vec3 vNp2 = normalize(vectors.normal + normalPerturbation * vFlakesNormal);\n \n   vec3 vNp1World = computeWSNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, vNp1);\n   float fFresnel1 = max(0.0, dot(vNp1World, vectors.eye));\n \n   vec3 vNp2World = computeWSNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, vNp2);\n   float fFresnel2 = max(0.0, dot(vNp2World, vectors.eye));\n \n   float fFresnel1Sq = fFresnel1 * fFresnel1;\n   vec3 paintColor =\n     fFresnel1 * baseColor +\n     fFresnel1Sq * paintColorMid +\n     fFresnel1Sq * fFresnel1Sq * paintColor2 +\n     pow(fFresnel2, 16.0) * flakeLayerColor;\n   diffColor = mix(diffColor, paintColor, metallic);\n \n   diffuseShadingOutput(occlusion * pbrComputeDiffuse(vectors.normal, diffColor));\n }\n \n \n')))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-pbr-car-paint-md-576a85ee82bdef52970e.js.map