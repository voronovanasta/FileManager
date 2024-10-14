import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { join, resolve } from 'node:path';
import { errorHandler } from '../utils/errorHandler.js';
import { cwd } from 'node:process';
import { createBrotliCompress  } from 'node:zlib';

export const compressCommandHandler = async(args) => {
    const compress = createBrotliCompress();
    
    try {
        if(args.length < 2) throw new Error('no args')
        const [fileName, destinationFolderName] = args;
        const pathToFile = join(cwd(), fileName);
        const input = createReadStream(pathToFile);
 
        const pathToFolder = resolve(cwd(), destinationFolderName);
        const pathToCompressedFile = join(pathToFolder, fileName.split('.', 1) + "Compressed.br")
        const output = createWriteStream(pathToCompressedFile);
        await pipeline(input,compress, output)
 
     }
     catch(err) {
         errorHandler(err.message);
     }
}