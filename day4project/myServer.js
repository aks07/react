//1. Refer a Node Module
let http = require("http");
//2. Create a server to handle request and response
let server=http.createServer((request, response) =>{
     //response.end("My First Node HTTP Example")
    if(request.url == '/'){
        //To check from which URL the client is sending request
        //set the header
        response.writeHead(200,{"Content-type":"text/html"})
        response.write("<html><body><h2>Node Example Heading</h2></body></html>")
    }else if(request.url == '/admin'){
        response.writeHead(200,{"Content-type":"text/html"})
        response.write("<html><body><h2>This is admin page</h2></body></html>")
    }else if(request.url == '/data'){
        response.writeHead(200,{"Content-type":"application/json"})
        // response.write({"message":"This is Json Message Info"}) // This wont work as write accepts only string values
        response.write(JSON.stringify({"message":"This is Json Message Info"}))
    }
    else{
        response.write("404 Page Not Found")
    }
    response.end();
})
//3. Listen or Accept Client Request
server.listen(5000, "localhost", ()=>{
    console.log("Server is running on port 5000")
})

