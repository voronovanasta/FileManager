import { exit } from "../commands/exit.js";
import { errorHandler } from "./errorHandler.js";
import { goToUpperFolder } from "../commands/navigationCommands/goToUpperFolder.js";
import { gotoFolderByPath } from "../commands/navigationCommands/gotoFolderByPath.js";
import { name } from "../../app.js";
import { listFolderContent } from "../commands/navigationCommands/listFolderContent.js";
import { readFile } from "../commands/basicCommands/readFile.js";
import { createFile } from "../commands/basicCommands/createFile.js";
import { renameFile } from "../commands/basicCommands/renameFile.js";
import { copyFile } from "../commands/basicCommands/copyFile.js";
import { deleteFile } from "../commands/basicCommands/deleteFile.js";
import { moveFile } from "../commands/basicCommands/moveFile.js";
import { operationCommandHandler } from "../commands/operationCommands/operationCommandHandler.js";
import { logHashOfFile } from "../commands/logHashOfFile.js";
import { compressCommandHandler } from "../commands/compressCommandHandler.js";

export const commandHandler = async (command, args) => {
    switch(command) {
        case('.exit'):
        exit(name);
        break;
        case('up'):
        goToUpperFolder();
        break;
        case('cd'):
        gotoFolderByPath(args[0]);
        break;
        case('ls'):
        listFolderContent();
        break;
        case('cat'):
        readFile(args[0]);
        break;
        case('add'):
        await createFile(args[0]);
        break;
        case('rn'):
        await renameFile(args);
        break;
        case('cp'):
        copyFile(args);
        break;
        case('rm'):
        deleteFile(args[0])
        break;
        case('mv'):
        moveFile(args);
        break;
        case('os'):
        operationCommandHandler(args[0]);
        break;
        case('hash'):
        await  logHashOfFile(args[0]);
        break;
        case('compress'):
        await  compressCommandHandler(args[0]);
        break;

        default:
            errorHandler('invalid command')
    }
    

}