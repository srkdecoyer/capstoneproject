//https://www.gatsbyjs.com/plugins/gatsby-plugin-dynamic-routes/

// module.exports = {
//   // home: {
//   //   path: `/Books/:id`,
//   //   component: `src/pages/Books.js`
//   // },
//   bookDetails: {
//     path: `/BookDetails`,
//     component: `src/pages/BookDetailss.js`
//   }
// }

//NOTE: In Gatsby, for Pages directly under Pages automatically have route defined by Gatsby. Only the custom ones need to be defined here.

module.exports = {
  home: {
    path: `/BookDetails`,
    component: `src/pages/BookDetails.js`
  }
}
