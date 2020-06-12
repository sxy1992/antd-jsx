module.exports = {
	devServer: {
		proxy: {
			'/admin': {
				target: 'http://188.131.211.205:8083/admin',
				pathRewrite: {
					'^/admin': ''
				},
				ws: false,
				changeOrigin: true
			},
		}
	},
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			},
		}
	}
}