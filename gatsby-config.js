/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/dev-site-documentation-template/',
  siteMetadata: {
    pages: [
      {
        title: 'Shader API',
        path: '/'
      },
      {
        title: 'API Reference',
        path: '/api/'
      },
      {
        title: 'Documentation',
        path: 'https://helpx.adobe.com/substance-3d-painter/home.html'
      },
      {
        title: 'Support',
        path: 'https://community.adobe.com/t5/substance-3d-painter/ct-p/ct-substance-3d-painter'
      }
    ],
	home: {
	  title: 'Painter',
	  path: 'https://www.adobe.com/products/substance3d-painter.html'
	},
    subPages: [
		{
			title: "Shader API",
			header: true,
			path: "/api/",
			pages: [
				{
					title : "Home",
					path: "/api/",
				},
				{
					title : "Changelog",
					path: "/api/changelog/",
				},
{
	title : "Libraries",
	path : "/api/libraries/",
pages: [	{
		title : "lib-alpha-test",
		path : "/api/libraries/lib-alpha-test/"
	},
	{
		title : "lib-alpha",
		path : "/api/libraries/lib-alpha/"
	},
	{
		title : "lib-bayer",
		path : "/api/libraries/lib-bayer/"
	},
	{
		title : "lib-bent-normal",
		path : "/api/libraries/lib-bent-normal/"
	},
	{
		title : "lib-coat",
		path : "/api/libraries/lib-coat/"
	},
	{
		title : "lib-defines",
		path : "/api/libraries/lib-defines/"
	},
	{
		title : "lib-emissive",
		path : "/api/libraries/lib-emissive/"
	},
	{
		title : "lib-env",
		path : "/api/libraries/lib-env/"
	},
	{
		title : "lib-normal",
		path : "/api/libraries/lib-normal/"
	},
	{
		title : "lib-pbr-aniso",
		path : "/api/libraries/lib-pbr-aniso/"
	},
	{
		title : "lib-pbr",
		path : "/api/libraries/lib-pbr/"
	},
	{
		title : "lib-pom",
		path : "/api/libraries/lib-pom/"
	},
	{
		title : "lib-random",
		path : "/api/libraries/lib-random/"
	},
	{
		title : "lib-sampler",
		path : "/api/libraries/lib-sampler/"
	},
	{
		title : "lib-sheen",
		path : "/api/libraries/lib-sheen/"
	},
	{
		title : "lib-sparse",
		path : "/api/libraries/lib-sparse/"
	},
	{
		title : "lib-sss",
		path : "/api/libraries/lib-sss/"
	},
	{
		title : "lib-utils",
		path : "/api/libraries/lib-utils/"
	},
	{
		title : "lib-vectors",
		path : "/api/libraries/lib-vectors/"
	},
	]
},
{
	title : "Parameters",
	path : "/api/parameters/",
pages: [	{
		title : "all-custom-params",
		path : "/api/parameters/all-custom-params/"
	},
	{
		title : "all-custom-qualifiers",
		path : "/api/parameters/all-custom-qualifiers/"
	},
	{
		title : "all-engine-params",
		path : "/api/parameters/all-engine-params/"
	},
	{
		title : "all-rendering-states-params",
		path : "/api/parameters/all-rendering-states-params/"
	},
	{
		title : "layering_bind_materials",
		path : "/api/parameters/layering_bind_materials/"
	},
	{
		title : "layering_declare_stacks",
		path : "/api/parameters/layering_declare_stacks/"
	},
	]
},
{
	title : "Shaders",
	path : "/api/shaders/",
pages: [	{
		title : "asm-metal-rough",
		path : "/api/shaders/asm-metal-rough/"
	},
	{
		title : "clay",
		path : "/api/shaders/clay/"
	},
	{
		title : "dota-2",
		path : "/api/shaders/dota-2/"
	},
	{
		title : "non-pbr-spec-gloss",
		path : "/api/shaders/non-pbr-spec-gloss/"
	},
	{
		title : "pbr-car-paint",
		path : "/api/shaders/pbr-car-paint/"
	},
	{
		title : "pbr-coated",
		path : "/api/shaders/pbr-coated/"
	},
	{
		title : "pbr-material-layering-10-mats",
		path : "/api/shaders/pbr-material-layering-10-mats/"
	},
	{
		title : "pbr-material-layering",
		path : "/api/shaders/pbr-material-layering/"
	},
	{
		title : "pbr-metal-rough-anisotropy-angle",
		path : "/api/shaders/pbr-metal-rough-anisotropy-angle/"
	},
	{
		title : "pbr-metal-rough-with-alpha-blending",
		path : "/api/shaders/pbr-metal-rough-with-alpha-blending/"
	},
	{
		title : "pbr-metal-rough-with-alpha-test",
		path : "/api/shaders/pbr-metal-rough-with-alpha-test/"
	},
	{
		title : "pbr-metal-rough",
		path : "/api/shaders/pbr-metal-rough/"
	},
	{
		title : "pbr-spec-gloss",
		path : "/api/shaders/pbr-spec-gloss/"
	},
	{
		title : "pbr-velvet",
		path : "/api/shaders/pbr-velvet/"
	},
	{
		title : "pixelated",
		path : "/api/shaders/pixelated/"
	},
	{
		title : "surface-shader",
		path : "/api/shaders/surface-shader/"
	},
	{
		title : "toon",
		path : "/api/shaders/toon/"
	},
	{
		title : "vraymtl-metallic",
		path : "/api/shaders/vraymtl-metallic/"
	},
	{
		title : "vraymtl-specular",
		path : "/api/shaders/vraymtl-specular/"
	},
	]
},

			]
		},
	]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
