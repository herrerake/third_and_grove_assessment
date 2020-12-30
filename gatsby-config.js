module.exports = {
  siteMetadata: {
    title: "third_and_grove_assessment",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-randomuser",
      options: {
        results: 25,
        seed: "foobar"
      },
    },
  ],
};
