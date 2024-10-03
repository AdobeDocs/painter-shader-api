---
title: Rendering states examples (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























Rendering states examples
=========================

---




  



Enable syntax
-------------


Rendering states can be conditionally enabled using value of any specialized uniform.
 Simply write an expression resulting in a boolean in the `enable` parameter.
 Acces other parameters values with `input.parameterName` syntax.
 Consider the following example where additive blending mode is enabled only when `param1` is less than 5\.
 For more examples and exhaustive syntax, please see the
 [Substance Visible If documentation](https://www.adobe.com/go/painter-visible-display-hide-inputs-outputs).





```glsl
uniform_specialization  int u_slider_param1;
 //: state blend add { "enable" : "input.u_slider_param1 < 5" }
```









Backface culling
----------------


Cull back faces:





```glsl
//: state cull_face on
```









Draw front and back faces:





```glsl
//: state cull_face off
```









Blending
--------


No blending, fully opaque objects:





```glsl
//: state blend none
```









Standard blending mode for back to front draw order:





```glsl
//: state blend over
```









Standard blending mode for back to front draw order.
 Assume color is pre\-multiplied by alpha:





```glsl
//: state blend over_premult
```









Additive blending mode:





```glsl
//: state blend add
```









Multiplicative blending mode:





```glsl
//: state blend multiply
```









Additive and multiplicative blending mode.
 Uses dual blending. The destination color is multiplied by the second output set by *color1Output*.





```glsl
//: state blend add_multiply
```









Shader sampling locality
------------------------


By default, document channels are sampled using untransformed texture coordinates for rendering optimizations during painting.


If artifacts appear set the `nonlocal` state to `on`.





```glsl
//: state nonlocal on
 
 
```






