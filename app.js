const fs = require('node:fs/promises');

const content = 'Some content!';

const example = async ()=>{
    try{
        await fs.writeFile('gg.txt',content);
    }
    catch(err)
    {
        console.log(err);
    }
}

example();
