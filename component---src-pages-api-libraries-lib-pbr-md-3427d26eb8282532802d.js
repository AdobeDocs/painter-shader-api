"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8481],{72103:function(n,e,o){o.r(e),o.d(e,{_frontmatter:function(){return c},default:function(){return m}});var t=o(87462),a=o(63366),l=(o(15007),o(64983)),r=o(91515),s=["components"],c={},i={_frontmatter:c},p=r.Z;function m(n){var e=n.components,o=(0,a.Z)(n,s);return(0,l.mdx)(p,(0,t.Z)({},i,o,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"lib-pbr.glsl"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,l.mdx)("h1",{id:"lib-pbrglsl"},"lib-pbr.glsl"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"normal_distrib"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"fresnel"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"G1"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"visibility"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"horizonFading"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"pbrComputeDiffuse"),"\n",(0,l.mdx)("inlineCode",{parentName:"p"},"pbrComputeSpecular")),(0,l.mdx)("p",null,"Number of miplevels in the envmap."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto environment_max_lod\n uniform float maxLod;\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,l.mdx)("p",null,"An int representing the number of samples made for specular contribution\ncomputation. The more the higher quality and the performance impact."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "default": 16,\n //: "label": "Specular quality",\n //: "widget": "combobox",\n //: "values": {\n //: "Very low (4 spp)": 4,\n //: "Low (16 spp)": 16,\n //: "Medium (32 spp)": 32,\n //: "High (64 spp)": 64,\n //: "Very high (128 spp)": 128,\n //: "Ultra (256 spp)": 256\n //: },\n //: "group": "Base Surface",\n //: "description": "<html><head/><body><p>The quality of the specular reflection. Choose the number of samples per pixel (SPP).</p></body></html>"\n //: }\n uniform int nbSamples;\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,l.mdx)("p",null,"Value used to control specular reflection leaking through the surface."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom {\n //: "default": 1.3,\n //: "label": "Horizon fading",\n //: "min": 0.0,\n //: "max": 2.0,\n //: "group": "Base Surface",\n //: "description": "<html><head/><body><p>Reduces unexpected specular reflection at angles pointing beneath the surface horizon.</p></body></html>"\n //: }\n uniform float horizonFade;\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,l.mdx)("p",null,"Import from library, other parameters"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-env.glsl\n import lib-emissive.glsl\n import lib-random.glsl\n import lib-vectors.glsl\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,l.mdx)("p",null,"BRDF related functions"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"const float EPSILON_COEF = 1e-4;\n \n float normal_distrib(\n  float ndh,\n  float Roughness)\n {\n  // use GGX / Trowbridge-Reitz, same as Disney and Unreal 4\n  // cf http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf p3\n  float alpha = Roughness * Roughness;\n  float tmp = alpha / max(1e-8,(ndh*ndh*(alpha*alpha-1.0)+1.0));\n  return tmp * tmp * M_INV_PI;\n }\n \n vec3 fresnel(\n  float vdh,\n  vec3 F0)\n {\n  // Schlick with Spherical Gaussian approximation\n  // cf http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf p3\n  float sphg = exp2((-5.55473*vdh - 6.98316) * vdh);\n  return F0 + (vec3(1.0) - F0) * sphg;\n }\n \n vec3 fresnel(\n  float vdh,\n  vec3 F0,\n  vec3 F82)\n {\n  vec3 b = (1.0 - F82) * (F0 * 9.48471792 + 8.16666665);\n  float e = 1.0 - vdh;\n  float e5 = e * e; e5 *= e5 * e;\n  vec3 offset = (1.0 - F0 - b * (vdh * e)) * e5;\n  return clamp(F0 + offset, 0.0, 1.0);\n }\n \n float G1(\n  float ndw, // w is either Ln or Vn\n  float k)\n {\n  // One generic factor of the geometry function divided by ndw\n  // NB : We should have k > 0\n  return 1.0 / ( ndw*(1.0-k) + k );\n }\n \n float visibility(\n  float ndl,\n  float ndv,\n  float Roughness)\n {\n  // Schlick with Smith-like choice of k\n  // cf http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf p3\n  // visibility is a Cook-Torrance geometry function divided by (n.l)*(n.v)\n  float k = max(Roughness * Roughness * 0.5, 1e-5);\n  return G1(ndl,k)*G1(ndv,k);\n }\n \n vec3 cook_torrance_contrib(\n  float vdh,\n  float ndh,\n  float ndl,\n  float ndv,\n  vec3 F0,\n  vec3 F82,\n  float Roughness)\n {\n  // This is the contribution when using importance sampling with the GGX based\n  // sample distribution. This means ct_contrib = ct_brdf / ggx_probability\n  return fresnel(vdh, F0, F82) * (visibility(ndl, ndv, Roughness) * vdh * ndl / ndh );\n }\n \n vec3 cook_torrance_contrib(\n  float vdh,\n  float ndh,\n  float ndl,\n  float ndv,\n  vec3 Ks,\n  float Roughness)\n {\n  return cook_torrance_contrib(vdh, ndh, ndl, ndv, Ks, vec3(1.0), Roughness);\n }\n \n vec3 uniformSample(vec2 Xi, vec3 T, vec3 B, vec3 N)\n {\n  float cosT = Xi.y;\n  float sinT = sqrt(1.0-cosT*cosT);\n  float phi = 2.0*M_PI*Xi.x;\n  return\n  T * (sinT*cos(phi)) +\n  B * (sinT*sin(phi)) +\n  N * cosT;\n }\n \n vec3 importanceSampleGGX(vec2 Xi, vec3 T, vec3 B, vec3 N, float roughness)\n {\n  float a = roughness*roughness;\n  float cosT = sqrt((1.0-Xi.y)/(1.0+(a*a-1.0)*Xi.y));\n  float sinT = sqrt(1.0-cosT*cosT);\n  float phi = 2.0*M_PI*Xi.x;\n  return\n  T * (sinT*cos(phi)) +\n  B * (sinT*sin(phi)) +\n  N * cosT;\n }\n \n float probabilityGGX(float ndh, float vdh, float Roughness)\n {\n  return normal_distrib(ndh, Roughness) * ndh / (4.0*vdh);\n }\n \n float distortion(vec3 Wn)\n {\n  // Computes the inverse of the solid angle of the (differential) pixel in\n  // the cube map pointed at by Wn\n  float sinT = sqrt(1.0-Wn.y*Wn.y);\n  return sinT;\n }\n \n float computeLOD(vec3 Ln, float p)\n {\n  return max(0.0, (maxLod-1.5) - 0.5 * log2(float(nbSamples) * p * distortion(Ln)));\n }\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,l.mdx)("p",null,"Horizon fading trick from ",(0,l.mdx)("a",{parentName:"p",href:"https://marmosetco.tumblr.com/post/81245981087"},"https://marmosetco.tumblr.com/post/81245981087")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"float horizonFading(float ndl, float horizonFade)\n {\n  float horiz = clamp(1.0 + horizonFade * ndl, 0.0, 1.0);\n  return horiz * horiz;\n }\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,l.mdx)("p",null,"Compute the lambertian diffuse radiance to the viewer's eye"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 pbrComputeDiffuse(vec3 normal, vec3 diffColor)\n {\n  return envIrradiance(normal) * diffColor;\n }\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,l.mdx)("p",null,"Compute the microfacets specular reflection to the viewer's eye"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 pbrComputeSpecular(\n  LocalVectors vectors,\n  vec3 F0,\n  vec3 F82,\n  float roughness,\n  float occlusion,\n  float bentNormalSpecularAmount)\n {\n  vec3 radiance = vec3(0.0);\n  float ndv = dot(vectors.eye, vectors.normal);\n \n  // Bent normals occlusion\n  float occlusionStart = 0.75 - occlusion;\n  float occlusionEnd = 1.0 - occlusion;\n  vec3 envT = worldToEnvSpace(vectors.tangent);\n  vec3 envB = worldToEnvSpace(vectors.bitangent);\n  vec3 envN = worldToEnvSpace(vectors.normal);\n  vec3 envE = worldToEnvSpace(vectors.eye);\n  vec3 envVertexNormal = worldToEnvSpace(vectors.vertexNormal);\n  vec3 envBent = worldToEnvSpace(vectors.bent);\n \n  for(int i=0; i<nbSamples; ++i)\n  {\n  vec2 Xi = fibonacci2DDitheredTemporal(i, nbSamples);\n  vec3 Hn = importanceSampleGGX(Xi, envT, envB, envN, roughness);\n  vec3 Ln = -reflect(envE,Hn);\n \n  float fade = horizonFading(dot(envVertexNormal, Ln), horizonFade);\n \n  float specOcclusion = 1.0;\n  if(bentNormalSpecularAmount!=0.0)\n  {\n  float mask = 1.0 - sqrt(1.0 - max(0.0, dot(envBent, Ln)));\n  specOcclusion = smoothstep(occlusionStart, occlusionEnd, mask);\n  specOcclusion = mix(1.0, specOcclusion, bentNormalSpecularAmount);\n  }\n \n  float ndl = dot(envN, Ln);\n  ndl = max( 1e-8, ndl );\n  float vdh = max(1e-8, dot(envE, Hn));\n  float ndh = max(1e-8, dot(envN, Hn));\n  float lodS = roughness < 0.01 ? 0.0 : computeLOD(Ln, probabilityGGX(ndh, vdh, roughness));\n  radiance += fade * specOcclusion * envSample(Ln, lodS) *\n  cook_torrance_contrib(vdh, ndh, ndl, ndv, F0, F82, roughness);\n  }\n  // Remove occlusions on shiny reflections\n  radiance /= float(nbSamples);\n \n  return radiance;\n }\n \n vec3 pbrComputeSpecular(\n  LocalVectors vectors,\n  vec3 F0,\n  vec3 F82,\n  float roughness)\n {\n  return pbrComputeSpecular(vectors, F0, F82, roughness, 1.0, 0.0);\n }\n \n vec3 pbrComputeSpecular(\n  LocalVectors vectors,\n  vec3 specColor,\n  float roughness,\n  float occlusion,\n  float bentNormalSpecularAmount)\n {\n  return pbrComputeSpecular(vectors, specColor, vec3(1.0), roughness, occlusion, bentNormalSpecularAmount);\n }\n \n vec3 pbrComputeSpecular(\n  LocalVectors vectors,\n  vec3 specColor,\n  float roughness)\n {\n  return pbrComputeSpecular(vectors, specColor, roughness, 1.0, 0.0);\n }\n \n \n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-pbr-md-3427d26eb8282532802d.js.map