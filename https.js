import https from "https";
import { readFile, readFileSync, writeFile } from "fs";
// console.log('this is https',https);
import path from "path";

// for open ssl i mean cert.pem file create openssl req -new -x509 -key key.pem -out cert.pem -days 365 -nodes using git bash and cd /c/Users/sajal this direcoty from

// console.log("this is fs", path);

// Path to your SSL/TLS certificate and key

const sslOptions = {
  key: readFileSync(path.join(import.meta.dirname, "key.pem")),
  cert: readFileSync(path.join(import.meta.dirname, "cert.pem")),
  minVersion: "TLSv1.2",
  
};

console.log(sslOptions);
const server=https.createServer(sslOptions,(req,res)=>{
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options','SAMEORIGIN');
    res.setHeader('X-XSS-Protection','1;mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    if (req.method=== "GET" && req.url ==='/' ) {
        res.writeHead(200,'Content-type','Text/html;charsheet')
        res.end(`<h1>Welcome to the Secure Server</h1><p>Your connection is encrypted!</p>`);
    }
});

server.on('error',(error)=>{
    console.log('Server error:', error.message);
});

const port =3000;

server.listen(port,()=>{
    console.log(`server run on the https://localehost:${port}`);
});
