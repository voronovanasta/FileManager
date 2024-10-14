import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { join, resolve } from 'node:path';
import { errorHandler } from '../utils/errorHandler.js';
import { cwd } from 'node:process';
import { createBrotliDecompress  } from 'node:zlib';

export const decompressCommandHandler = async(args) => {
    const decompress = createBrotliDecompress();
    
    try {
        if(args.length < 2) throw new Error('no args')
        const [fileName, destinationFolderName] = args;
        const pathToFile = join(cwd(), fileName);
        const input = createReadStream(pathToFile);
 
        const pathToFolder = resolve(cwd(), destinationFolderName);
        const pathToDecompressedFile = join(pathToFolder, fileName.split('.', 1) + "Decompressed.txt")
        const output = createWriteStream(pathToDecompressedFile);
        await pipeline(input, decompress, output)
 
     }
     catch(err) {
         errorHandler(err.message);
     }
}