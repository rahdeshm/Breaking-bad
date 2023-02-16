const path=require('path');

module.exports={

    // entry:path.resolve(__dirname,'/index.js'),
    output:{
        path:path.resolve(__dirname,'/dist')
    },
    module:{
        rules:[
            {
              test: /\/(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',

                options: {
                  presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                  ]
                }
              }
            }
          ]
    }

}