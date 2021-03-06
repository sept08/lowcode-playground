module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.merge({
      node: {
        fs: 'empty',
      },
    });

    config.plugins.delete('hot');
    config.devServer.hot(false);

    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include
        .add(/node_modules/)
        .end()
      .type('javascript/auto');
  });
};
