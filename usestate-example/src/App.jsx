
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function incrCount(){
    // setCount(count + 1);  //don't do this
    setCount((prev) => prev + 1);  //do this
  }

  function decrCount(){
    setCount((prev) => prev - 1)
  }


  return (
    <>
      <h1>The value of {count}</h1>
      <button onClick={incrCount}>increase</button>
      <button onClick={decrCount}>decrease</button>
    </>
  )
}

export default App
