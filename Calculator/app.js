import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { addition, subtraction, division, multiplication, exponential } from "./operation.js";
console.log(figlet.textSync('Calulator'));
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "option",
        message: "Choose the option",
        choices: ["multiplication", "division", "Addition", "Subtraction", "exponential"]
    }
]);
if (answer.option === "exponential") {
    let answerexpo = await inquirer.prompt([{
            type: "number",
            name: "number3",
            message: "Enter number",
        },
        {
            type: "number",
            name: "power",
            message: "Enter the power of that number"
        }]);
    let expo = exponential(answerexpo.number3, answerexpo.power);
    console.log(chalk.green(`The Exponential of ${answerexpo.number3} raise to power ${answerexpo.power} = ${expo}`));
}
else {
    let answer1 = await inquirer.prompt([{
            type: "number",
            name: "number1",
            message: "Enter first number"
        },
        {
            type: "number",
            name: "number2",
            message: "Enter second number"
        },]);
    let num1 = answer1.number1;
    let num2 = answer1.number2;
    if (answer.option === "multiplication") {
        let multi = multiplication(num1, num2);
        console.log(chalk.bgBlue(`The product of ${answer.number1} and ${answer.number2} = ${multi}`));
    }
    else if (answer.option === "Addition") {
        let add = addition(num1, num2);
        console.log(chalk.bgGreen(`The Sum of ${answer.number1} and ${answer.number2} = ${add}`));
    }
    else if (answer.option === "division") {
        let div = division(num1, num2);
        console.log(chalk.bgYellow(`The division of ${answer.number1} and ${answer.number2} = ${div}`));
    }
    else if (answer.option === "subtraction") {
        let sub = subtraction(num1, num2);
        console.log(chalk.bgMagentaBright(`The subtraction of ${answer.number1} and ${answer.number2} = ${sub}`));
    }
}
