"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[558],{98423:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return i}});var t=a(87462),o=a(63366),r=(a(15007),a(64983)),l=a(91515),m=["components"],p={},c={_frontmatter:p},s=l.Z;function i(e){var n=e.components,a=(0,o.Z)(e,m);return(0,r.mdx)(s,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-0"}," ")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-1"}," ")),(0,r.mdx)("p",null,"================"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Public Functions:"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"computeLocalFrame"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"getEyeVec"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"tangentSpaceToWorldSpace"),"\n",(0,r.mdx)("inlineCode",{parentName:"p"},"worldSpaceToTangentSpace")),(0,r.mdx)("p",null,"Import from library"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-2"}," ")),(0,r.mdx)("p",null,"Which view is shaded."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto is_2d_view\n uniform bool is2DView;\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-3"}," ")),(0,r.mdx)("p",null,"What kind of projection is used."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto is_perspective_projection\n uniform bool is_perspective;\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-4"}," ")),(0,r.mdx)("p",null,"Eye position in world space."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto world_eye_position\n uniform vec3 camera_pos;\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-5"}," ")),(0,r.mdx)("p",null,"Camera orientation in world space."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"//: param auto world_camera_direction\n uniform vec3 camera_dir;\n \n //: param auto facing\n uniform int facing;\n \n bool isBackFace() {\n  return facing == -1 || (facing == 0 && !gl_FrontFacing);\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-6"}," ")),(0,r.mdx)("p",null,"Compute the world space eye vector"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 getEyeVec(vec3 position) {\n  return is_perspective ?\n  normalize(camera_pos - position) :\n  -camera_dir;\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-7"}," ")),(0,r.mdx)("p",null,"Convert a vector from tangent space to world space"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 tangentSpaceToWorldSpace(vec3 vecTS, V2F inputs) {\n  return normalize(\n  vecTS.x * inputs.tangent +\n  vecTS.y * inputs.bitangent +\n  vecTS.z * inputs.normal);\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-8"}," ")),(0,r.mdx)("p",null,"Convert a vector from world space to tangent space"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"vec3 worldSpaceToTangentSpace(vec3 vecWS, V2F inputs) {\n  // Assume the transformation is orthogonal\n  return normalize(vecWS * mat3(inputs.tangent, inputs.bitangent, inputs.normal));\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-9"}," ")),(0,r.mdx)("p",null,"Local frame of vertex in world space"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"struct LocalVectors {\n  vec3 vertexNormal;\n  vec3 tangent, bitangent, normal, eye, bent;\n };\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-10"}," ")),(0,r.mdx)("p",null,"Compute local frame from custom world space normal and anisotropy angle"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"LocalVectors computeLocalFrame(V2F inputs, vec3 normal, float anisoAngle) {\n  LocalVectors vectors;\n  vectors.vertexNormal = inputs.normal;\n  vectors.normal = normal;\n  vectors.bent = vec3(0.0);\n \n  // Flip the normals for back facing polygons\n  if (isBackFace()) {\n  vectors.vertexNormal = -vectors.vertexNormal;\n  vectors.normal = -vectors.normal;\n  }\n \n  vectors.eye = is2DView ?\n  vectors.normal : // In 2D view, put view vector along the normal\n  getEyeVec(inputs.position);\n \n  // Trick to remove black artifacts\n  // Backface ? place the eye at the opposite - removes black zones\n  if (dot(vectors.eye, vectors.normal) < 0.0) {\n  vectors.eye = reflect(vectors.eye, vectors.normal);\n  }\n \n  // Create a local frame for BRDF work\n  vec3 tangent = normalize(\n  inputs.tangent\n  - vectors.normal * dot(inputs.tangent, vectors.normal)\n  );\n  vec3 bitangent = normalize(\n  inputs.bitangent\n  - vectors.normal * dot(inputs.bitangent, vectors.normal)\n  - tangent * dot(inputs.bitangent, tangent)\n  );\n \n  float cosAngle = cos(anisoAngle);\n  float sinAngle = sin(anisoAngle);\n  vectors.tangent = cosAngle * tangent - sinAngle * bitangent;\n  vectors.bitangent = cosAngle * bitangent + sinAngle * tangent;\n \n  return vectors;\n }\n")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"#section-11"}," ")),(0,r.mdx)("p",null,"Compute local frame from mesh and document height and normals"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-glsl"},"LocalVectors computeLocalFrame(V2F inputs) {\n  // Get world space normal\n  vec3 normal = computeWSNormal(inputs.sparse_coord, inputs.tangent, inputs.bitangent, inputs.normal);\n  return computeLocalFrame(inputs, normal, 0.0);\n }\n \n \n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-libraries-lib-vectors-md-84bc84aec1995db6a64d.js.map