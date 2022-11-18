// let a = {
//     wheelCount: 5,
//     taleh: "teacher",
//     taleh2: {
//         venera: [
//             {
//                 name:"venera"
//             }
//         ]
//     }

// }
// console.log(a.taleh2.venera[0].name)





// let items=[
//     {
//         name:"taleh",
//         weight:75
//     },
//     {
//         name:"venera",
//         weight: 23
//     },
//     {

//         name:"men",
//         weight: 33
//     }
// ]
// let c=0;
// for(let i=0;i<items.length;i++){

//     c=c+items[i].weight
// }
//console.log(c)
//console.log(items[0].weight+items[1].weight+items[2].weight)










let a = [
    {
        name: "taleh",
        grades: [5, 9, 6, 7]
    },
    {
        name: "venera",
        grades: [5, 7, 6, 8, 12, 13]
    },
    {

        name: "men",
        grades: [9, 6, 5, 7, 13, 15]
    }
]

// k =  {
//    name: "taleh",
//    grades: [5, 9, 6, 7]
// }

function personAvgGrade(k) {
    let q = 0
    // massiv  =>  k.grades
    for (let i = 0; i < k.grades.length; i++) {
        q = q + k.grades[i]
    }

    let orta = q / k.grades.length
    return orta
}

// g = [5, 9, 6, 7]
function personAvgGrade2(g) {
    let q = 0
    // massiv  =>  g
    for (let i = 0; i < g.length; i++) {
        q = q + g[i]
    }

    let orta = q / g.length
    return orta
}

// let b = personAvgGrade(a[0])
let b = personAvgGrade2(a[0].grades)

console.log(b)








// a[0].grades

// let d = 0;
// for (let i = 0; i < a[0].grades.length; i++) {
//     d = d + a[0].grades[i]
// }
// console.log(d)

// let orta = d / a[0].grades.length