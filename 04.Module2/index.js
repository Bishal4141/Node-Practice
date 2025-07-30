import greetings from "./greetings.js";
import {person1, person2, person3} from "./peoples.js";
import {num1, num2, num3} from "./number.js";
import calculate from "./calculate.js";

greetings("Bishal");
greetings("Alex");
greetings("Shubham");
console.log("----------------------------");

console.log(person1);
console.log(person2);
console.log(person3);
console.log("----------------------------");

greetings(person1);
greetings(person2);
greetings(person3);
console.log("----------------------------");

console.log(num1);
console.log(num2);
console.log(num3);
console.log("----------------------------");

calculate(3,6);
calculate(4,5);
console.log("----------------------------");

calculate(num1, num2);
calculate(num1, num3);  
