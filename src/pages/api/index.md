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


* [Full changelog file](/api/changelog.html)


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


* [surface-shader.glsl](/api/shaders/surface-shader.html)


Engine provided data
--------------------


In Substance 3D Painter, you can access rendering engine parameters (document's channels,
 additional textures, camera-related data and the like). Here is an exhaustive list of all
 engine provided parameters :


* [all-engine-params.glsl](/api/parameters/all-engine-params.html)


Engine settings
---------------


In some cases you may want to use a specific rendering configuration (culling, blending,
 sampling locality, and the like) for an effect. Some rendering states are exposed and
 can be set in the shader. Here is an exhaustive list of all exposed rendering states :


* [all-rendering-states-params.glsl](/api/parameters/all-rendering-states-params.html)


Custom tweaks
-------------


It's usual to have custom tweaks in a shader. To do so in Substance 3D Painter's shaders,
 we have introduced a way to specify custom tweaks. Here is an exhaustive list of all custom
 shader tweaks types :


* [all-custom-params.glsl](/api/parameters/all-custom-params.html)


Custom qualifiers
-----------------


Beside regular GLSL qualifiers, we added a custom *uniform_specialization* qualifier that
 can be used as drop-in replacement of *uniform* to optimize uber shaders :


* [all-custom-qualifiers.glsl](/api/parameters/all-custom-qualifiers.html)


Embedded libraries
------------------


In order to avoid writing a lot of boilerplate code in all of your shaders,
 we created a small yet practical library of useful functions. **Please note that
 you can't edit it nor create your own at the moment.**


* [lib-alpha.glsl](/api/libraries/lib-alpha.html) : contains opacity related helpers
* [lib-bayer.glsl](/api/libraries/lib-bayer.html) : contains bayer matrix helpers
* [lib-bent-normal.glsl](/api/libraries/lib-bent-normal.html) : contains bent normal helpers
* [lib-coat.glsl](/api/libraries/lib-coat.html) : contains coating layer helpers
* [lib-defines.glsl](/api/libraries/lib-defines.html) : contains useful math constants and base defines
* [lib-emissive.glsl](/api/libraries/lib-emissive.html) : contains emissive properties helpers
* [lib-env.glsl](/api/libraries/lib-env.html) : contains environment map related helpers
* [lib-normal.glsl](/api/libraries/lib-normal.html) : contains normal map related helpers (and height-map generated normal map
* [lib-pbr.glsl](/api/libraries/lib-pbr.html) : contains physically based rendering helpers
* [lib-pbr-aniso.glsl](/api/libraries/lib-pbr-aniso.html) : contains anisotropic physically based rendering helpers
* [lib-pom.glsl](/api/libraries/lib-pom.html) : contains parallax occlusion mapping helpers
* [lib-random.glsl](/api/libraries/lib-random.html) : contains random utilities (low discrepancy sequences
* [lib-sampler.glsl](/api/libraries/lib-sampler.html) : contains channel getters helpers
* [lib-sheen.glsl](/api/libraries/lib-sheen.html) : contains sheen model reflection helpers
* [lib-sparse.glsl](/api/libraries/lib-sparse.html) : contains safe sparse texture sampling helpers
* [lib-sss.glsl](/api/libraries/lib-sss.html) : contains subsurface scattering helpers
* [lib-utils.glsl](/api/libraries/lib-utils.html) : contains color utility functions (sRGB conversions, tone mapping
* [lib-vectors.glsl](/api/libraries/lib-vectors.html) : contains common vectors helpers


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


* [pixelated.glsl](/api/shaders/pixelated.html) : a pixelating shader.
* [toon.glsl](/api/shaders/toon.html) : a toon shader.
* [pbr-metal-rough.glsl](/api/shaders/pbr-metal-rough.html) : the legacy PBR shader.
* [asm-metal-rough.glsl](/api/shaders/asm-metal-rough.html) : the default PBR shader, which implements the Adobe Standard Material Definition.


Dynamic material layering
-------------------------


The Dynamic Material Layering is a specific workflow where materials are mixed together
 inside a shader and let the user dynamically edit blending masks in Substance 3D Painter.
 To enable this workflow, there are two new functionalities:


* declare editable stacks from a shader definition: [layering_declare_stacks.glsl](/api/parameters/layering_declare_stacks.html)
* bind materials as shader parameters: [layering_bind_materials.glsl](/api/parameters/layering_bind_materials.html)










