interface Person {
    name: string
    weight: number,
    grades: number[]
}

const persons: Person[] = [
    {
        name: 'taleh',
        weight: 88,
        grades: [3, 5, 9]
    },
    {
        name: 'taleh 2',
        weight: 99,
        grades: [2, 1]
    },
    {
        name: 'taleh 3',
        weight: 77,
        grades: [3]
    }
]

// butun grades cemini tap, total total   => Netice: 23

let x = 0;

for (let i = 0; i < persons.length; i++) {
    let r = persons[i].grades[i]
    x = x + r
    let xxx = 123123
}

console.log(x)


