import {readdir} from 'fs/promises'
import { cwd } from 'node:process';
import { errorHandler } from '../../utils/errorHandler.js';
import { rl } from '../../../app.js';

export const  listContent = async() => {
    try{
        const currentPath = cwd(); 
        const content = await readdir(currentPath, {withFileTypes: true});
        const dirNames = content.filter(el => el.isDirectory())
        const fileNames = content.filter(el => el.isFile())
        const allNames = [...dirNames.sort(), ...fileNames.sort()].map((el)=> {
            return {
                Name: el.name,
                Type: el.isDirectory() ? 'directory': 'file'
            }
    
        })
        console.log('');
        console.table(allNames);
        console.log('');
        rl.prompt(); 
    } catch (err) {
        errorHandler(err.message)
    }
    
}