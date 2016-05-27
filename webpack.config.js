const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: [
		path.resolve(__dirname, 'src/index.js')
	],
	output: {
		path: path.resolve(__dirname, 'example/build/'),
		publicPath: 'http://localhost:4000/example/build/',
		filename: 'index.js'
	},
	resolve: {
		root: path.resolve(__dirname, 'src/'),
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.scss', '.jsx']
	},
	plugins: [],
	module: {
		preLoaders: [
			{
				test: /(\.js$|\.jsx$)/,
				loaders: [
					'eslint',
					'source-map'
				],
				include: path.resolve(__dirname, 'src/'),
			}
		],
		loaders: [
			{
				test: /(\.js$|\.jsx$)/,
				loaders: [
					'react-hot',
					'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
				],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loaders: [
					'style',
					'css',
					'autoprefixer-loader?browsers=last 2 version',
					'sass?outputStyle=compressed',
				],
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		host: 'localhost',
		port: '4000'
	},
	eslint: {
		configFile: '.eslintrc',
		fix: true
	}
};
