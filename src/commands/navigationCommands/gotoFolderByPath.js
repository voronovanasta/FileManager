import { chdir } from 'node:process';
import { normalize } from 'node:path';
import { errorHandler } from '../../utils/errorHandler.js';

export const gotoFolderByPath = (newPath) => {
    
    try {
        if(!newPath) throw new Error('no args')
        const resolvedPath = normalize(newPath);
        chdir(resolvedPath);
    } catch(err) {
        errorHandler(err.msg)
    }
    
}