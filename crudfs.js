// CRUD Operations
// create
// read
// update
// delete

const fs = require("fs");

// fs.mkdirSync("fs_makedirectory"); will create a directory 

fs.writeFileSync("fscrud.txt", "this is a crud operation");
fs.writeFileSync("fscrud.txt", "this will change the above statement \n");
fs.appendFileSync("fscrud.txt", "This will wont clear the above statement");

const data = fs.readFileSync("fscrud.txt");
console.log(data); //result in buffer

const str_data = fs.readFileSync("fscrud.txt");
console.log(str_data.toString()); // will convert buffer to string


fs.unlinkSync("fscrud.txt"); //deleted the file

fs.rmdirSync("fs_makedirectory"); // deleted the folder fs_makedirectory