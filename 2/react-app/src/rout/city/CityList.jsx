import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function CityList() {
    const navigate = useNavigate()
    const [cities, setCities] = useState([])


    function loadCityList() {

        axios.get('http://tiswork.tisserv.net:8008/city?limit=1000')
            .then(resp => {
                setCities(resp.data.content)
            })

    }
    useEffect(() => {
        loadCityList()

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

                        <th>
                            country
                        </th>

                    </tr>
                </thead>

                <tbody style={{ backgroundColor: 'grey', width: '50px' }}>
                    {cities.map(cityItem => <tr>

                        <td>{cityItem.properties.name}</td>
                        <td>{cityItem.properties.description}</td>
                        <td>{cityItem.properties.country}</td>

                        <td>
                            <button onClick={() => {
                                axios.delete("http://tiswork.tisserv.net:8008/city/" + cityItem.id).then(resp => {
                                    loadCityList()
                                })
                            }}
                                style={{ backgroundColor: 'black', color: 'white' }}>x</button>

                            <button onClick={() => {
                                navigate(cityItem.id + '/update')
                            }} style={{ backgroundColor: 'black', color: 'white' }}>redact</button>

                            <button onClick={() => {
                                navigate('../country-page/' + cityItem.properties.country + '/cities')
                            }} style={{ backgroundColor: 'black', color: 'white' }}>similar cities</button>

                        </td>

                    </tr>
                    )}
                </tbody>

            </table>
        </div>

    </>
}

// abstraction
