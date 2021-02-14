module.exports = {
  siteMetadata: {
    title: `Janelle's Blog`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Janelle Burt`,
    contact: {
      name: `Janelle Burt`,
      company: `Blogs Inc.`,
      address: `PO Box 1234`
    }
  },
 
  plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `9xwdwlmbqc24`,
      accessToken: `CmCUUWeaTL1poJ19WA8CByjAfr0_g6jplz6tlBKBrdk`
    }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}