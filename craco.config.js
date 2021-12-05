const path = require('path');
module.exports = {
  babel: {
    presets: ['@emotion/babel-preset-css-prop'],
  },
  webpack: {
    // 상대주소 안쓰기
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/style'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@router': path.resolve(__dirname, 'src/router'),
    },
  },
};
