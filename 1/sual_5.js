let n = 27;

let nn = 0;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log(i)

        nn = nn + i
    }

}

console.log(nn)
