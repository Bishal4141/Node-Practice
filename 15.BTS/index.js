// Blocking Code
// console.log("Start");
// // alert("Block");
// console.log("Block");
// console.log("End");

// console.log("-------------------------------------");
// 👉- Non-Blocking 👈
// console.log("Start");
// setTimeout(() => {
    //     // alert("Non Blocking);
    //   console.log("Non-Blocking");
    // }, 1000);
    // console.log("End");
// console.log("-------------------------------------");



// Without CallBack 
// import * as fs from 'fs';
// console.log("Start");

// let data = fs.readFileSync("text.txt");
// console.log(data.toString());
// console.log("End"); 




// -------------------------------------
// With Callback

import fs from 'fs';

console.log();

console.log("Program Start");

fs.readFile("./text.txt", (err, res) =>
  err ? console.log(err) : console.log(res.toString())
);

console.log("Program End");






