



surface-shader.glsl








[ ](#section-0)












[ ](#section-1)

surface-shader.glsl
===================


To create a shader resource that can be used in Substance 3D Painter, just create a glsl file containing a single
 function called *shade* with the following profile:





```glsl
void shade(V2F inputs);
```







[ ](#section-2)

V2F input type definition:
--------------------------





```glsl
struct V2F {
  vec3 normal; // interpolated normal
  vec3 tangent; // interpolated tangent
  vec3 bitangent; // interpolated bitangent
  vec3 position; // interpolated position
  vec4 color[1]; // interpolated vertex colors (color0)
  vec2 tex_coord; // interpolated texture coordinates (uv0)
  SparseCoord sparse_coord; // interpolated sparse texture coordinates used by textureSparse() sampling function
  vec2 multi_tex_coord[8]; // interpolated texture coordinates (uv0-uv7)
 };
```







[ ](#section-3)

Note: To obtain a SparseCoord for uv1-uv7, you have to explicitly call `getSparseCoord(vec2)` defined in [lib-sparse.glsl](/api/libraries/lib-sparse.html)


Surface shader outputs:
-----------------------


The following functions can be called from within the *shade* function to describe fragment properties:





```glsl
// fragment opacity. default value: 1.0
 void alphaOutput(float);
 // diffuse lighting contribution. default value: vec3(0.0)
 void diffuseShadingOutput(vec3);
 // specular lighting contribution. default value: vec3(0.0)
 void specularShadingOutput(vec3);
 // color emitted by the fragment. default value: vec3(0.0)
 void emissiveColorOutput(vec3);
 // fragment color. default value: vec3(1.0)
 void albedoOutput(vec3);
 // subsurface scattering properties, see lib-sss.glsl for details. default value: vec4(0.0)
 void sssCoefficientsOutput(vec4);
```







[ ](#section-4)

As an example, the most basic rendering equation for computing the fragment color is: `emissiveColor + albedo * diffuseShading + specularShading`










