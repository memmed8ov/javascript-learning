
function App() {
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


  let a;
  let b

  for (let department of departments) {
    let cem = 0;
    for (let employee of department.employees) {
      cem = cem + employee.salary;
    }

    console.log(department.name, cem)

    a = department.name;
    b = cem;
  }


return <div>
    {departments.map(department => < div><h1>
      {department.name}
    </h1>

      <h2>{department.employees.map(employee =>
        <h2>
          {employee.salary}
        </h2>

      )}</h2>
    </div>)}
  </div >








}

export default App;



