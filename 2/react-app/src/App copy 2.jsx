
// function App() {
//   const departments = [{
//     name: 'Accounting',
//     employees: [
//       {
//         name: 'Taleh 1',
//         salary: 156
//       },
//       {
//         name: 'Venera 1',
//         salary: 851
//       },
//       {
//         name: 'Reyhan 1',
//         salary: 381
//       },
//     ]
//   }, {
//     name: 'Credits',
//     employees: [
//       {
//         name: 'Taleh 2',
//         salary: 712
//       },
//       {
//         name: 'Venera 2',
//         salary: 781
//       },
//       {
//         name: 'Reyhan 2',
//         salary: 981
//       },
//     ]
//   }, {
//     name: 'IT',
//     employees: [
//       {
//         name: 'Taleh 3',
//         salary: 218
//       },
//       {
//         name: 'Venera 3',
//         salary: 211
//       },
//       {
//         name: 'Reyhan 3',
//         salary: 241
//       },
//     ]
//   }];


//   let a = [];

//   for (let department of departments) {
//     let cem = 0;
//     for (let employee of department.employees) {
//       cem = cem + employee.salary;
//     }

//     console.log(department.name, cem)

//     a.push({
//       name: department.name,
//       cem: cem
//     })
//   }


//   return <div>
//     {a.map(item => <h1>{item.name} - {item.cem}</h1>)}
//   </div >








// }

// export default App;




import { useState } from "react";
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div>
      a: <h1>
        {a}
      </h1>
      b: <h1>
        {b}
      </h1>


      <button onClick={() => {
        setA(a + 1)

      }}>button1</button>

      <button onClick={() => {

        setA(a - 1)
      }}>button2</button>


      <button onClick={() => {

       // b=a
       //deyisen operat value
       setB(a)

      }}>button3</button>



    </div>
  )
}

export default App;