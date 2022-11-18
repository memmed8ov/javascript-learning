import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])



  function allcode() {

    axios.get('http://tiswork.tisserv.net:8008/country?limit=1000')
      .then(resp => {
        setData(resp.data.content)
      })

  }








  useEffect(() => {
    allcode()

  }, [])

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')



  const [nameupdate, setNameupdate] = useState('')
  const [descupdate, setDescupdate] = useState('')
  const [itemId, setItemId] = useState('')
  const [showDate, setshowDate] = useState(false)
  const [addate, setadDate] = useState(false)

  return (
    <div>
      <button onClick={()=>{
        setadDate(true)
       
      }
      
      
      
      }>Adding</button>
      {addate &&<div style={{ margin: "20px" }}>

        Name:<input type="text" value={name} onChange={e => setName((e.target.value))} />
        <br />
        <br />
        Desc:<input type="text" value={desc} onChange={e => setDesc((e.target.value))} />
        <br />
        <br />

        Add:<button onClick={() => {
          let object = {


            "properties": {
              "description": desc,
              "name": name

            }
          }


          axios.post('http://tiswork.tisserv.net:8008/country', object).then(resp => {

            allcode()


          })



        }} style={{ width: "100px", height: "50px" }}></button>
      </div>}


      <br />
      <br />



      {showDate && <div style={{ margin: "20px" }}>

        Name:<input type="text" value={nameupdate} onChange={e => setNameupdate((e.target.value))} />
        <br />
        <br />
        Desc:<input type="text" value={descupdate} onChange={e => setDescupdate((e.target.value))} />
        <br />
        <br />


        <button onClick={() => {

          setshowDate(false)

          let object = {



            "id": "d425b5b7-57c7-11ed-adf5-7c10c91d547f",
            "resource": "country",
            "type": "USER",
            "properties": {
              "description": descupdate,
              "name": nameupdate
            },
            "relations": null,
            "auditData": {
              "createdOn": "2022-10-29T20:25:28.770297Z",
              "updatedOn": "2022-10-29T20:25:28.770297Z",
              "createdBy": "test-user",
              "updatedBy": ""
            },
            "version": 1
          }





          axios.put('http://tiswork.tisserv.net:8008/country/' + itemId, object).then(resp => {




          })



        }} style={{ width: "100px", height: "50px" }}> update</button>
      </div>}







      <table className='container table bordered table-success'>
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>

        <tbody>
          {data.map(item => <tr>
            <td>{item.properties.name}</td>
            <td>{item.properties.description}</td>
            <td>
              <button onClick={() => {


                axios.delete("http://tiswork.tisserv.net:8008/country/" + item.id).then(resp => {


                  allcode()

                })

              }}
              >x</button>


              <button onClick={() => {

                setNameupdate(item.properties.name)
                setDescupdate(item.properties.description)
                setItemId(item.id)


                setshowDate(true)



              }


              }>

                redact</button>
            </td>


          </tr>)}
        </tbody>

      </table>

    </div>

  );

}

export default App;

