---
title: Material layering declare editable stacks (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























Material layering: declare editable stacks
==========================================

---




An editable stack is defined by a unique identifier and a list of document channels.
 Possible channel id(s) are:
 `ambientocclusion`
`anisotropyangle`
`anisotropylevel`
`basecolor`
`blendingmask`
`coatcolor`
`coatnormal`
`coatopacity`
`coatroughness`
`coatspecularlevel`
`diffuse`
`displacement`
`emissive`
`glossiness`
`height`
`ior`
`metallic`
`normal`
`opacity`
`reflection`
`roughness`
`scattering`
`scatteringcolor`
`sheencolor`
`sheenopacity`
`sheenroughness`
`specular`
`specularedgecolor`
`specularlevel`
`translucency`
`transmissive`
`user0`
`user1`
`user2`
`user3`
`user4`
`user5`
`user6`
`user7`
`user8`
`user9`
`user10`
`user11`
`user12`
`user13`
`user14`
`user15`


An optional format can be specify per channel.
 Possible formats are:
 `sRGB8`
`L8`
`RGB8`
`L16`
`RGB16`
`L16F`
`RGB16F`
`L32F`
`RGB32F`


Example:





```glsl
//:  stacks [
 //:    {
 //:      "id": "Mask1",
 //:      "channels": [
 //:        {"id": "opacity"}
 //:      ]
 //:    }, {
 //:      "id": "Mask2",
 //:      "channels": [
 //:        {"id": "opacity"},
 //:        {"id": "user0", "format": "RGB8"}
 //:      ]
 //:    }
 //:  ]
```









To bind a channel from a stack to a sampler parameter, prefix the channel tag with the stack identifier:





```glsl
//: param auto Mask1.channel_opacity
 uniform sampler2D mask_tex1;
 //: param auto Mask2.channel_opacity
 uniform sampler2D mask_tex2;
 
 
```






