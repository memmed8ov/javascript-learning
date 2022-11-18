import { sade } from './lib.js'


export function sadehasil(n) {
   let c = 1;
   for (let i = 1; i < n; i++) {
      if (sade(i)) {

         c = c * i

      }


   }
   return c
}

// console.log(sadehasil(5))
