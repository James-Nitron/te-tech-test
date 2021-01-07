
import readline from "readline";
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.blue("Please provide the number of items to display in an array? "), items => {
    if (!items || isNaN(items) || items < 0) { console.log(chalk.red('Error: Please provide a number greater than or equal to 0.')), rl.close()  } // Check if string is not a number and is not less than 0 else error and rl.close
        rl.question(chalk.blue("Please provide a number to divide the array into equally sized arrays. "), divide => {
            if (!divide || isNaN(divide) || divide <= 0 || divide > items) { return console.log(chalk.red('Error: Please provide a number greater than 0 and less than the number of items in the array.')), rl.close() } // Check if string is not a number and is not less than or equal to 0 else error and rl.close
            chunk(parseInt(items), parseInt(divide))
        });
});

const chunk = (items, divide) => { 
    const array = Array(items).fill().map((_, i) => i); // Create an array of numbers based on the length passed as the items param
    let result = [];
    for (let i = divide; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    console.log(chalk.green(JSON.stringify(result)));
    rl.close();
}

rl.on("close", () => process.exit(0));
