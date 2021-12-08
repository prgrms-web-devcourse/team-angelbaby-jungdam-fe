const customWebpackConfig = require('../craco.config.js');
const path = require('path');
const fs = require('fs');

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));

  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }

    const { dir, root } = path.parse(currDir);

    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`,
      );
    }

    currDir = dir;
  }
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-mobile',
    'storybook-preset-craco',
  ],
  webpackFinal: async (config) => {
    const { webpack } = customWebpackConfig;

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...webpack.alias,
          '@emotion/core': getPackageDir('@emotion/react'),
          '@emotion/styled': getPackageDir('@emotion/styled'),
        },
      },
    };
  },
};
