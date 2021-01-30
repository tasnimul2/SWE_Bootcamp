const http = require('http');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req,res)=>{
    const { url } = req;
    //res.end('Welcome to node !');
    console.log(url);
    if(url === '/transitions'){
        const transitions = {1 :'one', 2:'two',3:'three'};
        res.setHeader('content-Type','application/json');
        res.write(JSON.stringify(transitions));
    }
});

server.listen(port,hostname, ()=>{
   
    console.log(`server running at ${hostname} + :  + ${port}`);
});