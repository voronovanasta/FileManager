import {readdir} from 'fs/promises'
import { cwd } from 'node:process';
import { errorHandler } from '../utils/errorHandler.js';

export const  listContent = async() => {
    const currentPath = cwd(); 
    const content = await readdir(currentPath);
    const foldersNames = content.filter(el => !el.includes('.')).sort((a,b)=> a-b);
    const filesNames = content.filter(el => el.includes('.')).sort((a,b)=> a-b);
    const allNames = [...foldersNames, ...filesNames].map((el, index)=> {
        return {
            Name: el,
            Type: el.includes('.') ? 'file': 'directory'
        }

    })
    console.table(allNames);
}