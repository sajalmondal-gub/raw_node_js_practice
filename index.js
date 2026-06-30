const http=require('http');
const url=require('url');

const server=http.createServer((req,res)=>{
    //  console.log('Request Headers:', req.headers);
    //  console.log(req.headers['user-agent']);
    //   const acceptLanguage = req.headers['accept-language'];
    //   console.log('Accept Language:', acceptLanguage);
    //   const {url,method}=req;

    //   console.log('Request url:',url);
    //   console.log('Request method:',method);

    console.log('url',url);
    const parsedUrl=url.parse(req.url,true);
    // console.log('paresedUrl',parsedUrl);
     res.writeHead(200, { 'Content-Type': 'application/json' });
     res.end(JSON.stringify({
        pathname: parsedUrl.pathname,
        query: parsedUrl.query,
        href: parsedUrl.href,
        
     }))

})

const PORT=3000;

server.listen(PORT,'localhost',()=>{
    console.log('server is running on port 3000');
});