module.exports = {
    entry: './index.js',
    output: {
        path: './public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js/, loader: 'babel-loader'},
            {test: /\.css/, loader: 'style-loader!css-loader'}
        ]
    }
}