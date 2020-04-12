module.exports = {
  siteMetadata: {
    title: 'Notes',
    author: 'ThomasMathew',
    description: 'Personal blog by Thomas Mathew.',
    siteUrl: 'https://thomas6188.github.io/notes/',
    social: {
      twitter: '@6188',
    },
  },
  pathPrefix: '/notes',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-83719221-5`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `notes`,
        short_name: `notes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#d23636`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-offline',
  ],
}
