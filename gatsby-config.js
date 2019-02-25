require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Socal Region 1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
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
        name: `socal-region-1`,
        short_name: `region1`,
        start_url: `/`,
        icon: `src/images/region1-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5dvii562wbqw`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `37edece8a4348493ecb2d21bba48b25dcd35a808d5cb9ae4aeb4ab85305eb054`,
      },
    },
  ],
};
