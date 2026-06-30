const { error } = require("console");
const http = require("http");
const { json } = require("stream/consumers");
const { URL } = require("url");
// const querystring = require("querystring");

// In-memory data store (for demonstration)
let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build an API", completed: false },
];

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

  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Set CORS headers (for development)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  if (method === "GET" && pathname === "/todos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(todos));
  } else if (method === "POST" && pathname === "/todos") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const newTodo = JSON.parse(body);
        newTodo.id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        todos.push(newTodo);
        res.writeHead(201, { "content-type": "application/json" });
        res.end(JSON.stringify(newTodo));
      } catch (err) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "invalid json" }));
      }
    });
  } else if (method === "PUT" && pathname.startsWith("/todos/")) {
    const id = parseInt(pathname.split("/")[2]);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const updateTodo = JSON.parse(body);
        if (todos.findIndex((t) => t.id === id) === -1) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: "index not found" }));
        } else {
          todos[todos.findIndex((t) => t.id === id)] = {
            ...todos[todos.findIndex((t) => t.id === id)],
            ...updateTodo,
          };
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify(todos[todos.findIndex((t) => t.id === id)]));
        }
      } catch (error) {
        res.writeHead(401, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else if (method === "DELETE" && pathname.startsWith("/todos/")) {
    
    const id = parseInt(pathname.split("/")[2]);

    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
      res.writeHead(400, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "Index not found" }));
    } else {
      todos=todos.filter(t => t.id !== id);
      res.writeHead(204);
      res.end();
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log("server is running on port 3000");
});
