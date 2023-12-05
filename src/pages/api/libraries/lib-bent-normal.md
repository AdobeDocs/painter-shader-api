---
title: lib-bent-normal.glsl (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---













[ ](#section-0)












[ ](#section-1)

lib-bent-normal.glsl
====================


**Public Functions:**
`computeWSBentNormal`
`computeBentNormals`
`getDiffuseBentNormal`
`getBentNormalSpecularAmount`


Import from library





```glsl
import lib-normal.glsl
 
 //: param auto texture_bent_normals
 uniform SamplerSparse bent_normal_texture;
 
 //: param custom {
 //: "default": false,
 //: "label": "Enable",
 //: "group": "Geometry/Bent Normal",
 //: "description": "<html><head/><body><p>Uses the baked mesh map <b>Bent normals</b> for more accurate lighting. This is especially noticeable with metallic surfaces.</p></body></html>"
 //: }
 uniform_specialization bool use_bent_normal;
 
 //: param custom {
 //: "default": 1.0,
 //: "min": 0.0,
 //: "max": 1.0,
 //: "visible": "input.use_bent_normal",
 //: "label": "Diffuse amount",
 //: "group": "Geometry/Bent Normal",
 //: "description": "<html><head/><body><p>How much the mesh map <b>Bent normals</b> affects the diffuse reflection. E.g: A value of 0 would disregard the bent normals completely and use only the regular <b>Normals</b> mesh map.</p></body></html>"
 //: }
 uniform float bent_normal_diffuse_amount;
 
 //: param custom {
 //: "default": 1.0,
 //: "min": 0.0,
 //: "max": 1.0,
 //: "visible": "input.use_bent_normal",
 //: "label": "Specular amount",
 //: "group": "Geometry/Bent Normal",
 //: "description": "<html><head/><body><p>How much the mesh map <b>Bent normals</b> affects the specular reflection. E.g: A value of 0 would disregard the bent normals completely and use only the regular <b>Normals</b> mesh map.</p></body></html>"
 //: }
 uniform float bent_normal_specular_amount;
```







[ ](#section-2)

Helper to compute the bent normal from tangent space normal given by
 getTSNormal helpers, and local frame of the mesh.





```glsl
vec3 computeWSBentNormal(SparseCoord coord, vec3 tangent, vec3 bitangent, vec3 normal)
 {
  vec3 bent_normal_vec = getTSNormal(coord, bent_normal_texture);
  return normalize(
  bent_normal_vec.x * tangent +
  bent_normal_vec.y * bitangent +
  bent_normal_vec.z * normal
  );
 }
```







[ ](#section-3)

Compute bent normals
 Fill world space bent normal in vectors





```glsl
void computeBentNormal(inout LocalVectors vectors, V2F inputs) {
  if (use_bent_normal) {
  vectors.bent = computeWSBentNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, inputs.normal);
  }
 }
 
 vec3 getDiffuseBentNormal(LocalVectors vectors) {
  return use_bent_normal ?
  normalize(mix(vectors.normal, vectors.bent, bent_normal_diffuse_amount)) :
  vectors.normal;
 }
 
 float getBentNormalSpecularAmount() {
  return use_bent_normal ? bent_normal_specular_amount : 0.0;
 }
 
 
```






