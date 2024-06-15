#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )("\n \t <<<=====================================>>>")
);
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )(
    `    ${chalk.bold.cyanBright(
      " \t \t Welcome To Word-Counter App"
    )} `
  )
);
console.log(
  chalk.bold.rgb(
    204,
    204,
    204
  )(" \t <<<======================================>>>")
);

const answers = await inquirer.prompt (
    [
    {
     name:"Sentence",
     type:"input",
     message:"Enter a Sentence:",
     validate: function (value) {
        if (value.trim().length > 0) {
          return true;
        } else {
          return "First Write Somthing";
    }
}
    }
]
);
const words = answers.Sentence.trim().split(" ");
console.log(chalk.bold(" - Sentence Words"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.hex ("#FF6969")(words.length)}`));


