import inquirer from "inquirer";
import axios from "axios";

console.log("This program needs your Discord token to work.\n");

const auth = await inquirer.prompt({
    name: "discordToken",
    type: "input",
    message: ">> "
});