const x1 = 12;
const x2 = 21;
const x3 = 22;
const x4 = 21;
const x5 = 77;
const x6 = 77;

let x = [12, 21, 22, 21, 77, 77]

x.push(99)
x.push(99)
x.push(99)
x.push(99)

x.unshift(99999)

console.log(x)

console.log(x.shift())

// x = [...x.slice(0,3), 7777, ...x.slice(3)]


console.log(x)


// console.log(x);

// console.log(x.length)