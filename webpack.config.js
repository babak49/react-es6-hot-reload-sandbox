const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:4000',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, '/example'),
		publicPath: 'http://localhost:4000/example',
		filename: 'index.js'
	},
	resolve: {
		root: path.resolve(__dirname, 'src/'),
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.scss', '.jsx']
	},
	devServer: {
		host: 'localhost',
		contentBase: 'example',
		port: '4000',
		hot: true,
		inline: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
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
				loader: 'babel',
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
	eslint: {
		configFile: '.eslintrc',
		fix: true
	}
};
