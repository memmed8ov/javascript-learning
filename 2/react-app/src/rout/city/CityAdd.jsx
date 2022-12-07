import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function CityAdd() {
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const navigate = useNavigate()
    
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
            <br />
            <br />
            <button onClick={() => {
                let object = {
                    "properties": {
                        "description": code,
                        "name": name }
                }

                axios.post('http://tiswork.tisserv.net:8008/country', object).then(resp => {
                    navigate('..')
                })
 }} style={{ width: "80px", height: "40px", marginLeft: '50px', backgroundColor: 'green', borderRadius: '50px' }}>Add</button>
        </div>
    </>
}
