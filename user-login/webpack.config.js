const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  // Entry point for your application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',  // Set to 'production' for production builds
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        hot: true,  // Enable hot module replacement
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // Apply babel-loader to .js and .jsx files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,  // Apply loaders for CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Allow importing .js and .jsx without specifying extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // HTML file to serve
        }),
    ],
};
