module.exports = {
    entry: "./main.js",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: '/',
        filename: "./index.js"
    },
    devServer: {
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

};