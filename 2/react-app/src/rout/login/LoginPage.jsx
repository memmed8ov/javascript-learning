import { useState } from "react"

export function Login(){
    const[password,setPassword]=useState()
    return<><div style={{background:'grey',borderRadius: '50px',width:'400px',height:'400px',textAlign:'center',margin:'50px'}}>
    <input type="text" placeholder='username'style={{margin:'20px',borderRadius: '50px',height: "50px",textAlign:'center',color:'blue',borderColor:'orange'}}/>
    <br />
    <input type="number" placeholder='password'style={{margin:'20px',borderRadius: '50px',height: "50px",textAlign:'center',borderColor:'orange'}} value={password} onChange={e => setPassword(parseInt(e.target.value))} />
    <br />
    <button style={{margin:'20px' ,backgroundColor: 'orange', borderRadius: '50px',width: "80px", height: "40px",textAlign:'center'}}>login</button>
    <br />
    <div><input type="checkbox"style={{width:'50px',height:'20px',}}/>Remember me</div>
    </div>
      {/* <Routes>
      <Route path=':/login' element={<Login></Login>} ></Route>
      </Routes> */}
    </> 
}