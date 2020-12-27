const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => { }

exports.createPages = async ({ graphql, actions }) => { }

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}