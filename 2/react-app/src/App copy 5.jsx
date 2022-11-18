import { useState } from "react";
import { setConstantValue } from "typescript";
function App() {
  const [a, setA] = useState([]);
  
  return (
    <div>

      
      <button onClick={(hesabla) => {
        //c=a*b
setA([...a,56])

       
      }}>yaz</button>


      <br />
      <h1> {a}</h1>

    



    </div>
  )
}

export default App;
