const http=require('http');

const server=http.createServer((req,res)=>{
     console.log('Request Headers:', req.headers);
     console.log(req.headers['user-agent']);
})

const PORT=3000;

server.listen(PORT,'localhost',()=>{
    console.log('server is running on port 3000');
});