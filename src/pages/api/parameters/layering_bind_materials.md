---
title: Material layering: bind materials as shader parameters (Shader API)
description: Substance 3D Shader API
keywords:
	- Creative Cloud
	- Substance 3D
	- Painter
layout: none
---




layering_bind_materials.glsl








[ ](#section-0)












[ ](#section-1)

Material layering: bind materials as shader parameters
======================================================


A material is defined by a unique identifier 'id'. Additional parameters:


* 'default': the default material resource name to be used.
* 'size': the texture size of the material maps.
* 'group': the UI group of the material selection widget.


Example:





```glsl
//: materials [
 //: {
 //: "id": "Material1",
 //: "default": "Concrete 044",
 //: "size": 512,
 //: "group": "Material 1"
 //: }, {
 //: "id": "Material2",
 //: "default": "Leaves elm",
 //: "size": 1024,
 //: "group": "Material 2"
 //: }
 //: ]
```







[ ](#section-2)

To bind a channel from a material to a sampler, define an auto param with the id of the material
 followed by the channel tag (see the available channels in [all-engine-params.glsl](/api/parameters/all-engine-params.html)):





```glsl
//: param auto Material1.channel_basecolor
 uniform sampler2D basecolor_tex1;
 //: param auto Material1.channel_metallic
 uniform sampler2D metallic_tex1;
 //: param auto Material1.channel_roughness
 uniform sampler2D roughness_tex1;
 
 //: param auto Material2.channel_basecolor
 uniform sampler2D basecolor_tex2;
 //: param auto Material2.channel_metallic
 uniform sampler2D metallic_tex2;
 //: param auto Material2.channel_roughness
 uniform sampler2D roughness_tex2;
 
 
```






