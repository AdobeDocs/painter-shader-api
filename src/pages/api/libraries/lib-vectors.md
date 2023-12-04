---
title:  (Shader API)
description: Substance 3D Shader API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
layout: none
---













[ ](#section-0)












[ ](#section-1)


================


**Public Functions:**
`computeLocalFrame`
`getEyeVec`
`tangentSpaceToWorldSpace`
`worldSpaceToTangentSpace`


Import from library





```glsl

```







[ ](#section-2)

Which view is shaded.





```glsl
//: param auto is_2d_view
 uniform bool is2DView;
```







[ ](#section-3)

What kind of projection is used.





```glsl
//: param auto is_perspective_projection
 uniform bool is_perspective;
```







[ ](#section-4)

Eye position in world space.





```glsl
//: param auto world_eye_position
 uniform vec3 camera_pos;
```







[ ](#section-5)

Camera orientation in world space.





```glsl
//: param auto world_camera_direction
 uniform vec3 camera_dir;
 
 //: param auto facing
 uniform int facing;
 
 bool isBackFace() {
  return facing == -1 || (facing == 0 && !gl_FrontFacing);
 }
```







[ ](#section-6)

Compute the world space eye vector





```glsl
vec3 getEyeVec(vec3 position) {
  return is_perspective ?
  normalize(camera_pos - position) :
  -camera_dir;
 }
```







[ ](#section-7)

Convert a vector from tangent space to world space





```glsl
vec3 tangentSpaceToWorldSpace(vec3 vecTS, V2F inputs) {
  return normalize(
  vecTS.x * inputs.tangent +
  vecTS.y * inputs.bitangent +
  vecTS.z * inputs.normal);
 }
```







[ ](#section-8)

Convert a vector from world space to tangent space





```glsl
vec3 worldSpaceToTangentSpace(vec3 vecWS, V2F inputs) {
  // Assume the transformation is orthogonal
  return normalize(vecWS * mat3(inputs.tangent, inputs.bitangent, inputs.normal));
 }
```







[ ](#section-9)

Local frame of vertex in world space





```glsl
struct LocalVectors {
  vec3 vertexNormal;
  vec3 tangent, bitangent, normal, eye, bent;
 };
```







[ ](#section-10)

Compute local frame from custom world space normal and anisotropy angle





```glsl
LocalVectors computeLocalFrame(V2F inputs, vec3 normal, float anisoAngle) {
  LocalVectors vectors;
  vectors.vertexNormal = inputs.normal;
  vectors.normal = normal;
  vectors.bent = vec3(0.0);
 
  // Flip the normals for back facing polygons
  if (isBackFace()) {
  vectors.vertexNormal = -vectors.vertexNormal;
  vectors.normal = -vectors.normal;
  }
 
  vectors.eye = is2DView ?
  vectors.normal : // In 2D view, put view vector along the normal
  getEyeVec(inputs.position);
 
  // Trick to remove black artifacts
  // Backface ? place the eye at the opposite - removes black zones
  if (dot(vectors.eye, vectors.normal) < 0.0) {
  vectors.eye = reflect(vectors.eye, vectors.normal);
  }
 
  // Create a local frame for BRDF work
  vec3 tangent = normalize(
  inputs.tangent
  - vectors.normal * dot(inputs.tangent, vectors.normal)
  );
  vec3 bitangent = normalize(
  inputs.bitangent
  - vectors.normal * dot(inputs.bitangent, vectors.normal)
  - tangent * dot(inputs.bitangent, tangent)
  );
 
  float cosAngle = cos(anisoAngle);
  float sinAngle = sin(anisoAngle);
  vectors.tangent = cosAngle * tangent - sinAngle * bitangent;
  vectors.bitangent = cosAngle * bitangent + sinAngle * tangent;
 
  return vectors;
 }
```







[ ](#section-11)

Compute local frame from mesh and document height and normals





```glsl
LocalVectors computeLocalFrame(V2F inputs) {
  // Get world space normal
  vec3 normal = computeWSNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, inputs.normal);
  return computeLocalFrame(inputs, normal, 0.0);
 }
 
 
```






