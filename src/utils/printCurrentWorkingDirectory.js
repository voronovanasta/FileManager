import { cwd } from 'node:process';
import { errorHandler } from './errorHandler.js';
import {stdout as output } from 'node:process';

export const printCurrentWorkingDirectory = () => {
    try{
         output.write(`\x1b[36m You are currently in ${cwd()} \n\x1b[0m`);
    }
    catch(err) {
         errorHandler(err.message);
    }
    
}