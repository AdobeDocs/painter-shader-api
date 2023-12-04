"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8338],{47356:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return u}});var l=n(87462),t=n(63366),r=(n(15007),n(64983)),m=n(91515),i=["components"],s={},o={_frontmatter:s},p=m.Z;function u(e){var a=e.components,n=(0,t.Z)(e,i);return(0,r.mdx)(p,(0,l.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"layering_bind_materials.glsl"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,r.mdx)("h1",{id:"material-layering-bind-materials-as-shader-parameters"},"Material layering: bind materials as shader parameters"),(0,r.mdx)("p",null,"A material is defined by a unique identifier 'id'. Additional parameters:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"'default': the default material resource name to be used."),(0,r.mdx)("li",{parentName:"ul"},"'size': the texture size of the material maps."),(0,r.mdx)("li",{parentName:"ul"},"'group': the UI group of the material selection widget.")),(0,r.mdx)("p",null,"Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: materials [\n //: {\n //: "id": "Material1",\n //: "default": "Concrete 044",\n //: "size": 512,\n //: "group": "Material 1"\n //: }, {\n //: "id": "Material2",\n //: "default": "Leaves elm",\n //: "size": 1024,\n //: "group": "Material 2"\n //: }\n //: ]\n')),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,r.mdx)("p",null,"To bind a channel from a material to a sampler, define an auto param with the id of the material\nfollowed by the channel tag (see the available channels in ",(0,r.mdx)("a",{parentName:"p",href:"/painter-shader-api/parameters/all-engine-params.md"},"all-engine-params.glsl"),"):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto Material1.channel_basecolor\n uniform sampler2D basecolor_tex1;\n //: param auto Material1.channel_metallic\n uniform sampler2D metallic_tex1;\n //: param auto Material1.channel_roughness\n uniform sampler2D roughness_tex1;\n \n //: param auto Material2.channel_basecolor\n uniform sampler2D basecolor_tex2;\n //: param auto Material2.channel_metallic\n uniform sampler2D metallic_tex2;\n //: param auto Material2.channel_roughness\n uniform sampler2D roughness_tex2;\n \n \n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-parameters-layering-bind-materials-md-ad515b440340ad399b19.js.map