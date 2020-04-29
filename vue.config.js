const path = require('path');

function addStyleResource(rule) {
  rule.use('style-resource').loader('style-resources-loader').options({
    patterns: [
      path.resolve(__dirname, 'src/assets/style/theme.less') // 需要全局导入的less
    ]
  });
}

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  chainWebpack: config => {
    // 配置less 全局变量
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    );
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/assets/style/theme.less'
          )}";`
        }
      },
    }
  }
};
