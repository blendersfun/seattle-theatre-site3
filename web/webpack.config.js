module.exports = {
    entry: './src/app.js',
    output: {
        path: './public',
        filename: 'app.bundle.js'
    },
    devtool: 'cheap-module-eval-source-map'
};