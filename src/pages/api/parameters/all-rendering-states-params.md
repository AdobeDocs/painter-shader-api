---
title: Rendering states examples (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[\#](#section-0)












[\#](#section-1)

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







[\#](#section-2)

Backface culling
----------------


Cull back faces:





```glsl
//: state cull_face on
```







[\#](#section-3)

Draw front and back faces:





```glsl
//: state cull_face off
```







[\#](#section-4)

Blending
--------


No blending, fully opaque objects:





```glsl
//: state blend none
```







[\#](#section-5)

Standard blending mode for back to front draw order:





```glsl
//: state blend over
```







[\#](#section-6)

Standard blending mode for back to front draw order.
 Assume color is pre\-multiplied by alpha:





```glsl
//: state blend over_premult
```







[\#](#section-7)

Additive blending mode:





```glsl
//: state blend add
```







[\#](#section-8)

Multiplicative blending mode:





```glsl
//: state blend multiply
```







[\#](#section-9)

Additive and multiplicative blending mode.
 Uses dual blending. The destination color is multiplied by the second output set by *color1Output*.





```glsl
//: state blend add_multiply
```







[\#](#section-10)

Shader sampling locality
------------------------


By default, document channels are sampled using untransformed texture coordinates for rendering optimizations during painting.


If artifacts appear set the `nonlocal` state to `on`.





```glsl
//: state nonlocal on
 
 
```






