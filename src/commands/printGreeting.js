import {stdout as output } from 'node:process';
import { errorHandler } from '../utils/errorHandler.js';

export const printGreeting = () => {
     try{
          const name = process.env.npm_config_username || 'Guest';
          output.write(`\x1b[35m Welcome to the File Manager, ${name}! \n\x1b[0m`);
          return name;
     }
     catch(err) {
          errorHandler(err.message);
     }
     
};

