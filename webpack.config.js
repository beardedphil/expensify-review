const path = require('path');

module.exports = {
    entry: './src/app.js',
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.js$/
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
