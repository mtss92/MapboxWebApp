module.exports = {
    entry:'./src/index.ts'
    ,output:{
        filename:'bundle.js'
    }
    ,watch :false
    ,module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
      }
      ,devServer: {
        open: true
      }
      ,mode: 'development'
}