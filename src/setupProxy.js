const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "https://www.juso.go.kr/addrlink/addrLinkApi.do",
			changeOrigin: true,
		})
	)
}