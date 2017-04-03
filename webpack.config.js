const webpack = require('webpack');

module.exports = {
    /**
     * entry
     *
     * string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })
     * @see https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: './index.js',

    /**
     * output
     *
     * object
     * @see https://webpack.js.org/configuration/output/
     */
    output: {

        /**
         * output.filename
         *
         * string
         * @see https://webpack.js.org/configuration/output/#output-filename
         */
        filename: '[name].bundle.js',

        /**
         * output.path
         *
         * string
         * @see https://webpack.js.org/configuration/output/#output-path
         */
        path: __dirname,

        /**
         * output.publicPath
         *
         * string
         * @see https://webpack.js.org/configuration/output/#output-publicpath
         */
        publicPath: __dirname
    },

    module: {

        /**
         * module.rules
         *
         * array
         * @see https://webpack.js.org/configuration/module/#module-rules
         */
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },

    /**
     * plugins
     *
     * array
     * @see https://webpack.js.org/configuration/plugins/#plugins
     */
    plugins: [

        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            compress: {
                warnings: false
            }
        })

    ]
};