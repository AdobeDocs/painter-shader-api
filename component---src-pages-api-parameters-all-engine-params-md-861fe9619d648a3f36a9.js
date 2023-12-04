"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2974],{43940:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return s}});var m=a(87462),r=a(63366),i=(a(15007),a(64983)),t=a(91515),p=["components"],l={},o={_frontmatter:l},d=t.Z;function s(e){var n=e.components,a=(0,r.Z)(e,p);return(0,i.mdx)(d,(0,m.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,i.mdx)("h1",{id:"engine-parameters-examples"},"Engine parameters examples"),(0,i.mdx)("h2",{id:"texture-parameters"},"Texture parameters"),(0,i.mdx)("p",null,"Substance 3D Painter uses a Sparse Virtual Texture (SVT) system to display textures in the viewport."),(0,i.mdx)("p",null,"For more information about this system, go to the ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.substance3d.com/documentation/spdoc/sparse-virtual-textures-172823866.html"},"online documentation"),"."),(0,i.mdx)("p",null,"This system has repercussions on how to write shader code. We are providing helpers to simplify its use with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SamplerSparse")," structure and\ntexture lookup functions (see ",(0,i.mdx)("a",{parentName:"p",href:"/painter-shader-api/api/libraries/lib-sparse.html"},"lib-sparse.glsl"),")."),(0,i.mdx)("p",null,"Basic usage:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"// Defines the SamplerSparse structure\n\n \n //: param auto TEXTURE_TAG\n uniform SamplerSparse uniform_tex; // Texture sampler and its information\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,i.mdx)("p",null,"Texture parameters allow to use 'or' operator to define a fallback:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto TEXTURE_TAG_1 or TEXTURE_TAG_2\n uniform SamplerSparse uniform_tex; // if TEXTURE_TAG_1 exists then TEXTURE_TAG_1 else TEXTURE_TAG_2\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,i.mdx)("p",null,"Where ",(0,i.mdx)("inlineCode",{parentName:"p"},"TEXTURE_TAG")," is one of the described tags below."),(0,i.mdx)("h3",{id:"documents-channels-tags"},"Document's channels tags"),(0,i.mdx)("p",null,"All these textures are ",(0,i.mdx)("strong",{parentName:"p"},"premultiplied")," and ",(0,i.mdx)("strong",{parentName:"p"},"dilated")," to avoid seams problems."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Texture set channels")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"channel_ambientocclusion"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_anisotropyangle"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_anisotropylevel"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_basecolor"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_blendingmask"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_diffuse"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_displacement"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_emissive"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_glossiness"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_height"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_ior"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_metallic"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_normal"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_opacity"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_reflection"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_roughness"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_scattering"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_specular"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_specularlevel"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_transmissive")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"User channels")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user0"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user1"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user2"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user3"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user4"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user5"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user6"),"\n",(0,i.mdx)("inlineCode",{parentName:"p"},"channel_user7")),(0,i.mdx)("h3",{id:"mesh-maps"},"Mesh maps"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_ambientocclusion")," : Ambient Occlusion map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_curvature")," : Curvature map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_id")," : ID map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_normal")," : Tangent space normal map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_normal_ws")," : World space normal map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_position")," : World space position map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_thickness")," : Thickness map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_height")," : Height map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_bent_normals")," : Bent normals map  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_opacity")," : Opacity map  "),(0,i.mdx)("h2",{id:"additional-texture-parameters"},"Additional texture parameters"),(0,i.mdx)("p",null,"Basic usage:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto TEXTURE_TAG\n uniform sampler2D uniform_tex; // The texture itself\n \n //: param auto TEXTURE_TAG_size\n uniform vec4 uniform_tex_size; // The size of the texture (width, height, 1/width, 1/height)\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,i.mdx)("p",null,"Texture parameters allow to use 'or' operator to define a fallback:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto TEXTURE_TAG_1 or TEXTURE_TAG_2\n uniform sampler2D uniform_tex; // if TEXTURE_TAG_1 exists then TEXTURE_TAG_1 else TEXTURE_TAG_2\n \n //: param auto TEX_TAG_1_size or TEX_TAG_2_size\n uniform vec4 uniform_tex_size; // if TEX_TAG_1 exists then TEX_TAG_1_size else TEX_TAG_2_size\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,i.mdx)("p",null,"Where ",(0,i.mdx)("inlineCode",{parentName:"p"},"TEXTURE_TAG")," is one of the described tags below."),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_blue_noise")," : A blue noise texture  "),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"texture_environment")," : Environment map, ",(0,i.mdx)("strong",{parentName:"p"},"mip-mapped"),", use ",(0,i.mdx)("a",{parentName:"p",href:"/painter-shader-api/api/libraries/lib-env.html"},"lib-env.glsl")," to use this one  "),(0,i.mdx)("h2",{id:"other-parameters"},"Other parameters"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"aspect_ratio"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"float")," containing the viewport ",(0,i.mdx)("inlineCode",{parentName:"p"},"width / height")," ratio  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto aspect_ratio\n uniform float uniform_aspect_ratio;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"camera_view_matrix"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"mat4")," representing the transformation from world space to camera space  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto camera_view_matrix\n uniform mat4 uniform_camera_view_matrix;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"camera_view_matrix_it"),": inverse transpose version of ",(0,i.mdx)("inlineCode",{parentName:"p"},"camera_view_matrix"),"  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto camera_view_matrix_it\n uniform mat4 uniform_camera_view_matrix_it;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"camera_vp_matrix_inverse"),": inverse of ",(0,i.mdx)("inlineCode",{parentName:"p"},"projection * camera_view_matrix")," matrix   "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto camera_vp_matrix_inverse\n uniform mat4 uniform_camera_vp_matrix_inverse;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-9"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"environment_exposure"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"float")," representing the envmap's exposure  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto environment_exposure\n uniform float uniform_environment_exposure;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-10"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"environment_max_lod"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"float")," representing the envmap's depth of mip-map pyramid  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto environment_max_lod\n uniform float uniform_max_lod;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-11"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"environment_matrix"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"mat3")," representing the transformation from world space vector to environment map direction  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto environment_matrix\n uniform mat3 uniform_environment_matrix;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-12"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"facing"),": an ",(0,i.mdx)("inlineCode",{parentName:"p"},"integer")," indicating rendered faces (-1: back faces, 0: undefined, 1: front faces)  "),(0,i.mdx)("p",null," value of 0 means you can safely rely on glsl built-in variable ",(0,i.mdx)("inlineCode",{parentName:"p"},"gl_FrontFacing"),"  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto facing\n uniform int uniform_facing;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-13"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"fovy"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"float")," representing the camera field of view along Y axis  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto fovy\n uniform float uniform_fovy;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-14"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"is_2d_view"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"bool")," indicating whether the rendering is performed for 2D view or not  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto is_2d_view\n uniform bool uniform_2d_view;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-15"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"is_perspective_projection"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"bool")," indicating whether the projection is perspective or orthographic  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto is_perspective_projection\n uniform bool uniform_perspective_projection;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-16"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"main_light"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"vec4")," indicating the position of the main light in the environment  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto main_light\n uniform vec4 uniform_main_light;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-17"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"mvp_matrix"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"mat4")," representing the model view projection matrix  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto mvp_matrix\n uniform mat4 uniform_mvp_matrix;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-18"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"scene_original_radius"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"float")," representing the radius of the scene's bounding sphere before its normalization  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto scene_original_radius\n uniform float uniform_scene_original_radius;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-19"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"screen_size"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"vec4")," containing screen size data ",(0,i.mdx)("inlineCode",{parentName:"p"},"(width, height, 1/width, 1/height)"),"  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto screen_size\n uniform vec4 uniform_screen_size;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-20"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"world_camera_direction"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"vec3")," representing the world camera orientation  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto world_camera_direction\n uniform vec3 uniform_world_camera_direction;\n")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"#section-21"}," ")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"world_eye_position"),": a ",(0,i.mdx)("inlineCode",{parentName:"p"},"vec3")," representing the world eye position  "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto world_eye_position\n uniform vec3 uniform_world_eye_position;\n \n \n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-parameters-all-engine-params-md-861fe9619d648a3f36a9.js.map