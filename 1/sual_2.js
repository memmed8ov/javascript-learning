let a = 1;

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        a = a + i;
    }
    if (i % 7 == 0) {
        a = a - i;
    }
    else {
        // console.log('step 1 ', a, i)

        a = a + i * i;

        // console.log('step 2', a, i)
    }
}

console.log(a);