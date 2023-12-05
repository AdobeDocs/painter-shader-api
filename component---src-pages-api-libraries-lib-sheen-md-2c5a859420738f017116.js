"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3013],{57138:function(n,e,o){o.r(e),o.d(e,{_frontmatter:function(){return m},default:function(){return p}});var a=o(87462),t=o(63366),l=(o(15007),o(64983)),r=o(91515),s=["components"],m={},d={_frontmatter:m},i=r.Z;function p(n){var e=n.components,o=(0,t.Z)(n,s);return(0,l.mdx)(i,(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,l.mdx)("h1",{id:"lib-sheenglsl"},"lib-sheen.glsl"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"pbrComputeSheen")),(0,l.mdx)("p",null,"Import from library"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-defines.glsl\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,l.mdx)("p",null,"All engine parameters useful for sheen."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "group": "Base Surface",\n //: "label": "Enable sheen",\n //: "default": false,\n //: "asm": "sheen",\n //: "description": "<html><head/><body><p>Simulates the effect of microscopic fibers or fuzz on the surface.<br/><b>Please note</b>: The following channel needs to be present for this parameter to have an effect: <b>Sheen opacity</b>. Optionally, the following channels provide additional control: <b>Sheen color</b> and <b>Sheen roughness</b>.</p></body></html>"\n //: }\n uniform_specialization bool sheenEnabled;\n //: param auto channel_sheenopacity\n uniform SamplerSparse sheenOpacity_tex;\n //: param auto channel_sheencolor\n uniform SamplerSparse sheenColor_tex;\n //: param auto channel_sheenroughness\n uniform SamplerSparse sheenRoughness_tex;\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,l.mdx)("p",null,"Import from library"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-pbr.glsl\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,l.mdx)("p",null,"Compute the sheen BRDF contribution for importance sampling."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 sheen_contrib(float ndh, float ndl, float ndv, vec3 Ks, float roughness)\n {\n  float ndh2 = ndh*ndh;\n  float ndl2 = ndl*ndl;\n  float ndv2 = ndv*ndv;\n  float r2 = roughness*roughness;\n \n  // TODO: move the D component out, to the importance sampling.\n  float t = 1.0 - ndh2 + ndh2/r2;\n  float Pi_D = 1.0 / (roughness * t * t);\n \n  float Li = sqrt(1.0 - ndl2 + r2*ndl2) / ndl;\n  float Lo = sqrt(1.0 - ndv2 + r2*ndv2) / ndv;\n  float G = (1.0 - exp(-(Li + Lo))) / (Li + Lo);\n \n  // This is the contribution when using importance sampling with uniform\n  // sample distribution. This means sheen_contrib = sheen_brdf / (1/(2*Pi))\n  // ndl is omitted since it cancels out with the ndl outside the BRDF.\n  return Ks * ((2.0 * Pi_D * G / ndv) * 0.5);\n }\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,l.mdx)("p",null,"Compute the microfacets sheen specular reflection to the viewer's eye."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 pbrComputeSheen(LocalVectors vectors, vec3 specColor, float roughness)\n {\n  vec3 radiance = vec3(0.0);\n  float ndv = dot(vectors.eye, vectors.normal);\n  roughness = max(1e-3, roughness);\n  vec3 envT = worldToEnvSpace(vectors.tangent);\n  vec3 envB = worldToEnvSpace(vectors.bitangent);\n  vec3 envN = worldToEnvSpace(vectors.normal);\n  vec3 envE = worldToEnvSpace(vectors.eye);\n  vec3 envVertexNormal = worldToEnvSpace(vectors.vertexNormal);\n \n  for(int i=0; i<nbSamples; ++i)\n  {\n  vec2 Xi = fibonacci2D(i, nbSamples);\n  vec3 Ln = uniformSample(Xi, envT, envB, envN);\n  vec3 Hn = normalize(Ln + envE);\n  float fade = horizonFading(dot(envVertexNormal, Ln), horizonFade);\n \n  float ndl = dot(envN, Ln);\n  if (ndl > 0.0 && ndv > 0.0) {\n  ndl = max( 1e-8, ndl );\n  float vdh = max(1e-8, dot(envE, Hn));\n  float ndh = max(1e-8, dot(envN, Hn));\n  float lodS = computeLOD(Ln, 0.5 * M_INV_PI);\n  radiance += fade * envSample(Ln, lodS) * sheen_contrib(ndh, ndl, ndv, specColor, roughness);\n  }\n  }\n  radiance /= float(nbSamples);\n \n  return radiance;\n }\n \n \n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-sheen-md-2c5a859420738f017116.js.map