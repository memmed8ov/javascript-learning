import Button from '@mui/material/Button';

function SpecialInput(props) {

  //const [color,setColor]=useState(props)

  return (
    <div>
      <div style={{ background: "red", margin: '10px', padding: '15px' }}></div>
    </div>
  )
}

function Box(props) {

  return <div>
    <span style={{ textColor: 'green', myColor: 'red' }}>

      <div style={{ color: 'myColor' }}>
        <span style={{ color: 'textColor' }}>insidebox</span>
      </div>
    </span>
  </div>
}

function App() {
  return <>
    <div>

      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>

      <SpecialInput props ></SpecialInput>

      <br />
      <div>

        <Box props >

        </Box>

      </div>
    </div>
  </>

}
export default App;
