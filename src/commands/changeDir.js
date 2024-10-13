import { chdir } from 'node:process';
import { resolve } from 'node:path';
import { errorHandler } from '../utils/errorHandler.js';

export const changeDir = (newPath) => {
    
    try {
        if(!newPath) throw new Error('no args')
        const resolvedPath = resolve(newPath);
        chdir(resolvedPath);
    } catch(err) {
        errorHandler(err.msg)
    }
    
}