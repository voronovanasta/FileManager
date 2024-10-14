import { copyFile } from "./copyFile.js";
import { deleteFile } from "./deleteFile.js";
import { rl } from "../../../app.js";
import { errorHandler } from "../../utils/errorHandler.js";

export const moveFile = async (args) => {
    try{
        await copyFile(args);
        await deleteFile(args[0]);
        rl.prompt(); 
    } catch(err) {
        console.log('move      /n' + err)
        //errorHandler(err.message)
    }

}