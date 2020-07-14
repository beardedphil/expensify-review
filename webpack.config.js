const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
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
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
