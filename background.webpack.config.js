const path = require('path');

const backgroundPath = path.join( __dirname, 'src', 'background' );

module.exports = {
    entry: './src/background/app.js',
    output: {
        filename: 'background.js',
        path: path.join(__dirname, 'public'),
    },
    mode: process.env.NODE_ENV,
    node: {
        fs: 'empty',
    },
    resolve: {
        alias: {
            '@configs': path.join( backgroundPath, 'configs'),
            '@plugins': path.join( backgroundPath, 'plugins'),
        },
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
    performance: { hints: false },
};
