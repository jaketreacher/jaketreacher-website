module.exports = {
  siteMetadata: {
    siteUrl: "https://jaketreacher.com",
    title: "Jake Treacher",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
};
