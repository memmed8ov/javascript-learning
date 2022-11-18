function Plus(props) {

  const [count, setCount] = useState(props.initValue)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {

        setCount(count + 1)
      }} style={{ width: "100px", height: "50px" }}>

      </button>
    </div>
  )
}

function App() {

  return <>
    <div>
      <Plus initValue={0}></Plus>
      <br />
      <div>
        <Plus initValue={19}></Plus>
      </div>
    </div>
  </>

}
export default App;