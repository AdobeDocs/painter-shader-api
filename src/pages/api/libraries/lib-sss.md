---
title: lib\-sss.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---




























lib\-sss.glsl
=============

---




**Public Functions:**
`getSSSCoefficients`
`getSSSColor`
`usesSSSScatteringColorChannel`


Import from library





```glsl
import lib-sampler.glsl
```









The translucency texture, used as SSS weight





```glsl
//: param auto channel_translucency
 uniform SamplerSparse sss_translucency_tex;
```









The scalar or per component (R,G \& B) SSS coefficient texture





```glsl
//: param auto channel_scattering
 uniform SamplerSparse sss_scattering_tex;
```









The scatter color texture, used as SSS albedo





```glsl
//: param auto channel_scatteringcolor
 uniform SamplerSparse sss_scatteringcolor_tex;
 
 
 //: param auto scene_original_radius
 uniform float sssSceneScale;
 
 //: param custom {
 //:   "label": "Enable",
 //:   "default": false,
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Scatters light below the surface, rather than passing straight through.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "asm": "scatter"
 //: }
 uniform_specialization bool sssEnabled;
```









Select whether the light penetrates straight through the material (translucent)
 or is diffused before starting to scatter (skin).





```glsl
//: param custom {
 //:   "default": 2,
 //:   "label": "Scattering type",
 //:   "widget": "combobox",
 //:   "values": {
 //:     "Translucent": 0,
 //:     "Skin": 1,
 //:     "Red Shift - Rayleigh": 2
 //:   },
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Skin, Translucent/Generic or Red Shift & Rayleigh controls.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled",
 //:   "asm": "_scatter_type"
 //: }
 uniform int sssType;
```









Select which channel is used for scatter color.





```glsl
//: param custom {
 //:   "default": 0,
 //:   "label": "Scatter color",
 //:   "widget": "combobox",
 //:   "values": {
 //:     "Default albedo": 0,
 //:     "ScatteringColor channel": 1
 //:   },
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Select which channel is used to define scatter color.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled",
 //:   "asm": "_scattering_color_source"
 //: }
 uniform int sssScatteringColorSource;
```









Enable subsurface weighting using translucency channel





```glsl
//: param custom {
 //:   "default": false,
 //:   "label": "Use translucency channel as scattering mask",
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Select if <b>Translucency</b> channel is used to interpolate between the scattered diffuse and the original diffuse.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled",
 //:   "asm": "_scattering_uses_translucency"
 //: }
 uniform_specialization bool sssScatteringUsesTranslucency;
```









Global scale to the subsurface scattering effect





```glsl
//: param custom {
 //:   "default": 0.5,
 //:   "label": "Scale",
 //:   "min": 0.01,
 //:   "max": 1.0,
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Controls the radius/depth of the light absorption in the material.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled",
 //:   "asm": "scatter_distance"
 //: }
 uniform float sssScale;
```









Wavelength dependency of the SSS of the material





```glsl
//: param custom {
 //:   "default": [0.701, 0.301, 0.305],
 //:   "label": "Color",
 //:   "widget": "color",
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>The color below the surface that scattered light will become.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled && (input.sssType == 0 || input.sssType == 1)"
 //: }
 uniform vec3 sssColor;
```









Red shift scattering





```glsl
//: param custom {
 //:   "default": 0.0,
 //:   "label": "Red shift",
 //:   "min": 0.0,
 //:   "max": 1.0,
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Sets red light to travel further than other light colors. Useful for skin.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled && input.sssType == 2",
 //:   "asm": "scatter_red_shift"
 //: }
 uniform float sssRedShift;
```









Rayleigh scattering





```glsl
//: param custom {
 //:   "default": 0.0,
 //:   "label": "Rayleigh",
 //:   "min": 0.0,
 //:   "max": 1.0,
 //:   "group": "Interior/Subsurface Scattering Parameters",
 //:   "description": "<html><head/><body><p>Sets orange light to travel further beneath the surface and blue light to travel less.<br/><b>Please note</b>: <b>Activate Subsurface Scattering</b> needs to be enabled in <b>Display Settings</b> and the following channel needs to be present for the subsurface scattering parameters to have an effect: <b>Scattering</b></p></body></html>",
 //:   "visible": "input.sssEnabled && input.sssType == 2",
 //:   "asm": "scatter_rayleigh"
 //: }
 uniform float sssRayleigh;
```









Return the material SSS coefficients from scattering value (per component)





```glsl
vec4 getSSSCoefficients(vec3 scattering) {
 	vec4 coeffs = vec4(0.0);
 	if (sssEnabled) {
 		coeffs.xyz = sssScale / sssSceneScale * scattering;
 		coeffs.w = coeffs.xyz==vec3(0.0) ? 0.0 : 1.0;
 		// sssColor still applied here: do not break project that use
 		// stored shader fallbacks (in case of compilation error)
 		if (sssType != 2) {
 			coeffs.xyz *= sssColor;
 		}
 	}
 	return coeffs;
 }
```









Return the material SSS coefficients
 Computed from SSS uniforms and Scattering channel sampling





```glsl
vec4 getSSSCoefficients(SparseCoord coord) {
 	if (sssEnabled) {
 		return getSSSCoefficients(getScatteringPerComponent(sss_scattering_tex, coord));
 	}
 	return vec4(0.0);
 }
```









Return the material SSS color from scatter color and weight (translucency)





```glsl
vec4 getSSSColor(vec3 color, float weight) {
 	return vec4(color,weight);
 }
```









Return the material SSS color and weight (translucency)
 Sample into the ScatteringColor and Translucency channels





```glsl
vec4 getSSSColor(SparseCoord coord) {
 	if (sssEnabled) {
 		return getSSSColor(
 			sssScatteringColorSource==1 ? getScatteringColor(sss_scatteringcolor_tex, coord) : vec3(1.0),
 			sssScatteringUsesTranslucency ? getTranslucency(sss_translucency_tex, coord) : 1.0);
 	}
 	return vec4(0.0);
 }
```









Return if SSS ScatteringColor channel is used for scatter color





```glsl
bool usesSSSScatteringColorChannel() {
 	return sssEnabled && sssScatteringColorSource==1;
 }
 
 
```






