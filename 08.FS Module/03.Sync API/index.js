import * as fs from 'fs';

// Creating Directory
// fs.mkdirSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem");



// Creating Directory - Path not required
// fs.mkdirSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test\\demo", {recursive: true});



// Read content of directory
// const files = fs.readdirSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test");
// for (const file of files) {
//   console.log(file);
// }


// Remove Directory - Directory should be empty.
// fs.rmdirSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test\\demo");


// Create & Write File
// fs.writeFileSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test\\readme.txt", "Hello Nodejs");


// Read File
// const result = fs.readFileSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test\\readme.txt", "utf-8");
// console.log(result);


// Append data into file
// fs.appendFileSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test\\readme.txt", "\nBishal Pal");


// Copy File
// fs.copyFileSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\test\\readme.txt", "C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\info.txt");


// Get file information
const stats = fs.statSync("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\03.Sync API\\filesystem\\info.txt");
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);
console.log(stats.size);
console.log(stats.birthtime);
console.log(stats.birthtimeMs);
console.log(stats.atime);
console.log(stats.atimeMs);
console.log(stats.ctime);
console.log(stats.ctimeMs);
console.log(stats.mtime);
console.log(stats.mtimeMs);
console.log(stats.mode);