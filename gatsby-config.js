/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    desc: 'Nice and clean recipes site',
    author: '@john-peter',
    person: { name: 'john parker', age:32 },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'john parker', age:32 },
      { name: 'emma watson', age:30},
    ] 
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `style`,
        path: `${__dirname}/src/assets/css`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7t9lc6l153zd`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_ACCESS,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inconsolata",
              variants: ["300", "400", "500", "600", "700"],
              text: "Hello",
            },
            {
              family: "Montserrat",
              variants: ["400"],
              text: "Hello",
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
