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
    entry: './testing/App.js',
    output: {
        path: path.resolve(__dirname, "testing/assets"),
        filename: 'main.js',
        pathinfo: false
    }
  };