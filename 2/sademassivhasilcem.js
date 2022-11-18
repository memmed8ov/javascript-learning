import { sademassivhasil, massivcem } from "./massiv.js"




let a = [5, 7, 9]


function sademassivhasilcem(a) {

    let d = sademassivhasil(a)
    let e = massivcem(d)
    return e

}
//return massivcem(sademassivhasil(a))
console.log(sademassivhasilcem(a))