---
title: Rendering states examples (Shader API)
description: Substance 3D Shader API
keywords:
	- Creative Cloud
	- Substance 3D
	- Painter
layout: none
---




all-rendering-states-params.glsl








[ ](#section-0)












[ ](#section-1)

Rendering states examples
=========================


  



Backface culling
----------------


Cull back faces:





```glsl
//: state cull_face on
```







[ ](#section-2)

Draw front and back faces:





```glsl
//: state cull_face off
```







[ ](#section-3)

Blending
--------


No blending, fully opaque objects:





```glsl
//: state blend none
```







[ ](#section-4)

Standard blending mode for back to front draw order:





```glsl
//: state blend over
```







[ ](#section-5)

Standard blending mode for back to front draw order.
 Assume color is pre-multiplied by alpha:





```glsl
//: state blend over_premult
```







[ ](#section-6)

Additive blending mode:





```glsl
//: state blend add
```







[ ](#section-7)

Multiplicative blending mode:





```glsl
//: state blend multiply
```







[ ](#section-8)

Shader sampling locality
------------------------


By default, document channels are sampled using untransformed texture coordinates for rendering optimizations during painting.


If artifacts appear set the `nonlocal` state to `on`.





```glsl
//: state nonlocal on
 
 
```






