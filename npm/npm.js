const chalk = require("chalk");

console.log(chalk.blue('Hello world!'));
console.log(chalk.underline.inverse('Hello world!'));
console.log(chalk.underline('Hello world!'));



const validator = require("validator");
const res = validator.isEmail('faizan@google.com');
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));


const res2 = validator.isEmail('faizangoogle.com');
console.log(res2);
console.log(res2 ? chalk.green.inverse(res2) : chalk.red.inverse(res2));