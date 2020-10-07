import words from './words.js'
import {createReadStream} from 'fs'

for (const file of process.argv.slice(2))
{
    const readStream = "-" === file ? process.stdin : createReadStream(file);
    const wordlist = await words(readStream)
    console.log(wordlist)
}
