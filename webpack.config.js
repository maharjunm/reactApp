module.exports = {
    mode: "development",
    entry: "./main.js",
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: '/',
        filename: "./index.js"
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