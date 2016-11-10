var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var dev = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: dev ? [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8090',
		'webpack/hot/only-dev-server',
		'./client/index.tsx',
	] : [
		'./client/index.tsx',
	],

	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].js',
		publicPath: '/',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[id].chunk.js',
	},

	devtool: dev ? 'cheap-module-eval-source-map' : false,

	resolve: {
		extensions: [ '', '.js', '.jsx', '.ts', '.tsx', '.less', '.svg', ],
	},

	plugins: [
		new ForkCheckerPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(dev ? 'development' : 'production'),
			}
		})
	].concat(dev ? [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.SourceMapDevToolPlugin({ filename: null, test: /\.tsx?$/ }),
	] : [
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			analyzerMode: 'static',
			reportFilename: '../analyze/report.html',
		})
	]),

	module: {
		preLoaders: [
			{
				test: /\.tsx?$/,
				loader: 'tslint',
				include: path.resolve(__dirname, 'client'),
			}, {
				// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
				test: /\.js$/,
				loader: 'source-map-loader',
			}
		],
		loaders: [
			{
				test: /\.tsx?$/,
				loaders: [
					'react-hot-loader/webpack',
					'awesome-typescript-loader?forkChecker=true&useCache=true',
				],
				exclude: path.resolve(__dirname, 'node_modules'),
				include: path.resolve(__dirname, 'client'),
			}, {
				test: /\.less?$/,
				loader: dev ?
					'style?sourceMap!css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]]!postcss!less' :
					ExtractTextPlugin.extract(
						'style',
						'css?modules&importLoaders=1&localIdentName=[local]-[hash:base64:8]]!postcss!less'
					),
				exclude: path.resolve(__dirname, 'node_modules'),
				// Add : resolve-url,
			}, {
				test: /\.svg$/,
				loader: 'react-svg?es5=1',
			},
		],
	},

	postcss: function() {
		return [
			require('autoprefixer')({ browsers: [ 'last 2 versions' ] }),
		].concat(dev ? [
		] : [
			require('cssnano'),
		])
	},

};
