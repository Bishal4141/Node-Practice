import {EventEmitter} from 'events';


// Code 1 Without callBack Function
// const customEmitter = new EventEmitter();
// customEmitter.on("response", (name, id) => {
//   console.log(`Data recieved user ${name} with: ${id}`);
// });

// customEmitter.emit("response", "Bishal", 1);
// customEmitter.emit("response", "Bhusan", 2);
// customEmitter.emit("response", "Bhuvi", 3);


// Code 2 WithOut CallBack Function
// const customEmitter = new EventEmitter();
// customEmitter.once("response", (name, id) => {
//   console.log(`Data recieved user ${name} with: ${id}`);
// });

// customEmitter.emit("response", "Bishal", 1);
// customEmitter.emit("response", "Bhusan", 2);
// customEmitter.emit("response", "Bhuvi", 3);



// Code 3 With callBack Function
// const customEmitter = new EventEmitter();
// customEmitter.on("response", (name, id) =>{
//     console.log(`Data recieved user ${name} with: ${id}`);
//     console.log("Bishal You are Great");
// });

// customEmitter.emit("response", "Bishal", 1);
// customEmitter.emit("response", "Bhusan", 2);
// customEmitter.emit("response", "Bhuvi", 3);



// Code 4 with callBack Function
const customEmitter = new EventEmitter();
customEmitter.once("response", (name, id) =>{
    console.log(`Data recieved user ${name} with: ${id}`);
    console.log("Bishal You are Great");
});

customEmitter.emit("response", "Bishal", 1);
customEmitter.emit("response", "Bhusan", 2);
customEmitter.emit("response", "Bhuvi", 3);