const proxySettings = {
  // 接口代理1
  '/testapi': {
    target: 'https://systemjs.1688.com/krump/schema/1352.json',
    changeOrigin: true,
    secure: false,
    pathRewrite: { '^/testapi': '' },
  },
};

module.exports = proxySettings;
