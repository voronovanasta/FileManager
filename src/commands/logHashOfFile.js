import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { errorHandler } from '../utils/errorHandler.js';
import { cwd } from 'node:process';
import { join } from 'node:path';
import { existsSync } from 'node:fs';
import { rl } from '../../app.js';

export const logHashOfFile = async (fileName) => {
    try {
        if(!fileName) throw new Error('no args')
        const hash = createHash('sha256');
        const dirName = cwd();
        const filePath = join(dirName, fileName); 
        if (!existsSync(filePath)){
        throw new Error('invalid command');
    }
        const fileData = createReadStream(filePath);
        fileData.on('data', (data) => {
        if (data)
          hash.write(data);
          hash.end();
     });

      hash.on('data', (data) => {
       if (data) {
          console.log(data.toString('hex'));
          rl.prompt();
       }
     });
    }
    catch(err) {
        errorHandler(err.message);
    }
};