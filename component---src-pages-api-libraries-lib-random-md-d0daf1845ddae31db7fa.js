"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5654],{76715:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return u}});var l=a(87462),r=a(63366),m=(a(15007),a(64983)),t=a(91515),o=["components"],i={},p={_frontmatter:i},d=t.Z;function u(e){var n=e.components,a=(0,r.Z)(e,o);return(0,m.mdx)(d,(0,l.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("p",null,"lib-random.glsl"),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,m.mdx)("h1",{id:"lib-randomglsl"},"lib-random.glsl"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},"getBlueNoiseThreshold"),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},"getBlueNoiseThresholdTemporal"),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},"fibonacci1D"),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},"fibonacci2D"),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},"fibonacci2DDitheredTemporal")),(0,m.mdx)("p",null,"Import from library"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"import lib-defines.glsl\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,m.mdx)("p",null,"A 2D blue noise texture containing scalar values"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto texture_blue_noise\n uniform sampler2D texture_blue_noise;\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,m.mdx)("p",null,"Blue noise texture resolution"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"const ivec2 texture_blue_noise_size = ivec2(256);\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,m.mdx)("p",null,"Current frame random seed"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto random_seed\n uniform int alg_random_seed;\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,m.mdx)("p",null,"Get an uniform random value based on pixel coordinates."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"float getBlueNoiseThreshold()\n {\n  return texture(texture_blue_noise, gl_FragCoord.xy / vec2(texture_blue_noise_size)).x + 0.5 / 65536.0;\n }\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,m.mdx)("p",null,"Get an uniform random value based on pixel coordinates and frame id."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"float getBlueNoiseThresholdTemporal()\n {\n  return fract(getBlueNoiseThreshold() + M_GOLDEN_RATIO * alg_random_seed);\n }\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,m.mdx)("p",null,"Return the i",(0,m.mdx)("em",{parentName:"p"},"th")," number from fibonacci sequence."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"float fibonacci1D(int i)\n {\n  return fract((float(i) + 1.0) * M_GOLDEN_RATIO);\n }\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,m.mdx)("p",null,"Return the i",(0,m.mdx)("em",{parentName:"p"},"th")," couple from the fibonacci sequence.\nnbSample is required to get an uniform distribution."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec2 fibonacci2D(int i, int nbSamples)\n {\n  return vec2(\n  (float(i)+0.5) / float(nbSamples),\n  fibonacci1D(i)\n  );\n }\n")),(0,m.mdx)("p",null,(0,m.mdx)("a",{parentName:"p",href:"#section-9"}," ")),(0,m.mdx)("p",null,"Return the i",(0,m.mdx)("em",{parentName:"p"},"th")," couple from the fibonacci sequence.\nnbSample is required to get an uniform distribution.\nThis version has a per frame and per pixel pseudo-random rotation applied."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec2 fibonacci2DDitheredTemporal(int i, int nbSamples)\n {\n  vec2 s = fibonacci2D(i, nbSamples);\n  s.x += getBlueNoiseThresholdTemporal();\n  return s;\n }\n \n \n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-random-md-d0daf1845ddae31db7fa.js.map