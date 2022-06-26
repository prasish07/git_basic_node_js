const http = require('http');

// req == incoming request
// res == response we are sending back
const server  = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end("welcome")
    }
    else if (req.url != '/about'){
        res.end(`<h1>hi we are right now in about page</h1>`)
    }
    // console.log(req)
    // res.write("welcome to our home page")
    // res.end()

})

server.listen(5000)