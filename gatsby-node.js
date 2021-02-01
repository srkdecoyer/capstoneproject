// exports.onCreateNode = ({ node }) => {
//     console.log(`Node created of type "${node.internal.type}"`)
//   }

// Option One: The pages data comes from the `user-list` component.
// A Link component is passed a user id in the url (ie) `/users/${user.id}`.
// That's how the ID is rendered on the page. Additionally, state can be passed
// in with the Link component too. However, if the user refreshes the page, that data is lost.
// exports.onCreatePage = async ({page, actions}) => {
//   const {createPage} = actions

//   if (page.path.match(/^\/Books/)) {
//     await createPage({
//       path: '/Books',
//       matchPath: '/Books/:id',
//       component: path.resolve(`src/pages/Books.js`),
//     })
//   }
// }