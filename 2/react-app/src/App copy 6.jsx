import { useState } from "react";
function App() {
  const [a, setA] = useState([]); // massiv
  const [b, setB] = useState(0); // reqem

  return (
    <div>

      <input type="number" value={b} onChange={e => setB(parseInt(e.target.value))} />

      <button onClick={(hesabla) => {
        // a.push(b)
        setA([...a, b])

      }}>yaz</button>

      <button onClick={(sil) => {
        setA([])
      }}>temizle</button>

      <br />
      {a.map(x => <h1>{x}</h1>)}
    </div>
  )
}

export default App;
