let n = 13;

let c = 1;
let a = 1;

for (i = 1; i < n; i++) {
    if (i % 2 == 1) {
        c = c * i
    }

    if (i % 2 == 0) {
        a = a * i
    }
}

console.log(c);
console.log(a);

let f = c - a;
console.log(f);