module.exports = {
    entry:'./index.ts'
    ,output:{
        filename:'../bundle.js'
    }
    ,watch :true
    ,module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
      }

}