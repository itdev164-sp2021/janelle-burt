/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allContentfulBlogPost {
              edges {
                node {
                  id
                  slug
                }
              }
            }
          }
          `).then(result => {
              if (result.erros) {
                  reject(result.errors);
              }
              result.data.allContentfulBlogPost.edges.forEach((edge) => {
                  createPage({
                      path: edge.node.slug,
                      component: path.resolve(`./src/templates/blog-post.js`),
                      context: {
                          slug: edge.node.slug
                      }
                  })
              })
              resolve();
          })
    });
}
