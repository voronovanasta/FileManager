import { stdout as output } from 'node:process';
import { rl } from '../../app.js';

export const exit = (name) => {
    rl.on('close', () => {
        output.write(`\x1b[35m Thank you for using File Manager, ${name}, goodbye!\n \n\x1b[0m`);
    })

    rl.close();     
}