'use strict';

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var applicationEntries = process.env.ENV === 'development'
	? [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8090',
		'webpack/hot/only-dev-server',
	] : [ ];

var sourceMap = process.env.TEST || process.env.ENV !== 'production'
	? [ new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.tsx?$/ }) ]
	: [ ];

module.exports = {
	entry: [].concat(
		applicationEntries,
		[ './client/index.tsx' ]
	),

	output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].js',
		publicPath: '/static/',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[id].chunk.js',
	},

	devtool: 'cheap-module-eval-source-map',

	resolve: {
		extensions: [
			'',
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.less',
			'.svg',
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ForkCheckerPlugin(),
		// new ExtractTextPlugin('[name].css'),
	].concat(sourceMap),

	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				loaders: [
					'react-hot-loader/webpack',
					'awesome-typescript-loader?forkChecker=true&useBabel=true&useCache=true'
				],
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, 'client'),
			}, {
				test: /\.less?$/,
				loaders: [
					'style?sourceMap',
					'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]]',
					'postcss',
					'less',
					// Add : resolve-url, production mode
				],
				// For production:
				// loader: ExtractTextPlugin.extract(
				// 	'style?sourceMap',
				// 	'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]]!postcss!less' // Add : resolve-url, production mode
				// ),
				exclude: path.resolve(__dirname, 'node_modules'),
			}, {
				test: /\.svg$/,
				loader: 'react-svg?es5=1',
			},
		],

		preLoaders: [
			{
				// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
				test: /\.js$/,
				loader: 'source-map-loader'
			},
		],
	}, 
	
	postcss: function() {
		return [
			autoprefixer({ browsers: [ 'last 2 versions' ] })
		]
	},

	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
	},
};
