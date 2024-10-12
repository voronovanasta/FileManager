import { exit } from "../commands/exit.js";
import { errorHandler } from "./errorHandler.js";

export const commandHandler = (command, args) => {
    switch(command) {
        case('.exit'):
        exit(args);
        break;
        default:
            errorHandler('invalid command')
    }
    

}