import http from "http";

// Creating Server
const server = http.createServer((req,res)=>{
    // console.log(req);
    // console.log(res);

    // res.statusCode = 404;
    // res.statusMessage = "Bad";
    // res.setHeader("Content-Type", "text/plain");

    // shorthand for status (code, message & header)
  res.writeHead(202, "Good", { "Content-Type": "text/html" });
  res.write("<h1>Hello Bishal </h1>");
  res.end("<h1>This is the end of the Page</h1>");
});

server.listen(8000, ()=>{
    console.log(`Server running on port 8000.`);
});