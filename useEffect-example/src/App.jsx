import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <h1>I have rendered {count} times</h1>
    </>
  )
}

export default App
