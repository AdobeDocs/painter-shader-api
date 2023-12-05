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
        title: 'Guides',
        path: '/guides/'
      },
      {
        title: 'API Reference',
        path: '/api/'
      },
      {
        title: 'Support',
        path: 'https://community.adobe.com/t5/substance-3d-painter/ct-p/ct-substance-3d-painter'
      }
    ],
    subPages: [
		{
			title: "Guides",
			header: true,
			path: ""
		},
		{
			title: "Shader API",
			header: true,
			path: "",
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
					path: "/api/libraries/",
				},
				{
					title : "Parameters",
					path: "/api/parameters/",
				},
				{
					title : "Shaders",
					path: "/api/shaders/",
				}
			]
		},
	]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
