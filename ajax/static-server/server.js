var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
    console.log('请指定端口号好不啦？\nnode-dev server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** 从这里开始看，上面不要看 ************/

    console.log('发请求过来啦！路径（带查询参数）为：' + pathWithQuery)
    response.statusCode = 200
    // 设置默认首页
    const filePath = path==='/'?'/index.html':path
    const suffix = filePath.substring(filePath.lastIndexOf('.'))
    console.log(suffix)
    const fileTypes = {
        '.html':'text/html',
        '.css':'text/css',
        '.js':'text/javascript',
        '.png':'img/png',
        '.jpg':'img/jpeg'
    }
    let fileType = fileTypes[suffix] || 'text/html'
    response.setHeader('Content-Type', `${fileType};charset=utf-8`)
    let stringFlow
    try {
        stringFlow = fs.readFileSync(`./public${filePath}`)
    }catch (e) {
        stringFlow = "访问文件不存在"
        response.statusCode = 404
    }
    response.write(stringFlow)
    response.end()


    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请访问 http://localhost:' + port)

