import { argv } from 'node:process';
import {stdout as output } from 'node:process';
import { errorHandler } from '../utils/errorHandler.js';

export const greeting = () => {
     try{
          const name = argv[2].slice(11) || 'Guest';
          output.write(`\x1b[35m Welcome to the File Manager, ${name}! \n\x1b[0m`);

          return name;
     }
     catch(err) {
          errorHandler(err.message);
     }
     
};

