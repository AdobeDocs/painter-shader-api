"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9467],{7852:function(e,a,l){l.r(a),l.d(a,{_frontmatter:function(){return d},default:function(){return o}});var r=l(87462),i=l(63366),n=(l(15007),l(64983)),t=l(91515),m=["components"],d={},s={_frontmatter:d},p=t.Z;function o(e){var a=e.components,l=(0,i.Z)(e,m);return(0,n.mdx)(p,(0,r.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"changelog"},"Changelog"),(0,n.mdx)("hr",null),(0,n.mdx)("h2",{id:"910"},"9",".","1",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add new blending mode ",(0,n.mdx)("em",{parentName:"li"},"add_multiply"),": requires dual blending and then introduces a new output."),(0,n.mdx)("li",{parentName:"ul"},"Rendering states (blending modes, culling, etc.) can be conditionaly enabled in function of parameter values (specialized uniforms only)."),(0,n.mdx)("li",{parentName:"ul"},"New ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-alpha-test/"},"lib","-","alpha","-","test.glsl")," library that contains alpha test related reworked parameters and ",(0,n.mdx)("em",{parentName:"li"},"alphaKill")," function. Previous ",(0,n.mdx)("em",{parentName:"li"},"lib","-","alpha.glsl")," library is kept for compatibility reasons."),(0,n.mdx)("li",{parentName:"ul"},"UI group, description and label of most library parameters have been updated."),(0,n.mdx)("li",{parentName:"ul"},"New ",(0,n.mdx)("em",{parentName:"li"},"Absorption color")," channel support."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("em",{parentName:"li"},"Translucency")," channel default value is now 1",".","0","."),(0,n.mdx)("li",{parentName:"ul"},"Added new parameter in Subsurface scattering ( ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sss/"},"lib","-","sss.glsl"),") to toggle usage of translucency channel as scattering mask."),(0,n.mdx)("li",{parentName:"ul"},"Updated asm","-","metal","-","rough.glsl shader to support alpha test, alpha blend, translucency and absorption.")),(0,n.mdx)("h2",{id:"820"},"8",".","2",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Engine parameter ",(0,n.mdx)("em",{parentName:"li"},"environment_rotation")," in ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-env/"},"lib","-","env.glsl")," is replaced by ",(0,n.mdx)("em",{parentName:"li"},"environment_matrix"),". Allows more complex environment transformations."),(0,n.mdx)("li",{parentName:"ul"},"Dynamic material layering: Add new optional ",(0,n.mdx)("em",{parentName:"li"},"format")," entry in sub","-","stack channels declaration.")),(0,n.mdx)("h2",{id:"810"},"8",".","1",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add support for Bent Normals diffuse and specular shading"),(0,n.mdx)("li",{parentName:"ul"},"New ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-bent-normal/"},"lib","-","bent","-","normal.glsl")," library to regroup helpers functions"),(0,n.mdx)("li",{parentName:"ul"},"Updated ","[pbrComputeSpecular()]"," arguments list to add bent normal specular amount"),(0,n.mdx)("li",{parentName:"ul"},"Added supports for Bent Normals to ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/shaders/asm-metal-rough/"},"asm","-","metal","-","rough.glsl")," and ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/shaders/pbr-metal-rough/"},"pbr","-","metal","-","rough.glsl")," shaders"),(0,n.mdx)("li",{parentName:"ul"},"Removed support for DISABLE_FRAMEBUFFER_SRGB_CONVERSION define.")),(0,n.mdx)("h2",{id:"720"},"7",".","2",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add a new ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-coat/"},"lib","-","coat.glsl")," library to help handling coating layer in the material."),(0,n.mdx)("li",{parentName:"ul"},"Add a new ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sheen/"},"lib","-","sheen.glsl")," library to help handling sheen specular highlights."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/parameters/all-custom-params/"},"all","-","custom","-","params.glsl"),": Updated the ",(0,n.mdx)("em",{parentName:"li"},"visible")," parameter to support dynamic boolean condition."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/parameters/all-custom-qualifiers/"},"all","-","custom","-","qualifiers.glsl"),": Add new ",(0,n.mdx)("em",{parentName:"li"},"uniform_qualifier")," to enable/disable parameters at shader compilation time."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sampler/"},"lib","-","sampler.glsl"),": Add ",(0,n.mdx)("em",{parentName:"li"},"generateAnisotropicRoughnessASM")," function to interpret anisotropy parameters in the Adobe Shader Material definition (ASM).")),(0,n.mdx)("h2",{id:"201832"},"2018",".","3",".","2"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sparse/"},"lib","-","sparse.glsl"),": Sampling functions uses texture derivatives instead simple mipmap level. It's a requirement for the support of anisotropy sampling. Sampling functions signatures are not modified."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-pom/"},"lib","-","pom.glsl"),": the ",(0,n.mdx)("em",{parentName:"li"},"getParallaxOffset")," function signature has changed in order to uses texture derivatives")),(0,n.mdx)("h2",{id:"201830"},"2018",".","3",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add a new ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-pbr-aniso/"},"lib","-","pbr","-","aniso.glsl")," library to help visualizing anisotropic specular highlight"),(0,n.mdx)("li",{parentName:"ul"},"Add a new ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sparse/"},"lib","-","sparse.glsl")," library to help channel sampling by taking care of mipmaps availability"),(0,n.mdx)("li",{parentName:"ul"},"Update shader libraries interfaces to take care of this safe sampling"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Deprecation"),": The previous functions based on the vec2 texture coordinates and the texture sampler have been deprecated (please use new signatures)"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-pom/"},"lib","-","pom.glsl"),": Add a ",(0,n.mdx)("em",{parentName:"li"},"applyParallaxOffset")," function to simplify to use of parallax occlusion effect"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-random/"},"lib","-","random.glsl"),": Add a Blue Noise random value generator and temporal alternatives"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sampler/"},"lib","-","sampler.glsl"),": Split all channel sampling helpers to have both value interpretation and sampling helpers")),(0,n.mdx)("h2",{id:"201820"},"2018",".","2",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Surface shader API change"),": the ",(0,n.mdx)("em",{parentName:"li"},"shade")," function signature has changed, see ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/shaders/surface-shader/"},"surface","-","shader.glsl")),(0,n.mdx)("li",{parentName:"ul"},"The ",(0,n.mdx)("em",{parentName:"li"},"shadeShadow")," function is no longer used and can safely be removed from custom surface shaders"),(0,n.mdx)("li",{parentName:"ul"},"Add Subsurface Scattering support, see ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/shaders/surface-shader/"},"surface","-","shader.glsl")," and ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-sss/"},"lib","-","sss.glsl")," for details"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-pbr/"},"lib","-","pbr.glsl"),": the ",(0,n.mdx)("em",{parentName:"li"},"pbrComputeBRDF")," function has been removed. See ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/shaders/pbr-metal-rough/"},"pbr","-","metal","-","rough.glsl")," example to know how to use the library now"),(0,n.mdx)("li",{parentName:"ul"},"New engine parameters have been added: ",(0,n.mdx)("em",{parentName:"li"},"texture_blue_noise"),", ",(0,n.mdx)("em",{parentName:"li"},"aspect_ratio"),", ",(0,n.mdx)("em",{parentName:"li"},"camera_vp_matrix_inverse"),", ",(0,n.mdx)("em",{parentName:"li"},"environment_exposure"),", ",(0,n.mdx)("em",{parentName:"li"},"environment_rotation"),", ",(0,n.mdx)("em",{parentName:"li"},"fovy"),", ",(0,n.mdx)("em",{parentName:"li"},"main_light")," and ",(0,n.mdx)("em",{parentName:"li"},"screen_size"),". See ",(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/parameters/all-engine-params/"},"all","-","engine","-","params.glsl")," for details"),(0,n.mdx)("li",{parentName:"ul"},"Add the ",(0,n.mdx)("em",{parentName:"li"},"description")," metadata to provide tooltips for custom shader parameters")),(0,n.mdx)("h2",{id:"201742"},"2017",".","4",".","2"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fix missing shaders in documentation samples (pixelated and toon shaders)"),(0,n.mdx)("li",{parentName:"ul"},"Fix dithering for high resolution",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-bayer/"},"lib","-","bayer.glsl"),": ",(0,n.mdx)("strong",{parentName:"li"},"bayerMatrix8()")," return valid values for coords ",">"," 4k")))),(0,n.mdx)("h2",{id:"201741"},"2017",".","4",".","1"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fix pbr","-","coated shader",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/painter-shader-api/src/pages/api/libraries/lib-vectors/"},"lib","-","vectors.glsl"),": ",(0,n.mdx)("strong",{parentName:"li"},"tangentSpaceToWorldSpace()")," and ",(0,n.mdx)("strong",{parentName:"li"},"worldSpaceToTangentSpace()")," outputs are now normalized")))),(0,n.mdx)("h2",{id:"201740"},"2017",".","4",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Incorrect specular reflection in the 2D view for certain meshes")),(0,n.mdx)("h2",{id:"201731"},"2017",".","3",".","1"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Cheaper dithering")),(0,n.mdx)("h2",{id:"201720"},"2017",".","2",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Remove interpolated tbn normalization to match Substance Designer and bakers behavior"),(0,n.mdx)("li",{parentName:"ul"},"[","Viewport] Replace Hammersley table by a Fibonacci spiral")),(0,n.mdx)("h2",{id:"260"},"2",".","6",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fix shaders blending and culling modes"),(0,n.mdx)("li",{parentName:"ul"},"Rework dithering. Now if we have a render in linear, we apply it after the color profile")),(0,n.mdx)("h2",{id:"250"},"2",".","5",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add support for Color Profiles (LUT) in viewports (Optional sRGB conversion)"),(0,n.mdx)("li",{parentName:"ul"},"Add dithering to opacity in shaders"),(0,n.mdx)("li",{parentName:"ul"},"Add parallax occlusion mapping to PBR shaders"),(0,n.mdx)("li",{parentName:"ul"},"Add a way to hide custom params from the default shader UI"),(0,n.mdx)("li",{parentName:"ul"},"Add a link to channel tags list in layering shader documentation"),(0,n.mdx)("li",{parentName:"ul"},"Replace 'channel_ao' tag by 'channel_ambientocclusion'"),(0,n.mdx)("li",{parentName:"ul"},"[","Viewport] Some normal maps have clamped values which appear as artifacts"),(0,n.mdx)("li",{parentName:"ul"},"Fix available channels in shaders doc"),(0,n.mdx)("li",{parentName:"ul"},"Allow to define a custom shader UI"),(0,n.mdx)("li",{parentName:"ul"},"Add a standard custom shader UI for material layering shaders"),(0,n.mdx)("li",{parentName:"ul"},"Custom UI files are now searched relatively to a shaders/custom","-","ui folder in the shelves (like the mdl)"),(0,n.mdx)("li",{parentName:"ul"},"Use the specular level channel in default shaders"),(0,n.mdx)("li",{parentName:"ul"},"Fix vec3 shader params example"),(0,n.mdx)("li",{parentName:"ul"},"Upgrade Painter to OpenGL core profile")),(0,n.mdx)("h2",{id:"240"},"2",".","4",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fix the difference on the normal map combined exported and the one displayed in the viewport")),(0,n.mdx)("h2",{id:"220"},"2",".","2",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add support for bindless textures in generic material for non Document textures"),(0,n.mdx)("li",{parentName:"ul"},"Update custom shader sliders documentation"),(0,n.mdx)("li",{parentName:"ul"},"Allow to define step precision for sliders"),(0,n.mdx)("li",{parentName:"ul"},"Documentation for dynamic material layering")),(0,n.mdx)("h2",{id:"211"},"2",".","1",".","1"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add a 'RGB2Gray' function in lib","-","utils")),(0,n.mdx)("h2",{id:"210"},"2",".","1",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Allow to define groups for shader parameters and materials/masks"),(0,n.mdx)("li",{parentName:"ul"},"Add missing channels in documentation ('ao', 'diffuse', 'specularlevel')")),(0,n.mdx)("h2",{id:"204"},"2",".","0",".","4"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Normal unpack function incorrect with low alpha values"),(0,n.mdx)("li",{parentName:"ul"},"Allow to read mesh vertex colors in custom shader"),(0,n.mdx)("li",{parentName:"ul"},"[","Viewport] Stretched environment map on some computers")),(0,n.mdx)("h2",{id:"200"},"2",".","0",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Allow to override Normal/AO additional maps by dedicated channel"),(0,n.mdx)("li",{parentName:"ul"},"Change Height2Normal function to use Sobel method"),(0,n.mdx)("li",{parentName:"ul"},"Add the possibility to define a mdl per shader"),(0,n.mdx)("li",{parentName:"ul"},"Add a new mdl folder in the shelf"),(0,n.mdx)("li",{parentName:"ul"},"Add diffuse and specular level channel presets"),(0,n.mdx)("li",{parentName:"ul"},"Documentation update for tone mapping"),(0,n.mdx)("li",{parentName:"ul"},"Fix reflections when in orthographic mode"),(0,n.mdx)("li",{parentName:"ul"},"Fixed the vertical white glitch appearing at a specific location on the envmap"),(0,n.mdx)("li",{parentName:"ul"},"Allow to define 'default_color' for texture params")),(0,n.mdx)("h2",{id:"170"},"1",".","7",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Allow to sample external textures (from shelf)")),(0,n.mdx)("h2",{id:"160"},"1",".","6",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Expose gamma/tonemapping function to allow to override them"),(0,n.mdx)("li",{parentName:"ul"},"Expose multiple texcoords")),(0,n.mdx)("h2",{id:"150"},"1",".","5",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add line number and filename in shader error report")),(0,n.mdx)("h2",{id:"141"},"1",".","4",".","1"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"All sRGB conversions follow the sRGB standard, except those done in the shaders that have close approximation"),(0,n.mdx)("li",{parentName:"ul"},"Height channel to Normal map is converted to the wrong color space")),(0,n.mdx)("h2",{id:"140"},"1",".","4",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add ambient occlusion channel"),(0,n.mdx)("li",{parentName:"ul"},"Add new workflow for normal edition"),(0,n.mdx)("li",{parentName:"ul"},"Add 'or' expression syntax for texture related auto parameters"),(0,n.mdx)("li",{parentName:"ul"},"Fix pbr shader for Intel gpu on OSX")),(0,n.mdx)("h2",{id:"134"},"1",".","3",".","4"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Allow to interpolate binormals in fragment shader"),(0,n.mdx)("li",{parentName:"ul"},"Fix Mikkt tangent space")),(0,n.mdx)("h2",{id:"133"},"1",".","3",".","3"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fix spherical harmonics producing negative light intensity"),(0,n.mdx)("li",{parentName:"ul"},"Exposure computation is different from Substance Designer (and fix exposure slider)"),(0,n.mdx)("li",{parentName:"ul"},"Shadows should not be visible on 100% metallic surface")),(0,n.mdx)("h2",{id:"130"},"1",".","3",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add shadow function"),(0,n.mdx)("li",{parentName:"ul"},"Add support for opacity ('alpha_test' and 'alpha_blend')")),(0,n.mdx)("h2",{id:"120"},"1",".","2",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Ability to set required openGL states into custom shaders"),(0,n.mdx)("li",{parentName:"ul"},"Fix inverted bitangents"),(0,n.mdx)("li",{parentName:"ul"},"Add support for normal channel")),(0,n.mdx)("h2",{id:"10"},"1",".","0"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Add support for custom shaders")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-changelog-md-a712da7c85cb41b62fb0.js.map