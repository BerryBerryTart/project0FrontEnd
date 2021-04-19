module.exports = {    
    module:{
        rules:[
            {
                test:/\.js|.jsx$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ]
    }
}