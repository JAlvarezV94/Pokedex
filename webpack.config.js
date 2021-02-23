const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/i,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
};