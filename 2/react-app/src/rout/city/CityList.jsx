import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function CityList() {
    const navigate = useNavigate()
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

    return < >
        City Page
        <div style={{ backgroundColor: 'grey' }}>
            <br />
            <button onClick={() => {
                navigate('new')
            }} style={{ width: "80px", height: "40px", marginLeft: '50px', backgroundColor: 'green', borderRadius: '50px' }}>New</button>

             <br />
             <br />

            <table className='container table bordered table-grey'>

                <thead style={{ borderWidth: '10px' }}>
                    <tr>
                        <th>
                            name
                        </th>

                        <th>
                            code
                        </th>


                    </tr>
                </thead>

                <tbody style={{ backgroundColor: 'grey', width: '50px' }}>
                    {data.map(item => <tr>

                        <td>{item.properties.name}</td>
                        <td>{item.properties.description}</td>

                        <td>
                            <button onClick={() => {
                                axios.delete("http://tiswork.tisserv.net:8008/country/" + item.id).then(resp => {


                                    allcode()

                                })
                            }}
                                style={{ backgroundColor: 'black', color: 'white' }}>x</button>

                            <button onClick={() => {
                                    navigate(item.id + '/update')
                            }} style={{ backgroundColor: 'black', color: 'white' }}>redact</button>

                        </td>

                    </tr>
                    )}
                </tbody>

            </table>
        </div>

    </>}