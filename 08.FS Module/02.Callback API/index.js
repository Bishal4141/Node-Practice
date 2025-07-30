import * as fs from 'fs';

// Creating Directory 
// fs.mkdir("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem",(error)=> {
//     if (error) throw error;
//     console.log("Directory Created.....");
// });


// Creating Directory - Path not required
// fs.mkdir("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\demo", { recursive: true }, (error) => {
//   if (error) throw error;
//   console.log("Directory Created...");
// });


// read content of Directory
// fs.readdir("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test", (error, files) => {
//   if (error) throw error;
//   for (const file of files) {
//     console.log(file);
//   }
// });



// Remove Directory - Directory should be empty.
// fs.rmdir("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\demo", (error) => {
//   if (error) throw error;
//   console.log("Directory Removed");
// });



// Create & Write File
// fs.writeFile("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\readme.txt", "Hello Nodejs", (error) => {
//   if (error) throw error;
//   console.log("File Created ...");
// });


// Read File
// fs.readFile("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\readme.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });



// Append data into file
// fs.appendFile("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\readme.txt", "\nBishal Pal", (error) => {
//   if (error) throw error;
//   console.log("Data Appended ...");
// }
// );


// Copy File
// fs.copyFile("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\readme.txt", "C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\info.txt", (error) => {
//   if (error) throw error;
//   console.log("File Copied ...");
// });



// Get file information
fs.stat("C:\\Users\\b3428\\OneDrive\\Desktop\\Today's Practice\\08.FS Module\\02.Callback API\\filesystem\\test\\info.txt", (error, stats) => {
  if (error) throw error;
  console.log(stats.isDirectory());
  console.log(stats.isFile());
});