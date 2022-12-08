import http from "http";
import fs from "fs";
import path from "path";
import { mimeTypes } from "./mimeTypes.js";

const hostname = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    request.url = "public/index.html";
  } else if (request.url.includes(".css")) {
    request.url = `public${request.url}`;
  } else {
    request.url = request.url.slice(1);
  }

  let extname = String(path.extname(request.url)).toLowerCase();
  let types = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(request.url, (err, data) => {
    if (err) {
      console.log(err);
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end("<h1>Some error find, look the console for details</h1>");
    } else {
      response.writeHead(200, { "Content-Type": types });
      response.end(data, "utf-8");
    }
  });
});

server.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));
