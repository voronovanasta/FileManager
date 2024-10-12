import { appendFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const filePath = join(dirName, 'files', 'fresh.txt'); 

const create = async () => {
   
    
try {
    // if (existsSync(filePath)){
    //     throw new Error('FS operation failed');
    // }
    // await appendFile(filePath, 'I am fresh and young')
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });


}
catch(err) {
    throw new Error('FS operation failed');
}
};

await create();