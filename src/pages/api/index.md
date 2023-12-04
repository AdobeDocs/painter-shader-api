



index.glsl








[ ](#section-0)

Shader reference
================


Changelog
---------


* [Full changelog file](/changelog.md)


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


* [surface-shader.glsl](/shaders/surface-shader.md)


Engine provided data
--------------------


In Substance 3D Painter, you can access rendering engine parameters (document's channels,
 additional textures, camera-related data and the like). Here is an exhaustive list of all
 engine provided parameters :


* [all-engine-params.glsl](/parameters/all-engine-params.md)


Engine settings
---------------


In some cases you may want to use a specific rendering configuration (culling, blending,
 sampling locality, and the like) for an effect. Some rendering states are exposed and
 can be set in the shader. Here is an exhaustive list of all exposed rendering states :


* [all-rendering-states-params.glsl](/parameters/all-rendering-states-params.md)


Custom tweaks
-------------


It's usual to have custom tweaks in a shader. To do so in Substance 3D Painter's shaders,
 we have introduced a way to specify custom tweaks. Here is an exhaustive list of all custom
 shader tweaks types :


* [all-custom-params.glsl](/parameters/all-custom-params.md)


Custom qualifiers
-----------------


Beside regular GLSL qualifiers, we added a custom *uniform_specialization* qualifier that
 can be used as drop-in replacement of *uniform* to optimize uber shaders :


* [all-custom-qualifiers.glsl](/parameters/all-custom-qualifiers.md)


Embedded libraries
------------------


In order to avoid writing a lot of boilerplate code in all of your shaders,
 we created a small yet practical library of useful functions. **Please note that
 you can't edit it nor create your own at the moment.**


* [lib-alpha.glsl](/libraries/lib-alpha.md) : contains opacity related helpers
* [lib-bayer.glsl](/libraries/lib-bayer.md) : contains bayer matrix helpers
* [lib-bent-normal.glsl](/libraries/lib-bent-normal.md) : contains bent normal helpers
* [lib-coat.glsl](/libraries/lib-coat.md) : contains coating layer helpers
* [lib-defines.glsl](/libraries/lib-defines.md) : contains useful math constants and base defines
* [lib-emissive.glsl](/libraries/lib-emissive.md) : contains emissive properties helpers
* [lib-env.glsl](/libraries/lib-env.md) : contains environment map related helpers
* [lib-normal.glsl](/libraries/lib-normal.md) : contains normal map related helpers (and height-map generated normal map
* [lib-pbr.glsl](/libraries/lib-pbr.md) : contains physically based rendering helpers
* [lib-pbr-aniso.glsl](/libraries/lib-pbr-aniso.md) : contains anisotropic physically based rendering helpers
* [lib-pom.glsl](/libraries/lib-pom.md) : contains parallax occlusion mapping helpers
* [lib-random.glsl](/libraries/lib-random.md) : contains random utilities (low discrepancy sequences
* [lib-sampler.glsl](/libraries/lib-sampler.md) : contains channel getters helpers
* [lib-sheen.glsl](/libraries/lib-sheen.md) : contains sheen model reflection helpers
* [lib-sparse.glsl](/libraries/lib-sparse.md) : contains safe sparse texture sampling helpers
* [lib-sss.glsl](/libraries/lib-sss.md) : contains subsurface scattering helpers
* [lib-utils.glsl](/libraries/lib-utils.md) : contains color utility functions (sRGB conversions, tone mapping
* [lib-vectors.glsl](/libraries/lib-vectors.md) : contains common vectors helpers


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


* [pixelated.glsl](/shaders/pixelated.md) : a pixelating shader.
* [toon.glsl](/shaders/toon.md) : a toon shader.
* [pbr-metal-rough.glsl](/shaders/pbr-metal-rough.md) : the legacy PBR shader.
* [asm-metal-rough.glsl](/shaders/asm-metal-rough.md) : the default PBR shader, which implements the Adobe Standard Material Definition.


Dynamic material layering
-------------------------


The Dynamic Material Layering is a specific workflow where materials are mixed together
 inside a shader and let the user dynamically edit blending masks in Substance 3D Painter.
 To enable this workflow, there are two new functionalities:


* declare editable stacks from a shader definition: [layering_declare_stacks.glsl](/parameters/layering_declare_stacks.md)
* bind materials as shader parameters: [layering_bind_materials.glsl](/parameters/layering_bind_materials.md)










