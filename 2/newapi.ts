
//  https://api.dictionaryapi.dev/api/v2/entries/en/math
// [18:15, 25.08.2022] Enishte: Bize bele bir API verilib
// [18:15, 25.08.2022] Enishte: sozun definition tapan api
// [18:16, 25.08.2022] Enishte: hello sozunun definition ingilis dilinde tapmag ucun 
// https://api.dictionaryapi.dev/api/v2/entries/en/hello
// muraciet etmek lazimdir 
// fear sozu ucun https://api.dictionaryapi.dev/api/v2/entries/en/fear
// fate sozu ucun https://api.dictionaryapi.dev/api/v2/entries/en/fate
// any sozu ucun https://api.dictionaryapi.dev/api/v2/entries/en/any
// <soz> ucun https://api.dictionaryapi.dev/api/v2/entries/en/<soz>
// [18:17, 25.08.2022] Enishte: gorduyun kimi, https://api.dictionaryapi.dev/api/v2/entries/en/ bu url ardina sozu yazmag lazimdir
// [18:18, 25.08.2022] Enishte: Sual1: 
// showWordDetails(word: string) adinda bir funksia yarad, verilmish soze gore, uygun url muraciet etsin ve onun definition (response) ekrana versin
// [18:18, 25.08.2022] Enishte: Sual 2: 
// response larin icinden phonetic'leri tapib ekrana versin

import axios from "axios"
import { isForInStatement } from "typescript"

let a=0;
async function showWordDetails(word: string) {
    const showWordDetails = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)

    for(let i=0;i<word.length;i++){

a=a+word.

    }

    console.log(showWordDetails.data[0].phonetics.text)
}

showWordDetails('high')
