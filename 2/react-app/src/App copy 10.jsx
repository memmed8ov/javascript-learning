import { useEffect, useState } from 'react'
import axios from 'axios'
 
function App() {
 
  const [data, setData] = useState([])
  const [symbol, setSymbol] = useState('')


  
  
  useEffect(() => {
    axios.get('https://api.domainsdb.info/v1/domains/search?domain=google ')
      .then(resp => {
        setData(resp.data)
      })
  })


  
 
  return (


 <div>
      <div style={{ margin: '10px' }}>
        <input style={{width:'300px',height:'50px'}} value={symbol} onChange={e => {
          setSymbol(e.target.value)
        }} type="text" />
 
        <button onClick={()=>{
axios.get('https://api.domainsdb.info/v1/domains/search?domain=google')
.then(resp => {
  setData(resp.data)
})
        
        }
        }>find</button>
 


 
      </div>
      
      {data.domains && data.domains.map(item => <div>
         {item.domain}
        
        
      </div>)}
      
    </div>



  );
      
      

} 
 
export default App;
 
