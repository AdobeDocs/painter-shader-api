---
title: Utility functions (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























Utility functions
=================

---




Tone mapping
------------


These are examples of tone mapping you can use in your shader. Painter doesn't apply any
 tone mapping except the optional one applied by Yebis. If you decide to do some tone mapping
 in your shader, it will be applied before Yebis tone mapping.


Perform the S\-curve tone mapping based on the parameters sigma and n.





```glsl
vec3 tonemapSCurve(vec3 value, float sigma, float n)
 {
   vec3 pow_value = pow(value, vec3(n));
   return pow_value / (pow_value + pow(sigma, n));
 }
```









sRGB conversions
----------------


These are the conversions used in Painter.


sRGB to linear color conversion. Scalar version.





```glsl
float sRGB2linear(float x)
 {
   return x <= 0.04045 ?
     x * 0.0773993808 : // 1.0/12.92
     pow((x + 0.055) / 1.055, 2.4);
 }
```









sRGB to linear color conversion. RGB version.





```glsl
vec3 sRGB2linear(vec3 rgb)
 {
   return vec3(
     sRGB2linear(rgb.r),
     sRGB2linear(rgb.g),
     sRGB2linear(rgb.b));
 }
```









sRGB to linear color conversion. RGB \+ Alpha version.





```glsl
vec4 sRGB2linear(vec4 rgba)
 {
   return vec4(sRGB2linear(rgba.rgb), rgba.a);
 }
```









Linear to sRGB color conversion. Scalar version.





```glsl
float linear2sRGB(float x)
 {
   return x <= 0.0031308 ?
       12.92 * x :
       1.055 * pow(x, 0.41666) - 0.055;
 }
```









Linear to sRGB color conversion. RGB version.





```glsl
vec3 linear2sRGB(vec3 rgb)
 {
   return vec3(
       linear2sRGB(rgb.r),
       linear2sRGB(rgb.g),
       linear2sRGB(rgb.b));
 }
```









Linear to sRGB color conversion. RGB \+ Alpha version.





```glsl
vec4 linear2sRGB(vec4 rgba)
 {
   return vec4(linear2sRGB(rgba.rgb), rgba.a);
 }
```









Linear to sRGB color conversion optional. Scalar version.





```glsl
//: param auto conversion_linear_to_srgb
 uniform bool convert_to_srgb_opt;
 float linear2sRGBOpt(float x)
 {
   return convert_to_srgb_opt ? linear2sRGB(x) : x;
 }
```









Linear to sRGB color conversion optional. RGB version.





```glsl
vec3 linear2sRGBOpt(vec3 rgb)
 {
   return convert_to_srgb_opt ? linear2sRGB(rgb) : rgb;
 }
```









Linear to sRGB color conversion optional. RGB \+ Alpha version.





```glsl
vec4 linear2sRGBOpt(vec4 rgba)
 {
   return convert_to_srgb_opt ? linear2sRGB(rgba) : rgba;
 }
```









Color conversion. Scalar version.





```glsl
uniform int output_conversion_method;
 float convertOutput(float x)
 {
 	if (output_conversion_method == 0) return x;
 	else if (output_conversion_method == 1) return linear2sRGB(x);
 	else return sRGB2linear(x);
 }
```









Color conversion. RGB version.





```glsl
vec3 convertOutput(vec3 rgb)
 {
 	if (output_conversion_method == 0) return rgb;
 	else if (output_conversion_method == 1) return linear2sRGB(rgb);
 	else return sRGB2linear(rgb);
 }
```









Color conversion. RGB \+ Alpha version.





```glsl
vec4 convertOutput(vec4 rgba)
 {
 	if (output_conversion_method == 0) return rgba;
 	else if (output_conversion_method == 1) return linear2sRGB(rgba);
 	else return sRGB2linear(rgba);
 }
```









Dithering
---------


These are some helpers to add dithering to shaders.


Use 8x8 Bayer matrix for dithering mode





```glsl
import lib-bayer.glsl
 
 float getDitherThreshold(uvec2 coords)
 {
   return bayerMatrix8(coords);
 }
 
 
 vec4 RGB2Gray(vec4 rgba)
 {
   float gray = 0.299 * rgba.r + 0.587 * rgba.g + 0.114 * rgba.b;
   return vec4(vec3(gray), rgba.a);
 }
```









Remove AO and shadows on glossy metallic surfaces (close to mirrors)





```glsl
float specularOcclusionCorrection(float diffuseOcclusion, float metallic, float roughness)
 {
   return mix(diffuseOcclusion, 1.0, metallic * (1.0 - roughness) * (1.0 - roughness));
 }
 
 
```






