import inquirer from "inquirer";
import axios from "axios";

console.log("This program needs your Discord token to work.\n");

const auth = await inquirer.prompt({
    name: "discordToken",
    type: "input",
    message: ">> "
});

console.log("This program needs the channel ID of the channel you want the program to run in\n")

const channelToType = await inquirer.prompt({
    name: "channelID",
    type: "input",
    message: ">> "
});