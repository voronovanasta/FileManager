import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { errorHandler } from '../../utils/errorHandler.js';
import { rl } from '../../../app.js';
import { cwd } from 'node:process';


export const readFile = (filePath) => {
    try {
        if(!filePath) throw new Error('no args')
        const pathToRead = join(cwd(), filePath);
        const input = createReadStream(pathToRead);
        input.on('data', (data)=> {
            console.log(data.toString());
            rl.prompt(); 
        })
    }
    catch(err) {
        errorHandler(err.message)
    }

};