import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream, existsSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { errorHandler } from '../../utils/errorHandler.js';
import { cwd } from 'node:process';

export const copyFile = async (args)=> {
    try {
       if(args.length < 2) throw new Error('no args')
       const [fileName, pathToFolderName] = args;
       const pathToFile = join(cwd(), fileName);
       const input = createReadStream(pathToFile);

       const pathToFolder = resolve(cwd(), pathToFolderName);
       const pathToCopiedFile = join(pathToFolder, fileName)
       const output = createWriteStream(pathToCopiedFile);
       await pipeline(input, output)

    }
    catch(err) {
        errorHandler(err.message);
    }
}
