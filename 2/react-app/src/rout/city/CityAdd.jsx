import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function CityAdd() {
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [countryId, setCountryId] = useState()
    const [countryList, setCountryList] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        axios.get('http://tiswork.tisserv.net:8008/country').then(resp => {
            setCountryList(resp.data.content)
        })
    }, [])



    return <>
        <div>
            <br />
            Name: <input placeholder='name' style={{ marginLeft: '50px' }} type="text" value={name} onChange={e => setName((e.target.value))} />
            <br />
            <br />
            Code: <input placeholder='code' style={{ marginLeft: '50px' }} type="text" value={code} onChange={e => setCode((e.target.value))} />
            <br />
            <br />
            Country:
            <select value={countryId} onChange={e => {
                setCountryId(e.target.value)
            }}>
                {countryList.map(item => <option value={item.id}>{item.properties.name}</option>)}
            </select>
            <br />
            <br />
            <button onClick={() => {
                let object = {
                    "properties": {
                        "description": code,
                        "name": name,
                        "country": countryId
                    }
                }

                axios.post('http://tiswork.tisserv.net:8008/city', object).then(resp => {
                    navigate('..')
                })
            }} style={{ width: "80px", height: "40px", marginLeft: '50px', backgroundColor: 'green', borderRadius: '50px' }}>Add</button>
        </div>
    </>
}
