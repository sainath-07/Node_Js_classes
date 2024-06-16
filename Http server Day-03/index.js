const http=require('http')
http.createServer((req,resp)=>{
        resp.write("<h1>Hello this is node js server</h1>")
        resp.end()
}).listen(1000)