import { exit } from "../commands/exit.js";
import { errorHandler } from "./errorHandler.js";
import { up } from "../commands/up.js";
import { changeDir } from "../commands/changeDir.js";
import { name } from "../../app.js";

export const commandHandler = (command, args) => {
    switch(command) {
        case('.exit'):
        exit(name);
        break;
        case('up'):
        up();
        break;
        case('cd'):
        changeDir(args[0]);
        break;
        default:
            errorHandler('invalid command')
    }
    

}