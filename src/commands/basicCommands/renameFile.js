import {rename} from 'fs/promises'
import { cwd } from 'node:process';
import { join } from 'node:path';
import { errorHandler } from '../../utils/errorHandler.js';

export const renameFile = async (args) => {
    
    try{
        if(args.length < 2) throw new Error('no args')
        const oldPath = join(cwd(), args[0]); 
        const newFilePath = join(cwd(), args[1])
        await rename(oldPath, newFilePath)
    }
    catch(err) {
        errorHandler(err.message)
    }
};