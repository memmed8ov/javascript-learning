import { Children } from "react";

function SpecialInput(props) {



  return (
    <div>
      <div style={{ background: "grey", margin: '10px', padding: '15px' }}>
        <h1>
          hello{props.name}
        </h1>
      </div>
   
      {props.Children}
    </div>
  )
}



function App() {
  return <>
    <div>

      

      <SpecialInput name='babe' children={"rey"}></SpecialInput>

      
    </div>
  </>

}
export default App;
