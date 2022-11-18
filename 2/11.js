const n = 17

for (let i = 1; i < n; i++) {
    let c = true;

    for (let j = 2; j < i - 1; j++) {
        c = c && (i % j !== 0)
    }
    

    if (c) {
        console.log(i)
    }
}