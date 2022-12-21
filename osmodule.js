const os = require('os');

console.log(os.arch()); // architecture of your os

console.log(os.freemem()); // free ram of your os
console.log(`${os.freemem()/1024/1024/1024}`); // free ram of your os

console.log(os.totalmem()); // total memory of os

console.log(os.hostname()); // host name of os

console.log(os.platform()); // windows, linux etc...

console.log(os.tmpdir()); // directory of os

console.log(os.type());
