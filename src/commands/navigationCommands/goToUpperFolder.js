import { cwd, chdir } from 'node:process';
import { dirname } from 'node:path';
import { errorHandler } from '../../utils/errorHandler.js';

export const goToUpperFolder = () => {
    try {
        const currentPath = cwd();
        const target = dirname(currentPath)
        chdir(target);
      } catch (err) {
        console.log(err)
        errorHandler(err.message);
      } 
}
