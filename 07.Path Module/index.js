import path from "path";
import { fileURLToPath } from "url";

// __filename and __dirname are not available by default in ES modules:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("1");
console.log(path.basename(__filename));

console.log("--------------------------------");
console.log("2");
console.log(path.dirname(__filename));

console.log("--------------------------------");
console.log("3");
console.log(path.dirname(__dirname));

console.log("--------------------------------");
console.log("4");
console.log(path.basename("c:\\nodeJs\\test.js")); // test.js

console.log("--------------------------------");
console.log("5");
console.log(path.dirname("c:\\nodeJs\\test.js")); // c:\nodeJs


console.log("--------------------------------");
// omit extenction ✅
console.log("6");
console.log(path.basename(__filename, ".js"));

console.log("--------------------------------");
// Extenction ✅
console.log("7");
console.log(path.extname("c:/nodejs/path/index.js"));
console.log(path.extname(__filename));

console.log("--------------------------------");
// Join✅
console.log("8");
console.log(path.join("/c:", "huxn-webdev", "course", "golang", "structs"));


console.log("--------------------------------");
// Go Up a level ✅
console.log("9");
console.log(
  path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..")
);
console.log(
  path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..", "..")
);




console.log("--------------------------------");
// Normalize ✅
console.log("10");
console.log(path.normalize("c:\\courses\\\\redux-course\\"));
console.log(
  path.normalize("c:\\courses\\\\redux-course\\store\\\features\\..")
);
console.log(path.win32.normalize("C://projects//react///advance-search//"));


console.log("--------------------------------");
// Parse ✅
console.log("11");
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);
console.log(path.parse(__filename).ext);

