import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { greeting } from './src/commands/greeting.js';
import { exit } from './src/commands/exit.js';
import { commandHandler } from './src/utils/commandHandler.js';
import { printCWD } from './src/utils/printCWD.js';
import os from 'os';

export const name = greeting();

export const rl = readline.createInterface({ input, output });

rl.on('line', (line) => {
    //console.log(`Received: ${line}`);
    const [command, ...args] = line.trim().split(' ')
    commandHandler(command, args);
    printCWD()
  }); 

  rl.on('SIGINT', () => {
    exit(name);
  })

  
  
 