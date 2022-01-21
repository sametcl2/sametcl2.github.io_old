module.exports = {
  siteMetadata: {
    siteUrl: "https://www.sametcl2.github.io",
    title: "Samet Şahin Personal Page",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
