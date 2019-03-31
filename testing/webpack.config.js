const path = require('path');

module.exports = {
    mode: "none",
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false
    },
    resolve: {
        extensions: ['.js']
    },
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'main.js',
        pathinfo: false
    }
  };