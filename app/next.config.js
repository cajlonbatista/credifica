const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  publicRuntimeConfig: {
    API_URL: 'cajlonbatista'
  },
})