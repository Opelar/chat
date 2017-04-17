const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlResolve = new HtmlWebpackPlugin({
    title: 'chat',
    filename: 'index.html',
    template: './app/index.template.ejs'
});

module.exports = {
    context: __dirname,
    entry: './app/entry.js',
    output: {
        path: path.resolve(__dirname, '_build/'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['js', 'json', 'vue', 'less', 'css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {

                    }
                }
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        htmlResolve,
    ],
    watch: true,
    watchOptions: {
        // ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000 * 10
    },
};
