const { rollupAdapter } = require('@web/dev-server-rollup');
const json =  require('@rollup/plugin-json');

module.exports = {
    port: 8000,
    nodeResolve: true,
    open: true,
    watch: true,
    appIndex: 'index.html',
    mimeTypes: {
      // serve all json files as js
      '**/*.json': 'js'
    },
    plugins: [rollupAdapter(json())],
  };