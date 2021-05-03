const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { proxy } = require('./proxyServer.json');

module.exports = {
    ...defaultConfig,
    entry: {
        app: path.join(__dirname, 'src/index.js'),
    },
    plugins: [
        ...defaultConfig.plugins,
        new BrowserSyncPlugin({ files: '**/*.php', proxy }),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    }
};
