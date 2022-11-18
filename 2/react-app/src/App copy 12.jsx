import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [add, setAdd] = useState('')
  const [show, setShow] = useState('')
  const [itemid, setItemId] = useState('')
  const [nameup, setNameUp] = useState('')
  const [lastNameup, setLastNameUp] = useState('')
  const [ageup, setAgeUp] = useState('')
  const [genderup, setGenderUp] = useState('')
  useEffect(() => {
    axios.get('http://tiswork.tisserv.net:8008/person?limit=1000')
      .then(proper => {
        setData(proper.data.content)
      })
  }, [])
  return (
    <div>
      <button onClick={() => {
        setAdd(true)
      }} style={{ width: "100px", height: "50px", backgroundColor: 'grey' }}>add</button>
      <br />
      <br />
      {add && <div>
        <input placeholder='name' type="text" value={name} onChange={e => setName((e.target.value))} />
        <br />
        <br />
        <input placeholder='lastName' type="text" value={lastName} onChange={e => setLastName((e.target.value))} />
        <br />
        <br />
        <input placeholder='age' type="number" value={age} onChange={e => setAge(parseInt(e.target.value))} />
        <br />
        <br />
        <input placeholder='gender' type="text" value={gender} onChange={e => setGender((e.target.value))} />
        <br />
        <br />
        <button onClick={() => {
          let object = {
            "properties": {
              "age": age,
              "gender": gender,
              "lastName": lastName,
              "name": name
            }
          }
          axios.post('http://tiswork.tisserv.net:8008/person', object).then(proper => {
            axios.get('http://tiswork.tisserv.net:8008/person?limit=1000')
              .then(proper => {
                setData(proper.data.content)
              })
          })
        }}
          style={{ width: "100px", height: "50px", color: 'green', backgroundColor: 'black' }}>create</button>
      </div>}
      {show && <div>
        <input placeholder='name' type="text" value={nameup} onChange={e => setNameUp((e.target.value))} />
        <br />
        <br />
        <input placeholder='lastName' type="text" value={lastNameup} onChange={e => setLastNameUp((e.target.value))} />
        <br />
        <br />
        <input placeholder='age' type="number" value={ageup} onChange={e => setAgeUp(parseInt(e.target.value))} />
        <br />
        <br />
        <input placeholder='gender' type="text" value={genderup} onChange={e => setGenderUp((e.target.value))} />
        <br />
        <br />
        <button onClick={() => {
          setShow(false)
          let object = {
            "id": "717ee164-5927-11ed-adf5-7c10c91d547f",
            "resource": "person",
            "type": "USER",
            "properties": {
              "age": ageup,
              "gender": genderup,
              "lastName": lastNameup,
              "name": nameup
            },
            "references": null,
            "auditData": {
              "createdOn": "2022-10-31T14:22:26.109067Z",
              "updatedOn": "2022-10-31T14:22:26.109067Z",
              "createdBy": "test-user",
              "updatedBy": ""
            },
            "version": 1
          }
          axios.put('http://tiswork.tisserv.net:8008/person/' + itemid, object)
        }
        } style={{ width: "100px", height: "50px" }}>
          update</button>
      </div>}
      <br />
      <table className='container table bordered table-danger'>
        <thead>
          <tr>
            <th>name</th>
            <th>lastName</th>
            <th>age</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>{data.map(item =>
          <tr><td>{item.properties.name}</td>
            <td>{item.properties.lastName}</td>
            <td>{item.properties.age}</td>
            <td>{item.properties.gender}</td>
            <td>
              <button onClick={() =>
                axios.delete('http://tiswork.tisserv.net:8008/person/' + item.id).then(proper => {
                  axios.get('http://tiswork.tisserv.net:8008/person?limit=1000')
                    .then(proper => {
                      setData(proper.data.content)
                    })
                })} style={{ width: "100px", height: "50px" }}>delete</button>
              <button onClick={() => {
                setNameUp(item.properties.name)
                setLastNameUp(item.properties.lastName)
                setAgeUp(item.properties.age)
                setGenderUp(item.properties.gender)
                setItemId(item.id)
                setShow(true)
              }} style={{ width: "100px", height: "50px" }}>crud</button>
            </td></tr>)
        }</tbody>
      </table>
    </div>
  )
}
export default App;

