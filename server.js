const http = require("http");
const fs = require("fs");
const _=require("lodash");
//creating server
const server = http.createServer((req, res) => {
  console.log("request has been made from the browser to the server");
  //setting the header content type to text/html

  res.setHeader("Content-Type", "text/html");
  //source files location

  let path = "./views";

  //switch case for route implementation
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
      //using redirects for about page as about-me
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.end(fileData);
    }
  });

  console.log(req.method);
  console.log(req.url);
});

//server listener

server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
