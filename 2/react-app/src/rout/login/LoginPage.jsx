import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
export function Login() {
    const navigate = useNavigate()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState()
    const [rememberme, setRememberMe] = useState()
    const [show, setShow] = useState('password')
    return <><div style={{ background: 'grey', borderRadius: '50px', width: '400px', height: '400px', textAlign: 'center', margin: '50px' }}>
        <input type="text" placeholder='username' style={{ margin: '20px', borderRadius: '50px', height: "50px", textAlign: 'center', color: 'blue', borderColor: 'orange' }} value={username} onChange={e => setUserName((e.target.value))} />
        <br />
        <input type={show} placeholder='password' style={{ margin: '20px', borderRadius: '50px', height: "50px", textAlign: 'center', borderColor: 'orange' }} value={password} onChange={e => setPassword((e.target.value))} />
        <button onClick={() => {
            if (show == 'password') {
                setShow('text')
            } else {
                setShow('password')
            }
        }}
            style={{
                marginLeft: -50,
                border: 0,
                borderRadius: 38
            }}>V</button>
        <br />
        <button onClick={() => {

            const isLoggedIn = localStorage.getItem('token')
            if (isLoggedIn) {
                navigate('/')
            }

            let object = {
                "Username": username,
                "Password": password
            }
            axios.post('http://tiswork.tisserv.net:8008/authentication/token', object).then((resp) => {
                const token = resp.data.token.content
                localStorage.setItem('token', token)
            }, err => {
                alert('Username ve ya password yanlishdir')

            })


        }} style={{ margin: '20px', backgroundColor: 'orange', borderRadius: '50px', width: "80px", height: "40px", textAlign: 'center' }}>login</button>
        <br />
        <div><input type="checkbox" style={{ width: '50px', height: '20px', }} value={rememberme} onChange={e => setRememberMe((e.target.value))} />Remember me</div>
    </div>
        {/* <Routes>
      <Route path=':/login' element={<Login></Login>} ></Route>
      </Routes> */}
    </>
}

/* switch

// light ON ; OFF

knopkani basanda, on dusa off olmalidi, off dusa on olmalidi

knopkani basanda:
    ON  => OF
    OFF => ON


tip: PASSWORD; TEXT
knopkani basanda:
    PASSWORD => TEXT
    TEXT => PASSWORD


if (show == 'password') {
    setShow('text')
} else {
    setShow('password')
}

*/

// status code

// 1** - Upgrade        -  no error
// 2** - Success        -  no error
// 3** - Redirect       - no error
// 4** - Client error   - error      - Frontend error
// 5** - Server error   - error      - Backend error



