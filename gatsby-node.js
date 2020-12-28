const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {}

exports.createPages = async ({ graphql, actions }) => {}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
