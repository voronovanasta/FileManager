import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { printGreeting } from './src/commands/printGreeting.js';
import { exit } from './src/commands/exit.js';
import { commandHandler } from './src/utils/commandHandler.js';
import { printCurrentWorkingDirectory } from './src/utils/printCurrentWorkingDirectory.js';
import os from 'os';

export const rl = readline.createInterface({ input, output });
rl.prompt();
export const name = printGreeting();
rl.on('line', async (line) => {
    //console.log(`Received: ${line}`);
    const [command, ...args] = line.trim().split(' ')
    await commandHandler(command, args);
    printCurrentWorkingDirectory();
    rl.prompt();
  }); 

  rl.on('SIGINT', () => {
    rl.prompt();
    exit(name);
  })

  
  
 