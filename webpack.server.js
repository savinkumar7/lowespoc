const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    //Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser

    target: 'node',

    //tell webpack the root file of 
    //our application 

    entry :'./index.js',

    //tell webpack wher to put the output file
    //of our server application 

    output: {
        filename :'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals : [webpackNodeExternals()],
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
            test: /\.css$/i,
            use: ['css-loader'],
          }
        ]
      }
    };
    
    module.exports = config;
    