var path = require('path');
  
module.exports = {
    mode: "development",
    watch: true,
    entry: "./src/index.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, 'public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    devServer: {
        open: true,
        openPage: 'public/index.html',
        port: 8010
   },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}