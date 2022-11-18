let n = 97;

for (i = 1; i < n; i++) {
    // if ((i % 7 == 0) && !(i % 9 == 0)) {
    //     console.log(i);
    // }

    if ((i % 7 == 0) && (i % 9 != 0)) {
        console.log(i);
    }
}
