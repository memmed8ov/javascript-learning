import { useState } from "react"

export function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState()
    const [rememberme, setRememberMe] = useState()
    return <><div style={{ background: 'grey', borderRadius: '50px', width: '400px', height: '400px', textAlign: 'center', margin: '50px' }}>
        <input type="text" placeholder='username' style={{ margin: '20px', borderRadius: '50px', height: "50px", textAlign: 'center', color: 'blue', borderColor: 'orange' }}value={username} onChange={e => setUserName((e.target.value))} />
        <br />
        <input type="password" placeholder='password' style={{ margin: '20px', borderRadius: '50px', height: "50px", textAlign: 'center', borderColor: 'orange' }} value={password} onChange={e => setPassword(parseInt(e.target.value))} />
        <br />
        <button style={{ margin: '20px', backgroundColor: 'orange', borderRadius: '50px', width: "80px", height: "40px", textAlign: 'center' }}>login</button>
        <br />
        <div><input type="checkbox" style={{ width: '50px', height: '20px', }} value={rememberme} onChange={e => setRememberMe((e.target.value))}/>Remember me</div>
    </div>
        {/* <Routes>
      <Route path=':/login' element={<Login></Login>} ></Route>
      </Routes> */}
    </>
}