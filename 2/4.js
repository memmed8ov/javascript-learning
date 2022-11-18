const a = [2, 4, 8, 12, 24];

c = 0;

for (let i = 0; i < a.length; i++) {
    c = c + a[i] * a[i];
}

console.log(c);