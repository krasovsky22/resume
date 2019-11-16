// Taken from https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/aliases.config.js
// Generates aliases before running webpack to set everything up nice and pretty
const path = require('path');
const fs = require('fs');
const prettier = require('prettier');
const prettierConfig = require('./package.json').prettier;

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}

const aliases = {
  '@': 'src',
  '@components': 'src/Components',
  '@fonts': 'src/Fonts'
};

module.exports = {
  webpack: {},
  jest: {},
  jsconfig: {}
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  const aliasHasExtension = /\.\w+$/.test(aliasTo);
  module.exports.jest[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.ts`;
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`;
  module.exports.jsconfig[alias + '/*'] = [aliasTo + '/*'];
  module.exports.jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
        `${aliasTo}/index.js`,
        `${aliasTo}/index.jsx`,
        `${aliasTo}/index.json`,
        `${aliasTo}/index.ts`,
        `${aliasTo}/index.tsx`,
        `${aliasTo}/index.scss`,
        `${aliasTo}/index.css`
      ];
}

const prettierFormat = obj =>
  prettier.format(JSON.stringify(tsConfig), {
    ...prettierConfig,
    parser: 'json'
  });

const tsConfigPath = resolveSrc('tsconfig.paths.json');
// Require base config to overwrite paths
const tsConfig = require(tsConfigPath);
// Format this here to see if they are even.
const oldTsConfig = prettierFormat(tsConfig);
// Overwrite paths
tsConfig.compilerOptions.paths = module.exports.jsconfig;

const newTsConfigContent = prettierFormat(tsConfig);

// Only write the file if the objects don't match
if (oldTsConfig !== newTsConfigContent) {
  fs.writeFile(tsConfigPath, newTsConfigContent, error => {
    if (error) {
      console.error(
        'Error while creating jsconfig.json from aliases.config.js.'
      );
      throw error;
    }
  });
}
