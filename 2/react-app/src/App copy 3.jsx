import { useState } from "react";
import { setConstantValue } from "typescript";
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  return (
    <div>
      
<input type="number" value={a} onChange={e=>setA(parseInt(e.target.value))}/>
<input type="number" value={b} onChange={e=>setB(parseInt(e.target.value))}/>
<button onClick={(vurma) => {
       //c=a*b
       setC(a*b)

      }}>*</button>
    
    <button onClick={(vurma) => {
       //c=a*b
       setC(a-b)

      }}>-</button>
       
      

      <button onClick={(vurma) => {
       //c=a*b
       setC(a+b)

      }}>+</button>
    
    <h1> {c}</h1>
    </div>
  )
}

export default App;
