module.exports = {
  plugins: [
    `gatsby-plugin-dynamic-routes`,
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
