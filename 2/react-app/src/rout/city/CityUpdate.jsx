import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

export function CityUpdate() {
    const navigate = useNavigate()
    const params = useParams()

    const itemId = params.id

    const [nameupdate, setNameUpdate] = useState('')
    const [codeupdate, setCodeUpdate] = useState('')

    useEffect(() => {
        axios.get('http://tiswork.tisserv.net:8008/country/' + itemId).then(resp => {
            setNameUpdate(resp.data.Record.properties.name)
            setCodeUpdate(resp.data.Record.properties.description)
        })
    }, [])

    return <>
        <div style={{ margin: "20px" }}>

            <input type="text" style={{ marginLeft: '30px' }} value={nameupdate} onChange={e => setNameUpdate((e.target.value))} />
            <br />
            <br />
            <input type="text" style={{ marginLeft: '30px' }} value={codeupdate} onChange={e => setCodeUpdate((e.target.value))} />
            <br />
            <br />


            <button onClick={() => {
                let object = {

                    "id": "d425b5b7-57c7-11ed-adf5-7c10c91d547f",
                    "resource": "country",
                    "type": "USER",
                    "properties": {
                        "description": codeupdate,
                        "name": nameupdate
                    },
                    "auditData": {
                        "createdOn": "2022-10-29T20:25:28.770297Z",
                        "updatedOn": "2022-10-29T20:25:28.770297Z",
                        "createdBy": "test-user",
                        "updatedBy": ""
                    },
                    "version": 1
                }

                axios.put('http://tiswork.tisserv.net:8008/country/' + itemId, object).then(() => {
                    navigate('..')
                })

            }} style={{ width: "80px", height: "40px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '50px' }}> update</button>
        </div>
    </>
}