module.exports = {
  siteMetadata: {
    title: "Beyond Calculator"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito+Sans:200,400,600,700,800`]
      }
    }
  ]
};
