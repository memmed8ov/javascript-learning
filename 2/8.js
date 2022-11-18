const a = [4, 1, 9,-6, 12]

let c = true;

for (let i = 0; i < a.length; i++) {
    c = c && (a[i] > 0)
}

if (c) {
    console.log('musbetdir')
} else {
    console.log('musbet deyil')
}
// cont func =()=>{}
// let func =function (){}