"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1050],{26101:function(e,a,l){l.r(a),l.d(a,{_frontmatter:function(){return s},default:function(){return u}});var n=l(87462),r=l(63366),t=(l(15007),l(64983)),o=l(91515),i=["components"],s={},m={_frontmatter:s},p=o.Z;function u(e){var a=e.components,l=(0,r.Z)(e,i);return(0,t.mdx)(p,(0,n.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,t.mdx)("h1",{id:"substance-3d-painter-dota-2-shader"},"Substance 3D Painter Dota 2 shader"),(0,t.mdx)("hr",null),(0,t.mdx)("p",null,"Import from libraries."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-sampler.glsl\n import lib-env.glsl\n import lib-normal.glsl\n import lib-alpha.glsl\n import lib-pbr.glsl\n \n //: state cull_face off\n")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,t.mdx)("p",null,"------------------------- Diffuse Map --------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_basecolor\n uniform SamplerSparse diffuseMapSampler;\n")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,t.mdx)("p",null,"-------MASK1 ---------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_user0\n uniform SamplerSparse detail_tex;\n //: param auto channel_user1\n uniform SamplerSparse fresnelMaskSampler;\n //: param auto channel_metallic\n uniform SamplerSparse metallicSampler;\n //: param auto channel_emissive\n uniform SamplerSparse emissiveSampler;\n")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,t.mdx)("p",null,"-------MASK2 ---------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto channel_specular\n uniform SamplerSparse specularWarpSampler;\n //: param auto channel_user2\n uniform SamplerSparse rimSampler;\n //: param auto channel_user3\n uniform SamplerSparse tintSpecSampler;\n //: param auto channel_glossiness\n uniform SamplerSparse glossinessSampler;\n")),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,t.mdx)("p",null,"------- Specular Parameters ---------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": 1, "label": "Specular Color", "widget": "color" }\n uniform vec3 fSpecularColor;\n \n //: param custom { "default": 16.0, "label": "Specular Exponent", "min": 0.0, "max": 512.0 }\n uniform float fSpecularExponent;\n \n //: param custom { "default": 4.0, "label": "Specular Scale", "min": 0.0, "max": 512.0 }\n uniform float fSpecularScale;\n')),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,t.mdx)("p",null,"------- Rim Lighting Parameters ---------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": 1, "label": "Rim Light Color", "widget": "color" }\n uniform vec3 fRimLightColor;\n \n //: param custom { "default": 2.0, "label": "Rim Light Scale", "min": 0.0, "max": 32.0 }\n uniform float fRimLightScale;\n \n //: param custom { "default": true, "label": "Rim Lighting" }\n uniform bool bDoRimLighting;\n')),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,t.mdx)("p",null,"------- Ambient ---------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": 0, "label": "Ambient Color", "widget": "color" }\n uniform vec3 fAmbientColor;\n \n //: param custom { "default": 1.0, "label": "Ambient Scale", "min": 1.0, "max": 10.0 }\n uniform float fAmbientScale;\n \n //: param custom { "default": true, "label": "IBL Lighting" }\n uniform bool bUseIBL;\n \n //: param custom { "default": false, "label": "Alpha Test" }\n uniform bool bHasAlpha;\n')),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,t.mdx)("p",null,"------- Textures ----------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": false, "label": "Diffuse Warp" }\n uniform bool bDoDiffuseWarp;\n //: param custom { "default": "fresnelranges", "label": "Diffuse Warp", "usage": "texture" }\n uniform sampler2D difwarp;\n \n //: param custom { "default": "", "label": "Detail Map", "usage": "texture" }\n uniform sampler2D detailMapSampler;\n //: param custom { "default": 1.0, "label": "Detail Scale", "min": 0.0, "max": 32.0 }\n uniform float fDetailScale;\n')),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-9"}," ")),(0,t.mdx)("p",null,"------- Lights ----------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},'//: param custom { "default": [10.0, 10.0, 10.0], "label": "Light Position", "min": -20, "max": 20 }\n uniform vec3 lightPosition_1;\n \n //: param custom { "default": 1, "label": "Light Color", "widget": "color" }\n uniform vec3 lightColor_1;\n')),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"#section-10"}," ")),(0,t.mdx)("p",null,"-----------------------------------------------------------------//\n------------------------- Data Stucts ---------------------------//\n-----------------------------------------------------------------//"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-glsl"},"struct lightProp\n {\n  vec3 lightVector;\n  vec3 lightColor;\n };\n \n lightProp lightArray[1];\n \n // Lights! Method based on Xoluil Shader ( http://www.laurenscorijn.com/xoliulshader ) Thanks mate :)\n void PropagateLights( vec3 position )\n {\n  lightArray[0].lightVector = lightPosition_1 - position;\n  lightArray[0].lightColor = lightColor_1;\n }\n \n float Fresnel( vec3 N, vec3 V, float X )\n {\n  float Fresnel = 1.0 - clamp(dot(N, V), 0.0, 1.0);\n  return pow(Fresnel, X);\n }\n \n void CustomHeroDoLighting( vec3 N, vec3 L, vec3 V, vec3 LightColor, float diffuseWarpMask, float flSpecularExponent, inout vec3 finalDiffuse, inout vec3 finalSpecular)\n {\n  // Normalize\n  L = normalize(L);\n  float NdotL = dot(N, L);\n  float halfLambert = NdotL * 0.5 + 0.5;\n \n  vec3 diffuseLight = LightColor;\n  // diffuse warp\n  diffuseLight *= bDoDiffuseWarp ? texture(difwarp, vec2(halfLambert, diffuseWarpMask)).rgb : vec3(halfLambert);\n  finalDiffuse += diffuseLight; // Output our diffuse lighting\n \n  NdotL = max(0.0, NdotL);\n  vec3 R = reflect( V, N ); // No half-vector so this is consistent in look with ps2.0\n  float RdotL = max(0.0, dot( L, -R ));\n \n  flSpecularExponent *= fSpecularExponent; // fSpecularExponent is from the UI Spinner\n  float flSpecularIntensity = NdotL * pow( RdotL, flSpecularExponent );\n  vec3 SpecularLighting = flSpecularIntensity * LightColor;\n  finalSpecular += SpecularLighting;\n }\n \n float sampleWithDefault(SamplerSparse samplerSparse, SparseCoord coord, float defaultValue)\n {\n  vec2 value = textureSparse(samplerSparse, coord).rg;\n  return value.r + defaultValue * (1.0 - value.g);\n }\n \n void shade(V2F inputs)\n {\n  PropagateLights(inputs.position.xyz); // Bring in lights\n \n  // Get world space vectors\n  inputs.normal = normalize(inputs.normal);\n  LocalVectors vectors = computeLocalFrame(inputs);\n \n  float flDetailMask = sampleWithDefault(detail_tex , inputs.sparse_coord, 0.0);\n  float flDiffuseWarpMask = sampleWithDefault(fresnelMaskSampler, inputs.sparse_coord, 0.3);\n  float flMetalnessMask = sampleWithDefault(metallicSampler , inputs.sparse_coord, 0.0);\n  float flSelfIllumMask = sampleWithDefault(emissiveSampler , inputs.sparse_coord, 0.0);\n \n  float flSpecularMask = sampleWithDefault(specularWarpSampler, inputs.sparse_coord, 0.3);\n  float flRimMask = sampleWithDefault(rimSampler , inputs.sparse_coord, 0.3);\n  float flTintByBaseMask = sampleWithDefault(tintSpecSampler , inputs.sparse_coord, 0.0);\n  float flSpecularExponent = sampleWithDefault(glossinessSampler , inputs.sparse_coord, 0.3);\n \n  vec3 FresnelTerm = vec3(Fresnel(vectors.normal, vectors.eye, 5.0));\n  FresnelTerm.b = max( FresnelTerm.b, flDiffuseWarpMask );\n \n  vec3 albedo = getBaseColor(diffuseMapSampler, inputs.sparse_coord);\n  vec3 final = albedo * vec3(flSelfIllumMask); // emissive\n \n  vec3 diffuseColor = albedo; // assign the diffuse texture to our global diffuse color\n  vec3 Detail = texture(detailMapSampler, inputs.tex_coord * fDetailScale).rgb;\n  diffuseColor += Detail * flDetailMask;\n \n  if (bHasAlpha) {\n  alphaKill(inputs.sparse_coord);\n  }\n \n  vec3 ambient = fAmbientColor + fAmbientScale;\n  if(bUseIBL)\n  {\n  ambient = envIrradiance(vectors.normal) * fAmbientScale;\n  }\n \n  vec3 finalDiffuse = vec3(0.0);\n  vec3 finalSpecular = vec3(0.0);\n  CustomHeroDoLighting(vectors.normal, lightArray[0].lightVector, vectors.eye, lightArray[0].lightColor, flDiffuseWarpMask, flSpecularExponent, finalDiffuse, finalSpecular);\n \n  final += finalDiffuse * diffuseColor * ambient;\n \n  vec3 SpecularTint = mix(diffuseColor, fSpecularColor, flTintByBaseMask);\n  vec3 cSpecular = finalSpecular * SpecularTint * fSpecularScale * flSpecularMask * FresnelTerm.b;\n  final += cSpecular;\n \n  final = mix(final, cSpecular, flMetalnessMask);\n \n  vec3 rimLighting = vec3(0.0);\n  if ( bDoRimLighting )\n  {\n  rimLighting = vec3((FresnelTerm.r * fRimLightScale) * flRimMask);\n  rimLighting *= max(0.0, vectors.normal.y); // Masked by a 'sky light'\n  rimLighting *= fRimLightColor;\n  rimLighting *= (1.0 - flMetalnessMask); // Metalness\n  }\n  final += rimLighting;\n \n  final *= getShadowFactor();\n  diffuseShadingOutput(final);\n }\n \n \n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-shaders-dota-2-md-bd3f5fbb2b47cc075c3b.js.map