const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports={
  //Entry file for the bundle
  entry: {
    bundle:'./client/src/index.js'
  },

  //The output for the bundle
  output:{
    path: path.join(__dirname, 'client/dist/js'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
        test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'server/public/index.html'
    })
    //new webpack.optimize.UglifyJsPlugin()
  ]

}
