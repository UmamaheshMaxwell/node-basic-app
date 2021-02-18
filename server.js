//web Server using NodeJS

var http = require("http")

http.createServer(function(request, response){
    console.log(request.url)
    response.writeHead(200, {'content-type' : 'text/html'})
    
    if(request.url == "/"){
        response.end("This is home URL")
    }
     else if(request.url == "/employee"){
        response.end("This is employee URL")
     }

}).listen(8000)