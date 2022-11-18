import { useEffect, useState } from 'react'
import axios from 'axios'
 
function App() {
 
  const [data, setData] = useState([])
  const [symbol, setSymbol] = useState('')


  function callBackend (){

    axios.get('https://financialmodelingprep.com/api/v3/profile/' + symbol + '?apikey=728063db84382e434ffdf8a2fd017beb')
      .then(resp => {
        setData(resp.data)
      })
    
  }

function prev(){

  axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=728063db84382e434ffdf8a2fd017beb')
  

  .then(resp => {
    setData(resp.data)
  })
  
}



  useEffect(() => {
    
callBackend()
  }, [])
  
 
  return (
    <div>
      <div style={{ margin: '10px' }}>
        <input value={symbol} onChange={e => {
          setSymbol(e.target.value)
        }} type="text" />
 
        <button onClick={()=>{
          callBackend()
        }
        }>Axtar</button>
 


 <button onClick={()=>{
  
  prev()
  
 }}>prev</button>
      </div>
      
 
      {data.map(item => <div>
        <b>Symbol: </b> {item.symbol}
        <br />
        <br />
        <b>Company Name: </b> {item.companyName}
        <br />
        <br />
        <b>Description: </b> {item.description}
        <br />
        <br />
        <b>Ceo: </b> {item.ceo}
      </div>)}
 
    </div>
  );
      
      

} 
 
export default App;
 
