const aliases = require('./aliases.config');

module.exports = {
  webpack: (config, env) => {
    //do stuff with the webpack config...
    config.resolve.alias = { ...config.resolve.alias, ...aliases.webpack };
    return config;
  },
  jest: config => {
    config.moduleNameMapper = Object.assign(
      {},
      config.moduleNameMapper || {},
      require('./aliases.config').jest
    );
    return config;
  }
};