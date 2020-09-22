const path = require('path');

const browerActionPath = path.join( __dirname, 'src', 'browser-action' );

module.exports = {
    entry: './src/browser-action/app.js',
    output: {
        filename: 'browser-action.js',
        path: path.join(__dirname, 'public'),
    },
    mode: process.env.NODE_ENV,
    node: {
        fs: 'empty',
    },
    resolve: {
        alias: {
            '@components': path.join( browerActionPath, 'components' ),
            '@configs': path.join( browerActionPath, 'configs' ),
            '@plugins': path.join( browerActionPath, 'plugins' ),
            '@styles': path.join( browerActionPath, 'styles'),
            '@svg': path.join( browerActionPath, 'svg'),
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
                        presets: ['@babel/preset-env', '@babel/react'],
                    },
                },
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true,
                            svgo: {
                                plugins: [
                                    {
                                        removeTitle: false,
                                        removeViewBox: false,
                                    },
                                ],
                                floatPrecision: 2,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { url: false },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
    performance: { hints: false },
};
