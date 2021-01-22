const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');

const withImages = require('next-images');

const fs = require('fs');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
}

const theme = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/less/antd.less'), 'utf8')
)


module.exports = withLess(withSass({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: theme
  },
  ...withImages({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals),
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader',
        })
      }
      return config
    },
  })
}));