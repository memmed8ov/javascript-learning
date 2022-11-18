export interface Departament {
    name: string
    employees: Employee[]
    maasCem: number
}

interface Employee {
    name: string
    salary: number
}

const departments: Departament[] = [{
    name: 'Accounting',
    maasCem: 0,
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
    maasCem: 0,
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
    maasCem: 0,
    employees: [
        {
            name: 'Taleh 3',
            salary: 218
        }
    ]
}];

for (let i = 0; i < departments.length; i++) {
    const emps = departments[i].employees

    let cem = 0;

    for (let j = 0; j < emps.length; j++) {
        cem = cem + emps[j].salary
    }

    departments[i].maasCem = cem    
}


let maxName = ''
let max = 0;

for (let i = 0; i < departments.length; i++) {
    if (departments[i].maasCem > max) {
        max = departments[i].maasCem
        maxName = departments[i].name
    }
}

console.log(maxName, max)