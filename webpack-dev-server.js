var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
	contentBase: __dirname,
	publicPath: path.resolve(__dirname, config.output.publicPath),
	hot: true,
	inline: true,
	progress: true,
	historyApiFallback: true,
}).listen(8090, 'localhost', function (err, result) {
	if (err) return console.log(err);
	console.log('Listening at http://localhost:8090/');
});
