// creating a server
//importing http
const http = require("http");
const fs = require("fs");

//creatig a server with createServer method and server.Listen

const server = http.createServer((req, res) => {
  console.log("request has been made from the browser to the server");
  //   console.log(req);
  //   console.log(req.method);
  //   console.log(req.url);

  // !! sending basic text and html data using res.write() !!

  //   res.setHeader("Content-Type", "text/html"); //text/plain  , text/html
  //   res.write("<h1>hello human this is a server :) </h1>");
  //   res.write("<h2> What the cat doing !? >_< </h2>");
  //   res.end();
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      res.end();
    }
  });
});

//using the server.listen method with args as (port number , host ,callback function);

server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
