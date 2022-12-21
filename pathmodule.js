const path = require("path");

console.log(path.dirname("/home/faizanshaikh/Desktop/Day14/pathmodule.js"));

console.log(path.extname("/home/faizanshaikh/Desktop/Day14/pathmodule.js"));

console.log(path.basename("/home/faizanshaikh/Desktop/Day14/pathmodule.js"));

console.log(path.parse("/home/faizanshaikh/Desktop/Day14/pathmodule.js"));

const PathName = path.parse("/home/faizanshaikh/Desktop/Day14/pathmodule.js");
console.log(PathName.name);


