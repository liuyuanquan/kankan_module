var webpack = require('webpack');

module.exports = {
	//源文件配置
    entry: {
        test: "./test.js"
    },
	//文件输出配置
    output: {
        path: "../build/",
        filename: '[name].js'
    },
	//插件项
    plugins: [],
	//其它解决方案配置
    resolve: {
        modulesDirectories: ["../../node_modules"]
    },
    module: {
		//加载器配置
        loaders: [
			//.css文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.html$/, loader: 'html' },
			//图片文件使用 url-loader
            { test: /\.(png|jpg|gif)$/, loader: 'url', query: {limit: 10000, name: 'images/[name].[ext]?[hash]'}},
            //js jsx使用 babel
            { test: /\.js|jsx$/, loader: 'babel', query: { presets: ['es2015', 'stage-0']}}
        ]
    }
};