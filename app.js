#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.bold.bgYellow("\n\t CURRENCY CONVERTER \t\n"));
const currency = {
    "USD": "1", // United States Dollar //also base currency
    "PKR": "278.65", //Pakistan Rupee
    "EUR": "0.94", // Euro
    "GBP": "0.81", // British Pound Sterling
    "JPY": "154.60", // Japanese Yen
    "AUD": "1.56", // Australian Dollar
    "CAD": "1.37", // Canadian Dollar
    "CHF": "0.91", // Swiss Franc
    "CNY": "7.24", // Chinese Yuan
    "NZD": "1.70" // New Zealand Dollar
};
//inquirer used to command line interface
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select your Currency:",
        choices: ["USD", "PKR", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "NZD"]
    },
    {
        name: "to",
        type: "list",
        message: "Select Currency to convert:",
        choices: ["USD", "PKR", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "NZD"]
    },
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
    }
]);
//when i select USD so work like this 
//currency[USD]
const fromCurrency = currency[userAnswer.from]; //exchenge rate
//currency [PRK]
const toCurrency = currency[userAnswer.to]; //exchange rate
const currencyAmount = userAnswer.amount;
if (isNaN(fromCurrency) || isNaN(toCurrency) || isNaN(currencyAmount)) {
    console.error(chalk.red.bold.italic("Invalid input. Please enter valid numbers."));
}
else { //any ammount convert to base amount (USD)
    const baseCurrency = currencyAmount / fromCurrency; //USD base currency..//when currency convert to another currency so divide original currency to exchange currency.
    const convertedCurrrency = baseCurrency * toCurrency;
    console.log(chalk.bold.green("Your converted currency:") + (` ${convertedCurrrency.toFixed(2)}`));
}
// console.log(fromCurrency);
// console.log(toCurrency);
// console.log(amount);
