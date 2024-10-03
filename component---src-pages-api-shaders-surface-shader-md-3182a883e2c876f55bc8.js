"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2995],{97386:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return c}});var a=n(87462),o=n(63366),i=(n(15007),n(64983)),l=n(91515),r=["components"],d={},u={_frontmatter:d},s=l.Z;function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.mdx)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"surface-shaderglsl"},"surface","-","shader.glsl"),(0,i.mdx)("hr",null),(0,i.mdx)("p",null,"To create a shader resource that can be used in Substance 3D Painter, just create a glsl file containing a single\nfunction called ",(0,i.mdx)("em",{parentName:"p"},"shade")," with the following profile:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"void shade(V2F inputs);\n")),(0,i.mdx)("h2",{id:"v2f-input-type-definition"},"V2F input type definition:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"struct V2F {\n   vec3 normal;               // interpolated normal\n   vec3 tangent;              // interpolated tangent\n   vec3 bitangent;            // interpolated bitangent\n   vec3 position;             // interpolated position\n   vec4 color[1];             // interpolated vertex colors (color0)\n   vec2 tex_coord;            // interpolated texture coordinates (uv0)\n   SparseCoord sparse_coord;  // interpolated sparse texture coordinates used by textureSparse() sampling function\n   vec2 multi_tex_coord[8];   // interpolated texture coordinates (uv0-uv7)\n };\n")),(0,i.mdx)("p",null,"Note: To obtain a SparseCoord for uv1","-","uv7, you have to explicitly call ",(0,i.mdx)("inlineCode",{parentName:"p"},"getSparseCoord(vec2)")," defined in ",(0,i.mdx)("a",{parentName:"p",href:"/painter-shader-api/src/pages/api/libraries/lib-sparse/"},"lib","-","sparse.glsl")),(0,i.mdx)("h2",{id:"surface-shader-outputs"},"Surface shader outputs:"),(0,i.mdx)("p",null,"The following functions can be called from within the ",(0,i.mdx)("em",{parentName:"p"},"shade")," function to describe fragment properties:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"// fragment opacity. default value: 1.0\n void alphaOutput(float);\n // Second RGBA output (dual blending), only used with *add_multiply* blending mode. default value: vec4(1.0)\n void color1Output(vec4);\n // diffuse lighting contribution. default value: vec3(0.0)\n void diffuseShadingOutput(vec3);\n // specular lighting contribution. default value: vec3(0.0)\n void specularShadingOutput(vec3);\n // color emitted by the fragment. default value: vec3(0.0)\n void emissiveColorOutput(vec3);\n // fragment color. default value: vec3(1.0)\n void albedoOutput(vec3);\n // subsurface scattering properties, see lib-sss.glsl for details. default value: vec4(0.0)\n void sssCoefficientsOutput(vec4);\n")),(0,i.mdx)("p",null,"As an example, the most basic rendering equation for computing the fragment color is: ",(0,i.mdx)("inlineCode",{parentName:"p"},"emissiveColor + albedo * diffuseShading + specularShading")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-surface-shader-md-3182a883e2c876f55bc8.js.map