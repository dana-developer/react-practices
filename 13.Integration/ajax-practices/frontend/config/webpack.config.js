const path = require("path");

module.exports = function (env) {
	return {
		mode: "none",
		entry: path.resolve("src/index.js"),
		output: {
			path: path.resolve("../backend/src/main/resources"),
			filename: "assets/js/main.js",
			assetModuleFilename: "assets/images/[hash][ext]",
		},
		module: {
			rules: [
				{
					test: /\.js/i,
					exclude: /node_modules/,
					loader: "babel-loader",
					options: {
						configFile: path.resolve(
							"config/babel.config.json"
						),
					},
				},
				{
					test: /\.(c|sa|sc)ss$/i,
					use: [
						"style-loader",
						{
							loader: "css-loader",
							options: {
								modules: true,
							},
						},
						"sass-loader",
					],
				},
				{
					test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
					type: "asset/resource",
				},
			],
		},
		devtool: "eval-source-map", // 현재 작성한 코드의 어디에서 에러가 발생한지 알려줌(변환된 코드의 위치X)
		devServer: {
			host: "0.0.0.0",
			port: 9090,
			static: {
				directory: path.resolve("public"),
				watch: true,
			},
			liveReload: true,
			compress: true,
			hot: false,
			proxy: [
				{
					context: ["/item", "/assets"],
					target: "http://localhost:8080",
				},
			],
		},
	};
};
