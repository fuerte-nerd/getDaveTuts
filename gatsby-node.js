const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = async ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// The image path in markdown files will be 'assets/yourImage.jpg' so create this function to filter it through a regex to get just the filename
const getFilename = url => {
  return url.match(/(?<=\/).*/g)[0]
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const indexTemplate = path.resolve(`src/templates/index.js`)
  const tutorialTemplate = path.resolve(`src/templates/tutTemplate.js`)

  const heroQuery = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "content" }, name: { eq: "hero" } }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                hero_image
              }
            }
          }
        }
      }
    }
  `)
  if (heroQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  createPage({
    path: "/",
    component: indexTemplate,
    context: {
      hero_image: getFilename(
        heroQuery.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
          .hero_image
      ),
    },
  })

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "tutorials" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                featured_image
              }
              fields {
                slug
              }
              id
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // If no errors, then we can generate a page for each post, passing in the slug as a path.*
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.fields.slug,
      component: tutorialTemplate,
      context: {
        post_id: node.childMarkdownRemark.id,
        featured_image: getFilename(node.childMarkdownRemark.frontmatter.featured_image)
      }, // additional data can be passed via context
    })
  })
}
