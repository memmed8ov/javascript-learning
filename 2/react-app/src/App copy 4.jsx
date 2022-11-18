import { useState } from "react";
import { setConstantValue } from "typescript";
function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
  return (
    <div>

      a:<input type="number" value={a} onChange={e => setA(parseInt(e.target.value))} />
      b:<input type="number" value={b} onChange={e => setB(parseInt(e.target.value))} />
      c:<input type="number" value={c} onChange={e => setC(parseInt(e.target.value))} />
      <button onClick={(hesabla) => {
        //c=a*b


        setD(b * b - 4 * a * c)

        if (d < 0) {

          alert("helli yoxdur")
        }

        else {
          setX1((-b + Math.sqrt(d)) / (2 * a))
          setX2((-b - Math.sqrt(d)) / (2 * a))

        }
      }}>hesabla</button>


      <br />
      x1:<h1> {x1}</h1>

      x2:<h1> {x2}</h1>



    </div>
  )
}

export default App;
