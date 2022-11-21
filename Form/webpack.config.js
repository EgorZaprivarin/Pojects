const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
   mode,
   target,
   devtool,
   devServer: {
      port: 9999,
      hot: true,
      open: true
   },
   entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
   output: {
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      filename: 'index.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'src', 'index.html'),
         filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
         filename: 'index.css',
      })
   ],
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
         },
         {
            test: /\.(c|sc|sa)ss$/i,
            use: [
               devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
               "css-loader",
               {
                  loader: 'postcss-loader',
                  options: {
                     postcssOptions: {
                        plugins: [require('postcss-preset-env')],
                     }
                  }
               },
               "sass-loader"
            ],
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(svg|eot|woff|woff2|ttf)$/i,
            loader: 'file-loader',
            options: {
               name: './fonts/[name].[ext]'
            }
         }
      ]
   }
}