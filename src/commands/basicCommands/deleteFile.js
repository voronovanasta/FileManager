import {rm} from 'fs/promises'
import { join } from 'node:path';
import { cwd } from 'node:process';
import { errorHandler } from '../../utils/errorHandler.js';

export const deleteFile = async (name) => {
    try {
        if(!name) throw new Error('no args');
        const dirName = cwd();
        const filePath = join(dirName, name); 
        await rm(filePath);
    }
    catch(err) {
        console.log('delete      /n' + err)
        //errorHandler(err.message);
    }
};