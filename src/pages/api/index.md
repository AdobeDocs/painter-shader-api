---
title: Shader reference (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
layout: none
---













[ ](#section-0)

Shader reference
================


Changelog
---------


* [Full changelog file](/src/pages/api/changelog/)


Warm up
-------


In Substance 3D Painter, you can write your own shaders in *GLSL*. We allow
 you to write only a *portion* of the fragment shader, which is sometimes called
 a *surface shader*. Without further ado, let's introduce the "Hello world"
 Substance 3D Painter surface shader:





```glsl
void shade(V2F inputs) {
  diffuseShadingOutput(vec3(1.0, 0.0, 1.0));
 }
```







[ ](#section-1)

Now, if you save this snippet into a `.glsl` file and load it into Substance 3D Painter by dropping
 it into your shelf's shader tab, you can now use it and see a beautiful uniform pink color on
 your mesh.


Surface shader
--------------


* [surface-shader.glsl](/src/pages/api/shaders/surface-shader/)


Engine provided data
--------------------


In Substance 3D Painter, you can access rendering engine parameters (document's channels,
 additional textures, camera-related data and the like). Here is an exhaustive list of all
 engine provided parameters :


* [all-engine-params.glsl](/src/pages/api/parameters/all-engine-params/)


Engine settings
---------------


In some cases you may want to use a specific rendering configuration (culling, blending,
 sampling locality, and the like) for an effect. Some rendering states are exposed and
 can be set in the shader. Here is an exhaustive list of all exposed rendering states :


* [all-rendering-states-params.glsl](/src/pages/api/parameters/all-rendering-states-params/)


Custom tweaks
-------------


It's usual to have custom tweaks in a shader. To do so in Substance 3D Painter's shaders,
 we have introduced a way to specify custom tweaks. Here is an exhaustive list of all custom
 shader tweaks types :


* [all-custom-params.glsl](/src/pages/api/parameters/all-custom-params/)


Custom qualifiers
-----------------


Beside regular GLSL qualifiers, we added a custom *uniform_specialization* qualifier that
 can be used as drop-in replacement of *uniform* to optimize uber shaders :


* [all-custom-qualifiers.glsl](/src/pages/api/parameters/all-custom-qualifiers/)


Embedded libraries
------------------


In order to avoid writing a lot of boilerplate code in all of your shaders,
 we created a small yet practical library of useful functions. **Please note that
 you can't edit it nor create your own at the moment.**


* [lib-alpha.glsl](/src/pages/api/libraries/lib-alpha/) : contains opacity related helpers
* [lib-bayer.glsl](/src/pages/api/libraries/lib-bayer/) : contains bayer matrix helpers
* [lib-bent-normal.glsl](/src/pages/api/libraries/lib-bent-normal/) : contains bent normal helpers
* [lib-coat.glsl](/src/pages/api/libraries/lib-coat/) : contains coating layer helpers
* [lib-defines.glsl](/src/pages/api/libraries/lib-defines/) : contains useful math constants and base defines
* [lib-emissive.glsl](/src/pages/api/libraries/lib-emissive/) : contains emissive properties helpers
* [lib-env.glsl](/src/pages/api/libraries/lib-env/) : contains environment map related helpers
* [lib-normal.glsl](/src/pages/api/libraries/lib-normal/) : contains normal map related helpers (and height-map generated normal map
* [lib-pbr.glsl](/src/pages/api/libraries/lib-pbr/) : contains physically based rendering helpers
* [lib-pbr-aniso.glsl](/src/pages/api/libraries/lib-pbr-aniso/) : contains anisotropic physically based rendering helpers
* [lib-pom.glsl](/src/pages/api/libraries/lib-pom/) : contains parallax occlusion mapping helpers
* [lib-random.glsl](/src/pages/api/libraries/lib-random/) : contains random utilities (low discrepancy sequences
* [lib-sampler.glsl](/src/pages/api/libraries/lib-sampler/) : contains channel getters helpers
* [lib-sheen.glsl](/src/pages/api/libraries/lib-sheen/) : contains sheen model reflection helpers
* [lib-sparse.glsl](/src/pages/api/libraries/lib-sparse/) : contains safe sparse texture sampling helpers
* [lib-sss.glsl](/src/pages/api/libraries/lib-sss/) : contains subsurface scattering helpers
* [lib-utils.glsl](/src/pages/api/libraries/lib-utils/) : contains color utility functions (sRGB conversions, tone mapping
* [lib-vectors.glsl](/src/pages/api/libraries/lib-vectors/) : contains common vectors helpers


Metadata
--------


You can declare additional non required information to give some hint to the
 rendering system. Here is the syntax:





```glsl
//: metadata {
 //: "key1":"value1",
 //: "key2":"value2"
 //: }
```







[ ](#section-2)

Supported keys are:


* **custom-ui**: Replace the standard shader parameters user interface with a custom view
 written as a QML module (see scripting documentation).
 The path can be absolute or relative to one of your shelf *custom-ui* folder.
* **mdl**: define the Iray mdl material to use with the shader.
 The path syntax is as follow: *mdl::folder1::folder2::mdl_filename::material_name*
 where *folder1::folder2::mdl_filename* is the path inside one of
 your shelf *mdl* folder to a mdl file and *::material_name* is the
 name of a material declared inside this mdl file. (ex:
 "mdl" : "mdl::alg::materials::painter::pbr::physically_metallic_roughness")


Example shaders
---------------


To better understand how to write a complete shader, here are a few examples,
 ordered by increasing complexity:


* [pixelated.glsl](/src/pages/api/shaders/pixelated/) : a pixelating shader.
* [toon.glsl](/src/pages/api/shaders/toon/) : a toon shader.
* [pbr-metal-rough.glsl](/src/pages/api/shaders/pbr-metal-rough/) : the legacy PBR shader.
* [asm-metal-rough.glsl](/src/pages/api/shaders/asm-metal-rough/) : the default PBR shader, which implements the Adobe Standard Material Definition.


Dynamic material layering
-------------------------


The Dynamic Material Layering is a specific workflow where materials are mixed together
 inside a shader and let the user dynamically edit blending masks in Substance 3D Painter.
 To enable this workflow, there are two new functionalities:


* declare editable stacks from a shader definition: [layering_declare_stacks.glsl](/src/pages/api/parameters/layering_declare_stacks/)
* bind materials as shader parameters: [layering_bind_materials.glsl](/src/pages/api/parameters/layering_bind_materials/)










