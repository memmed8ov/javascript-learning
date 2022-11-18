const a = [4, 1, 8, 9, 1]

// cem:  1*4 + 2*1 + 3*8 + 4*9 + 5*1


let c = 0;

c = c + 1 * 4
c = c + 2 * 1
c = c + 3 * 8
c = c + 4 * 9
c = c + 5 * 1

for (let i = 0; i < a.length; i++) {
    c = c + i * a[i]
}
