---
title: lib\-defines.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























lib\-defines.glsl
=================

---




**Public Constants:**
`M_PI`
`M_2PI`
`M_INV_PI`
`M_INV_LOG2`
`M_GOLDEN_RATIO`





```glsl
#ifndef uniform_specialization
 	#define uniform_specialization uniform
 #endif
```









Some useful constants





```glsl
const float M_PI = 3.14159265;
 const float M_2PI = 2.0 * M_PI;
 const float M_INV_PI = 0.31830988;
 const float M_INV_LOG2 = 1.442695;
 const float M_GOLDEN_RATIO = 1.618034;
```









Blending modes constants





```glsl
const int BlendingMode_Disable            =  0;
 const int BlendingMode_Replace            =  1;
 const int BlendingMode_Normal             =  2;
 const int BlendingMode_Darken             =  3;
 const int BlendingMode_Multiply           =  4;
 const int BlendingMode_ColorBurn          =  5;
 const int BlendingMode_LinearBurn         =  6;
 const int BlendingMode_Lighten            =  7;
 const int BlendingMode_Screen             =  8;
 const int BlendingMode_ColorDodge         =  9;
 const int BlendingMode_LinearDodge        = 10;
 const int BlendingMode_Overlay            = 11;
 const int BlendingMode_SoftLight          = 12;
 const int BlendingMode_HardLight          = 13;
 const int BlendingMode_VividLight         = 14;
 const int BlendingMode_LinearLight        = 15;
 const int BlendingMode_PinLight           = 16;
 const int BlendingMode_Difference         = 17;
 const int BlendingMode_Exclusion          = 18;
 const int BlendingMode_Tint               = 19;
 const int BlendingMode_Saturation         = 20;
 const int BlendingMode_Color              = 21;
 const int BlendingMode_Value              = 22;
 const int BlendingMode_Divide             = 23;
 const int BlendingMode_InverseDivide      = 24;
 const int BlendingMode_Passthru           = 25;
 const int BlendingMode_NM_Combine         = 26;
 const int BlendingMode_NM_Oriented        = 27;
 const int BlendingMode_NM_InverseOriented = 28;
 const int BlendingMode_Subtract           = 29;
 const int BlendingMode_InverseSubtract    = 30;
 const int BlendingMode_AddSub             = 31;
 
 
```






