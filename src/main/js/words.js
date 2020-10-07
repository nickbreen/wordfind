import readline from 'readline'

export default async function (input)
{
    const rlif = readline.createInterface({input});

    const words = [];

    for await (const line of rlif)
    {
        words.push(line.toLocaleLowerCase())
    }

    words.sort()

    return words;
}
