import { rl } from '../../app.js';

export const exit = (name) => {
    rl.on('close', () => {
        console.log(`\x1b[35m Thank you for using File Manager, ${name}, goodbye! \n\x1b[0m`);
    })

    rl.close();     
}