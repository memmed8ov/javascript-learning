
let a = [2, 3, 4, 5]
 export  function massivcem(a) {

    let c = 0
    for (let i = 0; i < a.length; i++) {
        c = c + a[i]
    }

    return c

}
console.log(massivcem(a))