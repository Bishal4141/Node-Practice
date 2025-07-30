import path from "path";
import greetings from "./greetings.js";
import { person1, person2, person3 } from "./peoples.js";

import addition from "./add.js";

const fullPath = "C://Users//b3428//OneDrive//Desktop//Today's Practice//ES6 Import";

// Use path.basename() to get the last part of the path
const baseName = path.basename(fullPath);

console.log(baseName);

greetings("Bishal");
greetings("Subhadip");
greetings("Sathi");
console.log("----------------------");

console.log(person1);
console.log(person2);
console.log(person3);
console.log("----------------------");

greetings(person1);
greetings(person2);
greetings(person3);
console.log("----------------------");

console.log(`Addition Result : ${addition(23,25)}`);



