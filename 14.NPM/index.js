import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(202, "Good", { "Content-Type": "text/html"});
    res.end("<h1>Hello Bishal This is a class of NPM Tropic</h1>");
});

server.listen(8000,()=>{console.log("Server is running........")});