---
title:  (Shader API)
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


==============


**Public Functions:**
`bayerMatrix8`





<CodeBlock languages="glsl"/>
```glsl
float bayerMatrix8(uvec2 coords) {
  return (float(bayer(coords.x, coords.y)) + 0.5) / 64.0;
 }
 
 
```






