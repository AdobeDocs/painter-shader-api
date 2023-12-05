---
title: Custom parameters sample shader (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)




<CodeBlock languages="glsl"/>








[ ](#section-1)

Custom parameters sample shader
===============================


**Please note that all custom tweaks need at least a `default` value.**


Group your parameters by adding a `group` value.


Dynamically hide a parameter in the UI by setting `visible` value.


Add a tooltip on the parameter by setting a `description` value.


Visible value
-------------


One can hide or show the parameter in the UI, depending on other parameters values.
 Simply write an expression resulting in a boolean in the `visible` parameter.
 Acces other parameters values with `input.parameterName` syntax.
 Consider the following example where `param2` is visible to the user only when `param1` is less than 5.
 For more examples and exhaustive syntax, please see the
 [Substance Visible If documentation](https://www.adobe.com/go/painter-visible-display-hide-inputs-outputs).





<CodeBlock languages="glsl"/>
```glsl
//: param custom { "default": 0, "label": "Int slider", "min": 0, "max": 10 }
 uniform int u_slider_param1;
 //: param custom { "default": 0, "label": "Optional int spinbox", "visible" : "input.u_slider_param1 < 5" }
 uniform int u_spin_param2;
```







[ ](#section-2)

Color parameters
----------------





<CodeBlock languages="glsl"/>
```glsl
//: param custom { "default": 0, "label": "Color RGB", "widget": "color" }
 uniform vec3 u_color_float3;
 //: param custom { "default": 1, "label": "Color RGBA", "widget": "color" }
 uniform vec4 u_color_float4;
```







[ ](#section-3)

Spinboxes parameters
--------------------





<CodeBlock languages="glsl"/>
```glsl
//: param custom { "default": 0, "label": "Int spinbox" }
 uniform int u_spin_int1;
 //: param custom { "default": 0, "label": "Int2 spinbox" }
 uniform ivec2 u_spin_int2;
 //: param custom { "default": 0, "label": "Int3 spinbox" }
 uniform ivec3 u_spin_int3;
 //: param custom { "default": 0, "label": "Int4 spinbox" }
 uniform ivec4 u_spin_int4;
 //: param custom { "default": 0, "label": "Float spinbox" }
 uniform float u_spin_float1;
 //: param custom { "default": 0, "label": "Float2 spinbox" }
 uniform vec2 u_spin_float2;
 //: param custom { "default": 0, "label": "Float3 spinbox" }
 uniform vec3 u_spin_float3;
 //: param custom { "default": 0, "label": "Float4 spinbox" }
 uniform vec4 u_spin_float4;
```







[ ](#section-4)

Slider parameters
-----------------





<CodeBlock languages="glsl"/>
```glsl
//: param custom { "default": 0, "label": "Int slider", "min": 0, "max": 10 }
 uniform int u_slider_int1;
 //: param custom { "default": 0, "label": "Int slider", "min": 0, "max": 10, "step": 2 }
 uniform int u_slider_int1_stepped;
 //: param custom { "default": 0, "label": "Int2 slider", "min": 0, "max": 10 }
 uniform ivec2 u_slider_int2;
 //: param custom { "default": 0, "label": "Int3 slider", "min": 0, "max": 10 }
 uniform ivec3 u_slider_int3;
 //: param custom { "default": 0, "label": "Int4 slider", "min": 0, "max": 10 }
 uniform ivec4 u_slider_int4;
 //: param custom { "default": 0, "label": "Float slider", "min": 0.0, "max": 1.0 }
 uniform float u_slider_float1;
 //: param custom { "default": 0, "label": "Float2 slider", "min": 0.0, "max": 1.0 }
 uniform vec2 u_slider_float2;
 //: param custom { "default": [0.2, 0.5, 0.8], "label": "Float3 slider", "min": 0.0, "max": 1.0 }
 uniform vec3 u_slider_float3;
 //: param custom { "default": 0, "label": "Float4 slider", "min": 0.0, "max": 1.0, "step": 0.02 }
 uniform vec4 u_slider_float4_stepped;
```







[ ](#section-5)

Bool parameters
---------------





<CodeBlock languages="glsl"/>
```glsl
//: param custom { "default": false, "label": "Boolean" }
 uniform bool u_bool;
```







[ ](#section-6)

Sampler parameters
------------------


The texture is defined by its name in the shelf and must be in the `Textures` or `Environments` category.





<CodeBlock languages="glsl"/>
```glsl
//: param custom { "default": "", "default_color": [1.0, 1.0, 0.0, 1.0], "label": "Texture" }
 uniform sampler2D u_sampler1;
 //: param custom { "default": "texture_name", "label": "Texture" }
 uniform sampler2D u_sampler2;
 //: param custom { "default": "texture_name", "label": "Texture", "usage": "texture" }
 uniform sampler2D u_sampler3;
 //: param custom { "default": "texture_name", "label": "Texture", "usage": "environment" }
 uniform sampler2D u_sampler4;
```







[ ](#section-7)

Combobox parameters
-------------------





<CodeBlock languages="glsl"/>
```glsl
//: param custom {
 //: "default": -1,
 //: "label": "Combobox",
 //: "widget": "combobox",
 //: "values": {
 //: "Value -1": -1,
 //: "Value 0": 0,
 //: "Value 10": 10
 //: }
 //: }
 uniform int u_combobox;
```







[ ](#section-8)

Shader entry point





<CodeBlock languages="glsl"/>
```glsl
vec4 shade(V2F inputs)
 {
  // We simply return the value of the RGB color picker
  return vec4(u_color_float3, 1.0);
 }
 
 
```






