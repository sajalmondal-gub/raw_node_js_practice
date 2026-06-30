const http=require('http');
// console.log(http);

const server=http.createServer((req,res)=>{
    
});

const PORT=3000;
server.listen(PORT,'localhost',()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

