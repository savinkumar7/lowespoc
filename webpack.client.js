const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");


const config = {
   
    //tell webpack the root file of 
    //our application 

    entry :'./src/client/client.js',

    //tell webpack wher to put the output file
    //of our server application 

    output: {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
          {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: [
                'react',
                'stage-0',
                ['env', { targets: { browsers: ['last 2 versions'] } }]
              ]
            }
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ]
      },
    
      plugins: [
        new ExtractTextPlugin({
          filename: "css/main.css"
        })
      ]
    };
    
    module.exports = config;