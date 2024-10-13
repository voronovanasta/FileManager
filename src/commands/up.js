import { cwd, chdir } from 'node:process';
import { errorHandler } from '../utils/errorHandler.js';

export const up = () => {
    try {
        const currentPath = cwd();
        const index = currentPath.lastIndexOf('\\');
        const target = currentPath.slice(0, index + 1)
        chdir(target);
      } catch (err) {
        errorHandler(err.message);
      } 
}
