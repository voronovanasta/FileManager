import os from 'os';
import { rl } from '../../../app.js';
import { errorHandler } from '../../utils/errorHandler.js';

const printEndOfLine = () => {
    console.log(`Default system End-Of-Line: ${JSON.stringify(os.EOL)}`)
}

const printCPUSInfo = () => {

    const info = os.cpus().map((el)=> {
        return {
            model: el.model,
            speed: (el.speed/1000).toFixed(2) + ' GHz'
        }
    })
    console.log('');
    console.log('amount of CPUS:  ' + os.cpus().length)
    console.table(info);
    console.log('');
    rl.prompt(); 
}

const printHomeDirectory = () => {
    console.log(`Your home directory: ${os.homedir()}`)
}

const printSystemUserName = () => {
    console.log(`Your system user name: ${os.hostname()}`)
}

const printArchitecture = () => {
    console.log(`Your system user name: ${os.arch()}`)
}

export const operationCommandHandler = (arg) => {
    switch(arg) {
        case '--EOL':
            printEndOfLine();
        break;
        case '--cpus':
            printCPUSInfo();
        break;
        case '--homedir':
            printHomeDirectory();
        break;
        case '--username':
            printSystemUserName();
        break;
        case '--architecture':
            printArchitecture();
        break;
        default:
            errorHandler('invalid command');
    }
}