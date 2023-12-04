



lib-bayer.glsl








[ ](#section-0)












[ ](#section-1)

lib-bayer.glsl
==============


**Public Functions:**
`bayerMatrix8`





```glsl
float bayerMatrix8(uvec2 coords) {
  return (float(bayer(coords.x, coords.y)) + 0.5) / 64.0;
 }
 
 
```






