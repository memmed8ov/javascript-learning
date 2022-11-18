import { useState } from 'react'

function App() {
  const [a, setA] = useState([{
    name: 'Taleh',
    code: 'taleh123'
  }, {
    name: 'Venera',
    code: 'venera123',
  }, {
    name: 'Reyhan',
    code: 'reyhan123',
  }]);

  // for (let bu of a) {
  //   console.log(bu.name, bu.code)

  //   for (let grade of bu.grades) {
  //     console.log(grade);
  //   }
  // }
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  return (

    <div>
      <br />
      <div className='container border bordered'>
        <br />
        Name: <input type="text" value={name} onChange={e => setName((e.target.value))} />
        <br />
        <br />
        Code:<input type="text" value={code} onChange={e => setCode((e.target.value))} />
        <br />
        <br />
        <button onClick={() => {
          
          if (name == '') {
            alert("doldur")
          }
        else{setA([...a, {
          name: name,
          code: code
        }])
}
        }}

          className='btn btn-success'>add</button>
        <br />
        <br />
      </div>





      <br /><br /><br />

      <table className="container table bordered">
        <thead>
          <tr>
            <th>name</th>
            <th>code</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody> {a.map(item =>
          <tr >
            <td>{item.name}</td>
            <td>{item.code}</td>
            <td><button onClick={(sil) => {
              setA(a.filter(y => y != item))
            }}>x</button></td>

          </tr>)}

        </tbody>

      </table>
    </div>
  )
}

export default App;
