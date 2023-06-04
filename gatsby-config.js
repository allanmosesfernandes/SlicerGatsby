/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({path: '.env' });
module.exports = {
    siteMetadata: {
    title: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.com`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [`gatsby-plugin-styled-components`,`gatsby-plugin-image`,
  {
    resolve: 'gatsby-source-sanity',
    options: {
      projectId: "iznjso6q",
      dataset: 'production',
      watchMode: true,
      token: process.env.SANITY_TOKEN,
    },
    
  },
]
}
