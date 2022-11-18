interface Departament {
    name: string
    employees: Employee[]
}

interface Employee {
    name: string
    salary: number
}

const departments: Departament[] = [{
    name: 'Accounting',
    employees: [
        {
            name: 'Taleh 1',
            salary: 156
        },
        {
            name: 'Venera 1',
            salary: 851
        },
        {
            name: 'Reyhan 1',
            salary: 381
        },
    ]
}, {
    name: 'Credits',
    employees: [
        {
            name: 'Taleh 2',
            salary: 712
        },
        {
            name: 'Venera 2',
            salary: 781
        },
        {
            name: 'Reyhan 2',
            salary: 981
        },
    ]
}, {
    name: 'IT',
    employees: [
        {
            name: 'Taleh 3',
            salary: 218
        }
    ]
}];

// let c:number=0;
// let d:number=0;

// for(let i=0;i<departments.length;i++){

//    c=departments[i] ;

//    console.log(c.name)

//   for(let j=0;j<c.employees.length;j++){

//     d=c.employees[j]

//     console.log(d.name,'=>',d.salary)
//   }



// }



// for (let i = 0; i < departments.length; i++) {
//     const employees = departments[i].employees

//     let a: number = 0;
//     for (let j = 0; j < employees.length; j++) {
//         a = a + employees[j].salary
//     }
//     console.log(departments[i].name, a)

//     // a = a + departments[i]
// }

// for (let i = 0; i < departments.length; i++) {
//     const employees = departments[i].employees

//     let a: number = 0;
//     for (let j = 0; j < employees.length; j++) {
//         a = a + employees[j].salary
//     }
//     console.log(departments[i].name, a)

//} // a = a + departments[i]








//  Sual 3)
// Departamentler uzre maashlari tapannan sora, en cox maash olan departamentin adini ve maashini ekrana cixar
//  Netice: Credits => 2474

let max = 0;

for (let i = 0; i < departments.length; i++) {
    const emps = departments[i].employees

    let cem = 0;

    for (let j = 0; j < emps.length; j++) {
        cem = cem + emps[j].salary

    }

    if (cem > max) {
        max = cem
    }
}

console.log(max)
