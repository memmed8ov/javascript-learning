import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import axios from 'axios'

export function CitiesOfCountry() {
    const [list, setList] = useState([])

    const params = useParams()

    const itemId = params.id



    function loadCityList() {
        console.log(itemId)
        axios.get('http://tiswork.tisserv.net:8008/city?country=' + itemId + '&limit=1000').then(resp => {
            setList(resp.data.content)
        })
    }

    useEffect(() => {
        loadCityList()
    }, [])

    return <>
        CityofCountry
        <div>

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
                    {list.map(item => <tr>

                        <td>{item.properties.name}</td>
                        <td>{item.properties.description}</td>
                    </tr>
                    )}
                </tbody>

            </table>
        </div>
    </>




}