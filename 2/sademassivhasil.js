import { sadehasil } from './sadehasil.js'

let a = [5, 7, 9];
 import  function sademassivhasil(a) {
    let b = a.map(x => sadehasil(x))
    return b
}

console.log(sademassivhasil(a))