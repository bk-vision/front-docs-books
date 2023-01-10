const express = require('express')
const path = require('path')
const app = new express()
const PORT = 5000

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
// 首页
app.get('/', (req, res) => {
	const index = path.join(__dirname, './dist/index.html')
	res.render(index)
})
// 配置静态资源
app.use('/', express.static(path.join(__dirname, './dist')))
// 服务启动
app.listen(PORT, () => {
	console.log(`App is running in port ${PORT}`)
})