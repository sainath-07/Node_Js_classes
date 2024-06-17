const http= require('http')
const data= require('./data')

http.createServer((req,resp)=>{
    // while creating the API we need to use the Response parameter
    // if we want to take a request from user then we need to use the request.
         resp.writeHead(200,{'Content-Type':"application/json"});
         resp.write(JSON.stringify(data));
         resp.end();
}).listen(5000);

