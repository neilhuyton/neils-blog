module.exports = {
  siteMetadata: {
    title: "Neil Huyton - Full Stack Javascript Developer",
    description: "Fullstack Web Developer",
    url: "https://www.neilhuyton.me",
    menuLinks: [
      {
        name: "cv",
        link: "/cv",
      },
      {
        name: "projects",
        link: "/projects",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: {
                tsx: "tsx",
              },
              aliases: {},
            },
          },
        ],
        // gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
        // plugins: [{ resolve: "gatsby-remark-images" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "images",
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
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
    // {
    //   resolve: "@stackbit/gatsby-plugin-menus",
    //   options: {
    //     // the relative node path where we can find the 'menus' container (optional)
    //     sourceDataPath: "frontmatter",
    //     // the relative node path where we can find the page's URL (required)
    //     sourceUrlPath: "fields.url",
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
