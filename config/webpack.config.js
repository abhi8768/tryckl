const webpack = require('webpack'),
HtmlWebPackPlugin = require("html-webpack-plugin"),
WebpackMd5Hash = require('webpack-md5-hash'),
CopyWebpackPlugin = require('copy-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
path = require('path'),
host = process.env.HOST || 'localhost',
port = process.env.PORT || 5000,
sourcePath = path.join(__dirname, './src'),
buildDirectory = path.join(__dirname, '../dist'),
WebpackMd5HashObj = new WebpackMd5Hash(),
CleanWebpackPluginObj = new CleanWebpackPlugin(),
apiURLPrefix = {
    production: JSON.stringify('https://api.tryckl.com/api/v1'),
    development: JSON.stringify('https://api.tryckl.com/api/v1')
},
cryptoKey = {
    production: 
        {
          type : 'HMAC-SHA512',
          message : 'Baaldahab@2019ProdNov#1!!!',
          password : 'wellcometobaaldahab',
          hex : '88983dda21cefad60e6b08a358bbcf0c4fe324f12d565723318e60b7db2151c93a167be0a3f5e7c10a9225e5d86a72fe661922a8451b24daa6684ed5b252b4c7',
          Base64: 'iJg92iHO+tYOawijWLvPDE/jJPEtVlcjMY5gt9shUck6Fnvgo/XnwQqSJeXYanL+ZhkiqEUbJNqmaE7VslK0xw=='
        }
    ,
    development: {
        type : 'HMAC-SHA512',
        message : 'Baaldahab@2019DevNov#1!!!',
        password : 'wellcometobaaldahab',
        hex : 'a93c4ee98403ba75508137624243e8b2c17cd171125c2fa7a6cab98937542e96a1dac85a2925a64542effa4c410874859757b79049f60d1ef9ba352ea98d37c8',
        Base64: 'qTxO6YQDunVQgTdiQkPossF80XESXC+npsq5iTdULpah2shaKSWmRULv+kxBCHSFl1e3kEn2DR75ujUuqY03yA=='
      }
},
stats = {
    hash: false,
    version: false,
    timings: false,
    assets: false,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: false,
    warnings: false,
    publicPath: false,
    colors: {
        green: '\u001b[32m',
    },
};
module.exports = (env , argv) => {
    const nodeEnv = env && env.prod ? 'production' : 'development';
    const isProd = nodeEnv === 'production';
    console.log("mode ==> ", nodeEnv , "isProd ==> ", isProd);
    const entryPoint = isProd ? "./src/index.js" : [
        // activate HMR for React
        'react-hot-loader/patch',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        `webpack-dev-server/client?http://${host}:${port}`,
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        'webpack/hot/only-dev-server',
        // the entry point of our app
        './src/index.js',
    ];
    const HtmlWebPackPluginObj = new HtmlWebPackPlugin({
        template : "./src/index.html",
        inject: true,
        filename : "index.html",
        title: "Baaldhabb",
        hash: true,
        favicon: "./src/assets/img/fav.png",
        production: isProd,
        minify: isProd && {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        },
    });
    return {
        devtool: isProd ? 'source-map' : 'cheap-module-source-map',
        entry: entryPoint,
        output: {
            path: buildDirectory,
            publicPath: '/',
            filename: "[name]-[hash:20].js",
            chunkFilename: '[chunkhash].[id].chunk.js',
        },
        module: {
            rules : [
                {
                    test: /\.(js|jsx)$/,
                    exclude : /node_modules/,
                    use : { loader : "babel-loader" }
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                      {
                        loader: 'file-loader',
                        options: {
                            context: 'assets',
                            name: 'static/[name]-[hash:20].[ext]'
                        },
                      },
                    ],
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "style-loader"  }, 
                        { 
                            loader: "css-loader",
                            options: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        plugins : [
            HtmlWebPackPluginObj,
            WebpackMd5HashObj,
            CleanWebpackPluginObj,
            // setting production environment will strip out
            // some of the development code from the app
            // and libraries
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
                'apiURLPrefix': apiURLPrefix[nodeEnv],
                'cryptoKey' : JSON.stringify(cryptoKey[nodeEnv].Base64)
            }),
            new CopyWebpackPlugin([
                { from: './src/assets/css', to: 'assets/css' },
                { from: './src/assets/fonts', to: 'assets/fonts/' },
                { from: './src/assets/img', to: 'assets/img/' },
                { from: './src/assets/js', to: 'assets/js/' },
                { from: './src/assets/vendor', to: 'assets/vendors/' }
            ]),
        ],
        performance: isProd && {
            maxAssetSize: 900000,
            maxEntrypointSize: 900000,
            hints: 'warning',
        },
        stats: stats,
        devServer: {
            port: port,
            host : host,
            contentBase: './dist',
            publicPath : '/',
            historyApiFallback: true,
            overlay: true,
            hot: !isProd,
            compress: isProd,
            open: true,
            stats: stats
        },
    }
};
