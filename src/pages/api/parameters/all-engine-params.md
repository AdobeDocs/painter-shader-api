---
title: Engine parameters examples (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























Engine parameters examples
==========================

---




  



Texture parameters
------------------


Substance 3D Painter uses a Sparse Virtual Texture (SVT) system to display textures in the viewport.


For more information about this system, go to the [online documentation](https://docs.substance3d.com/documentation/spdoc/sparse-virtual-textures-172823866.html).


This system has repercussions on how to write shader code. We are providing helpers to simplify its use with the `SamplerSparse` structure and
 texture lookup functions (see [lib\-sparse.glsl](/src/pages/api/libraries/lib-sparse/)).


Basic usage:





```glsl
// Defines the SamplerSparse structure
 import lib-sparse.glsl
 
 //: param auto TEXTURE_TAG
 uniform SamplerSparse uniform_tex;   // Texture sampler and its information
```









Texture parameters allow to use 'or' operator to define a fallback:





```glsl
//: param auto TEXTURE_TAG_1 or TEXTURE_TAG_2
 uniform SamplerSparse uniform_tex; // if TEXTURE_TAG_1 exists then TEXTURE_TAG_1 else TEXTURE_TAG_2
```









Where `TEXTURE_TAG` is one of the described tags below.


### Document's channels tags


All these textures are **premultiplied** and **dilated** to avoid seams problems.


**Texture set channels**


`channel_ambientocclusion`
`channel_anisotropyangle`
`channel_anisotropylevel`
`channel_basecolor`
`channel_blendingmask`
`channel_diffuse`
`channel_displacement`
`channel_emissive`
`channel_glossiness`
`channel_height`
`channel_ior`
`channel_metallic`
`channel_normal`
`channel_opacity`
`channel_reflection`
`channel_roughness`
`channel_scattering`
`channel_specular`
`channel_specularlevel`
`channel_transmissive`


**User channels**


`channel_user0`
`channel_user1`
`channel_user2`
`channel_user3`
`channel_user4`
`channel_user5`
`channel_user6`
`channel_user7`


### Mesh maps


`texture_ambientocclusion` : Ambient Occlusion map  

`texture_curvature` : Curvature map  

`texture_id` : ID map  

`texture_normal` : Tangent space normal map  

`texture_normal_ws` : World space normal map  

`texture_position` : World space position map  

`texture_thickness` : Thickness map  

`texture_height` : Height map  

`texture_bent_normals` : Bent normals map  

`texture_opacity` : Opacity map  



Additional texture parameters
-----------------------------


Basic usage:





```glsl
//: param auto TEXTURE_TAG
 uniform sampler2D uniform_tex;   // The texture itself
 
 //: param auto TEXTURE_TAG_size
 uniform vec4 uniform_tex_size;   // The size of the texture (width, height, 1/width, 1/height)
```









Texture parameters allow to use 'or' operator to define a fallback:





```glsl
//: param auto TEXTURE_TAG_1 or TEXTURE_TAG_2
 uniform sampler2D uniform_tex; // if TEXTURE_TAG_1 exists then TEXTURE_TAG_1 else TEXTURE_TAG_2
 
 //: param auto TEX_TAG_1_size or TEX_TAG_2_size
 uniform vec4 uniform_tex_size; // if TEX_TAG_1 exists then TEX_TAG_1_size else TEX_TAG_2_size
```









Where `TEXTURE_TAG` is one of the described tags below.


`texture_blue_noise` : A blue noise texture  

`texture_environment` : Environment map, **mip\-mapped**, use [lib\-env.glsl](/src/pages/api/libraries/lib-env/) to use this one  



Other parameters
----------------


`aspect_ratio`: a `float` containing the viewport `width / height` ratio  






```glsl
//: param auto aspect_ratio
 uniform float uniform_aspect_ratio;
```









`camera_view_matrix`: a `mat4` representing the transformation from world space to camera space  






```glsl
//: param auto camera_view_matrix
 uniform mat4 uniform_camera_view_matrix;
```









`camera_view_matrix_it`: inverse transpose version of `camera_view_matrix`  






```glsl
//: param auto camera_view_matrix_it
 uniform mat4 uniform_camera_view_matrix_it;
```









`camera_vp_matrix_inverse`: inverse of `projection * camera_view_matrix` matrix   






```glsl
//: param auto camera_vp_matrix_inverse
 uniform mat4 uniform_camera_vp_matrix_inverse;
```









`environment_exposure`: a `float` representing the envmap's exposure  






```glsl
//: param auto environment_exposure
 uniform float uniform_environment_exposure;
```









`environment_max_lod`: a `float` representing the envmap's depth of mip\-map pyramid  






```glsl
//: param auto environment_max_lod
 uniform float uniform_max_lod;
```









`environment_matrix`: a `mat3` representing the transformation from world space vector to environment map direction  






```glsl
//: param auto environment_matrix
 uniform mat3 uniform_environment_matrix;
```









`facing`: an `integer` indicating rendered faces (\-1: back faces, 0: undefined, 1: front faces)  

 value of 0 means you can safely rely on glsl built\-in variable `gl_FrontFacing`  






```glsl
//: param auto facing
 uniform int uniform_facing;
```









`fovy`: a `float` representing the camera field of view along Y axis  






```glsl
//: param auto fovy
 uniform float uniform_fovy;
```









`is_2d_view`: a `bool` indicating whether the rendering is performed for 2D view or not  






```glsl
//: param auto is_2d_view
 uniform bool uniform_2d_view;
```









`is_perspective_projection`: a `bool` indicating whether the projection is perspective or orthographic  






```glsl
//: param auto is_perspective_projection
 uniform bool uniform_perspective_projection;
```









`main_light`: a `vec4` indicating the position of the main light in the environment  






```glsl
//: param auto main_light
 uniform vec4 uniform_main_light;
```









`mvp_matrix`: a `mat4` representing the model view projection matrix  






```glsl
//: param auto mvp_matrix
 uniform mat4 uniform_mvp_matrix;
```









`scene_original_radius`: a `float` representing the radius of the scene's bounding sphere before its normalization  






```glsl
//: param auto scene_original_radius
 uniform float uniform_scene_original_radius;
```









`screen_size`: a `vec4` containing screen size data `(width, height, 1/width, 1/height)`  






```glsl
//: param auto screen_size
 uniform vec4 uniform_screen_size;
```









`world_camera_direction`: a `vec3` representing the world camera orientation  






```glsl
//: param auto world_camera_direction
 uniform vec3 uniform_world_camera_direction;
```









`world_eye_position`: a `vec3` representing the world eye position  






```glsl
//: param auto world_eye_position
 uniform vec3 uniform_world_eye_position;
 
 
```






