"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6065],{52084:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return d}});var m=t(87462),a=t(63366),s=(t(15007),t(64983)),l=t(91515),i=["components"],r={},p={_frontmatter:r},o=l.Z;function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.mdx)(o,(0,m.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,s.mdx)("h1",{id:"lib-emissiveglsl"},"lib-emissive.glsl"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,s.mdx)("inlineCode",{parentName:"p"},"pbrComputeEmissive")),(0,s.mdx)("p",null,"Import from library"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-sparse.glsl\n")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,s.mdx)("p",null,"The emissive channel texture."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_emissive\n uniform SamplerSparse emissive_tex;\n")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,s.mdx)("p",null,"A value used to tweak the emissive intensity."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "default": 1.0,\n //: "label": "Emissive intensity",\n //: "min": 0.0,\n //: "max": 100.0,\n //: "group": "Base Surface",\n //: "asm": "emission",\n //: "description": "<html><head/><body><p>The intensity of light emitted by the surface.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Emissive</b></p></body></html>"\n //: }\n uniform float emissive_intensity;\n')),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,s.mdx)("p",null,"Compute the emissive radiance to the viewer's eye"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 pbrComputeEmissive(SamplerSparse emissive, SparseCoord coord)\n {\n  return emissive_intensity * textureSparse(emissive, coord).rgb;\n }\n \n \n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-emissive-md-9db49bb15836e80dd6db.js.map