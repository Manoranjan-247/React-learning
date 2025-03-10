import { useRef, useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
  // const [value, setValue] = useState(0)
  // const count = useRef(0);

  // useEffect(()=>{
  //   count.current += 1;
  // });

  const inputElement =  useRef();

  function getRandomRGB() {
    const r = Math.floor(Math.random() * 256); // Random value between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const btnClicked = ()=>{
    // console.log(inputElement.current);
    inputElement.current.style.backgroundColor = getRandomRGB(); 
  }
  return (
    <>
      {/* <button onClick={() => setValue(prev => prev - 1)}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => setValue(prev => prev + 1)}>+1</button>
      <h2>The component rendered {count.current} </h2> */}
      <input type='text' ref={inputElement}></input>
      <button onClick={btnClicked}>click here!</button>
    </>
  )
}

export default App
