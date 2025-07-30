import * as fs from "fs/promises";


// 2
// Path is not required 🥂
// try {
//     await fs.mkdir(
//   'C:/Users/b3428/OneDrive/Desktop/Today\'s Practice/08.FS Module/01.Promise API/NodeJs/fs',
//   { recursive: true });
//     console.log("Directory created successfully");
// } catch (error) {
//     console.log(error);
// }


// 1
// Creating Directory - Path should be there. 🥂
// try {
//     await fs.mkdir(
//   'C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise',
//   );
//     console.log("Directory created successfully");
// } catch (error) {
//     console.log(error);
// }



// Read Content of Directory
// try {
//     const files = await fs.readdir('C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs');
//     for (let file of files){
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error);
// }



// Remove Directory 🥂
// try {
//     await fs.rmdir("C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise");
//     console.log("Direrctory Removed.");
// } catch (error) {
//     console.log(error);
// }


// Create and Write File 
// try {
//     await fs.writeFile("C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise.md", "Hello Node JS: ");
// } catch (error) {
//     console.log(error);
// }



// Read File 😊
// try {
//     const data = await fs.readFile('C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\readme.md');
//     console.log(data); // Returns Buffer
//     // console.log(data.toString());  // Data String Format
// } catch (error) {
//     console.log(error);
// }



// try {
//     const data = await fs.readFile('C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\readme.md', 'utf-8');

//     console.log(data); // Data String Format

// } catch (error) {
//     console.log(error);
// }


// Append Data Into File
// try {
//     await fs.appendFile('C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise.md', "\nBishal You are in Love....");
// } catch (error) {
//     console.log(error);
// }


// Copy File 😊
// try {
//     await fs.copyFile('C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise.md', 'C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise_info.txt');
// } catch (error) {
//     console.log(error);
// }



// Get File Information 😊
try {
    const text = await fs.stat('C:\\Users\\b3428\\OneDrive\\Desktop\\Today\'s Practice\\08.FS Module\\01.Promise API\\NodeJs\\fs\\promise_info.txt');
    console.log(text.isDirectory);
    console.log(text.isFile);
    console.log(text.size);
    console.log(text.birthtime);
    console.log(text.ctime);
    console.log(text.mtime);
    console.log(text.atime);
    console.log(text);
} catch (error) {
    console.log(error);
}