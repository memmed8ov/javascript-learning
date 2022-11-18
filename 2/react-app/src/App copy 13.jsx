import { useEffect, useState } from 'react'
export function Plus(props) {

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

