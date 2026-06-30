const http = require("http");
const { URL } = require("url");
// const querystring = require("querystring");

const server = http.createServer((req, res) => {
  //  console.log('Request Headers:', req.headers);
  //  console.log(req.headers['user-agent']);
  //   const acceptLanguage = req.headers['accept-language'];
  //   console.log('Accept Language:', acceptLanguage);
  //   const {url,method}=req;

  //   console.log('Request url:',url);
  //   console.log('Request method:',method);

  // console.log('url',url);
  // const parsedUrl=url.parse(req.url,true);
  // // console.log('paresedUrl',parsedUrl);
  //  res.writeHead(200, { 'Content-Type': 'application/json' });
  //  res.end(JSON.stringify({
  //     pathname: parsedUrl.pathname,
  //     query: parsedUrl.query,
  //     href: parsedUrl.href,

  //  }))

//   console.log(URL);
//   const basedUrl = "http://" + req.headers.host + "/";
//   console.log("basedUrl", basedUrl);
//   const myUrl = new URL(req.url, basedUrl);
//   console.log("myUrl", myUrl);

//   const queryObject = {
//     name: "John",
//     age: 30,
//     city: "New York",
//   };

//   const queryStr = querystring.stringify(queryObject);
//   console.log("Query String:", queryStr);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(
//     JSON.stringify({
//       path: parsedUrl.pathname,
//       params,
//       exampleQueryString: queryStr,
//     }),
//   );





});

const PORT = 3000;

server.listen(PORT, "localhost", () => {
  console.log("server is running on port 3000");
});
