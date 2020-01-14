// const proxy = require('http-proxy-middleware')

// module.exports = function(app) {
// 	app.use(
// 		proxy('/api', {  //`api`是需要转发的请求 
// 			target: 'http://api.zhuishushenqi.com',  // 这里是接口服务器地址
// 			changeOrigin: true,
// 		})
// 	)
// }
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	// ...You can now register proxies as you wish!
	app.use(proxy('/api', { 
		target: 'http://api.zhuishushenqi.com',
		secure: false,
		changeOrigin: true,
		pathRewrite: {
		"^/api": "/"
		},
	}));
	app.use(proxy('/apc', { 
		target: 'http://chapterup.zhuishushenqi.com',
		secure: false,
		changeOrigin: true,
		pathRewrite: {
		"^/apc": "/"
		},
	}));
	//app.use(proxy('/apc', { target: 'http://172.19.5.34:9531' }));
};