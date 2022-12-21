const fs = require("fs");

// fs.writeFileSync() will not require a callback function
fs.writeFile('readFsAsync.txt', "This is an Asynchronous file system ",(err) => {
    console.log("file is created \n")
});

fs.appendFile("readFsAsync.txt", "This will add another statement to readFsAsync.txt", (err) => {
    console.log("task completed");
});

fs.readFile("readFsAsync.txt","utf-8", (err, data) => {
    console.log(data);
});