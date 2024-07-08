const path = require('path');

module.exports = {
  webpack: function(config, env) {
    config.output = {
      ...config.output,
      path: path.resolve(__dirname, 'docs'),
      publicPath: '/'
    };
    return config;
  }
};
