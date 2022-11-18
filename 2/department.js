 const departments = [{
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
        },
        {
            name: 'Venera 3',
            salary: 211
        },
        {
            name: 'Reyhan 3',
            salary: 241
        },
    ]
}];
//  Sual 1) 
// Her bir department ve department de ishleyen ishcilerin adlari ve maashlarini bu shekilde ekrana cixarmaq
//  (departament adi, altdan 2 boshluq oturmekle Ishcinin adi  =>  maashi
//  bu shekilde ekrana cixarmag lazimdi (shekilde gorduyun kimi)
//  Sual 2)
// Her bir departamentin adini ve hemin departamentler uzre ishcilerin maashlari cemini tapib cixarmali: 
// Netice:
//  Izah: 1ci departament uzre 156 + 851 + 381 = 1388 bucur hesablayib her bir departament uzre maashlarin cemini tapib adinin yanina yazmali
// Bu arada, ekrana yan yana IT => 670 cixarmag ucun, console.log bele yazmag olur

// let name = 'IT'
// let totalSalary = 670

// console.log(name, '=>', totalSalary)
//  console.log icinde vergulnen neleri yazsan, olari yan yana yazacaq
//  Sual 3)
// Departamentler uzre maashlari tapannan sora, en cox maash olan departamentin adini ve maashini ekrana cixar
//  Netice: Credits => 2474
// Sual 4) 
// Departamentler uzre maashlarinin cemini ekrana cixar 
// Netice: 4532
// Izah: 1388+2474+670 = 4532
//  Sual 5) 
// Butun departamentler uzre en cox maash alan ishcinin adi ve maashi ekrana cixar
// Netice: Reyhan 2 => 981
// let c=0;
// let d=0;
// let r=0;
// for(let i=0;i<departments.length;i++){
  
//    c=departments[i] ;

//    console.log(c.name)

//   for(let j=0;j<c.employees.length;j++){

//     d=c.employees[j]

//     console.log(d.name,'=>',d.salary)
//   }
   


// }




// //4)
// let q=0;
// let e=0;
// for(let i=0;i<departments.length;i++){
  
//     q=departments[i] ;
 
//    console.log(q.name)

// for(let j=0;j<q.employees.length;j++){
//     e=e+q.employees[j].salary
    
    
    
// }



//     }console.log(e)
  
    
// let a=0;
// let b=0;
// for(let i=0;i<departments.length;i++){
// a=a+departments[i].salary


// }console.log(a)

    
















// let j=0;
// let d=0;
// let e=0;
// for(let i=0;i<departments.length;i++){


//    d=d+departments[0].employees[i].salary

//    e=e+departments[1].employees[i].salary
   
//    j=j+departments[2].employees[i].salary

   

// }    
// console.log(d,e,j) 


