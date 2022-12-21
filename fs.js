const fs = require("fs");

fs.writeFileSync("fsread.txt", "Welcome");

fs.writeFileSync("fsread.txt", "Hello from file system module to fsread.txt \n"); // will change the above statement to new string

fs.appendFileSync("fsread.txt", "Hello from append file, will add statement without deleting the previous statement")

const buf_data = fs.readFileSync("fsread.txt");
 console.log(buf_data); // will store binary data

 const buf_toString = fs.readFileSync("fsread.txt");
 console.log(buf_toString.toString()); // will convert binary data to string

 fs.renameSync("fsread.txt", "fsreadwrite.txt");