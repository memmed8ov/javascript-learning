import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export function CityUpdate() {
    const navigate = useNavigate()
    const params = useParams()

    const itemId = params.id

    const [nameupdate, setNameUpdate] = useState('')
    const [descriptionupdate, setDescriptionUpdate] = useState('')

    const [countryId, setCountryId] = useState()
    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        axios.get('http://tiswork.tisserv.net:8008/city/' + itemId).then(resp => {
            setNameUpdate(resp.data.Record.properties.name)
            setDescriptionUpdate(resp.data.Record.properties.description)
        })

        axios.get('http://tiswork.tisserv.net:8008/country').then(resp => {
            setCountryList(resp.data.content)
        })
    }, [])

    return <>
        <div style={{ margin: "20px" }}>

            <input type="text" style={{ marginLeft: '30px' }} value={nameupdate} onChange={e => setNameUpdate((e.target.value))} />
            <br />
            <br />
            <input type="text" style={{ marginLeft: '30px' }} value={descriptionupdate} onChange={e => setDescriptionUpdate((e.target.value))} />
            <br />
            <br />
            <select value={countryId} onChange={e => {
                setCountryId(e.target.value)
            }}>
                {countryList.map(item => <option value={item.id}>{item.properties.name}</option>)}
            </select>

            <button onClick={() => {
                let object = {

                    "id": "d425b5b7-57c7-11ed-adf5-7c10c91d547f",
                    "resource": "country",
                    "type": "USER",
                    "properties": {
                        "description": descriptionupdate,
                        "name": nameupdate,
                        "country": countryId
                    },
                    "auditData": {
                        "createdOn": "2022-10-29T20:25:28.770297Z",
                        "updatedOn": "2022-10-29T20:25:28.770297Z",
                        "createdBy": "test-user",
                        "updatedBy": ""
                    },
                    "version": 1
                }

                axios.put('http://tiswork.tisserv.net:8008/city/' + itemId, object).then(() => {
                    navigate('..')
                })

            }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}> update</button>
        </div>
    </>
}