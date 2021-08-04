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

    if(path === '/'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        // response.write(`
        //     <!DOCTYPE html>
        //     <head>
        //       <link rel="stylesheet" href="/style.css">
        //     <head>
        //     <body>
        //       <h1>This is qq.com server</h1>
        //       <script src="/main.js"></script>
        //     </body>
        // `)
        const stringFlow = fs.readFileSync('public/index.html')
        response.write(stringFlow)
        response.end()
    } else if(path === '/style.css'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(fs.readFileSync('public/style.css'))
        response.end()
    } else if(path === '/qq.js'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(fs.readFileSync('public/main.js'))
        response.end()
    }else if(path === '/friends.json'){
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/json;charset=utf-8')
        response.setHeader('Access-Control-Allow-Origin', 'http://localhost:9999')
        response.write(fs.readFileSync('public/friends.json'))
        response.end()
    }else if(path === '/friends.js'){
        if(request.headers['referer'].indexOf('http://localhost:9999') === 0){
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
            const { callback } = query
            const string1 = `window["callbackName"]({{data}})`
            const string2 = fs.readFileSync('public/friends.json').toString()
            const string3 = string1.replace('{{data}}',string2).replace('callbackName',callback)
            response.write(string3)
            response.end()
        }else{
            response.statusCode = 404
            response.end()
        }
    }else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`你输入的路径不存在对应的内容`)
        response.end()
    }
    /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请访问 http://localhost:' + port)

