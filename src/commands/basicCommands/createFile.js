import { join } from 'node:path';
import { cwd } from 'node:process';
import { errorHandler } from '../../utils/errorHandler.js';
import { writeFile } from 'node:fs/promises';

export const createFile = async (newName) => {       
try {
    if(!newName) throw new Error('no args');
    const dirName = cwd();
    const filePath = join(dirName, newName); 
    await writeFile(filePath, '', { flag: 'wx' });
}
catch(err) {
    errorHandler(err.message);
}
}