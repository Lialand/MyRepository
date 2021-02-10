var path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: ['babel-polyfill', './src/index.js'], // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, 'public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    }, 
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         beautify: false,
    //         mangle: {
    //           screw_ie8: true,
    //           keep_fnames: true
    //         },
    //         compress: {
    //           screw_ie8: true,
    //           drop_console: true
    //         },
    //         comments: false,
    //     })
    // ]
};