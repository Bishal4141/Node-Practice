import { URL } from "url";

const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");

console.log(myURL.hash);
console.log("--------------------------");
console.log(myURL.host);
console.log("--------------------------");
console.log(myURL.hostname);
console.log("--------------------------");
console.log(myURL.href);
console.log("--------------------------");
console.log(myURL.pathname);
console.log("--------------------------");
console.log(myURL.port);
console.log("--------------------------");
console.log(myURL.protocol);
console.log("--------------------------");
console.log(myURL.search);
console.log("--------------------------");
console.log(myURL.searchParams);
console.log("--------------------------");

// Both works the same 👇
console.log(myURL.toString());
console.log("--------------------------");
console.log(myURL.toJSON());