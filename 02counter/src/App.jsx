import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)

//let counter = 15

const addValue = () => {
   setCounter(counter)
  console.log("value added",counter); 
  if(counter <= 19){
   counter =  counter + 1
  } else(counter === 20)
 setCounter(counter)
}
const removeValue = () => {
  console.log("value remove", counter);
   if(counter >= 1){
    counter = counter - 1
   }else(counter === 0)
  setCounter(counter )
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}
      >Add value {counter} </button>
      <br />
            <button onClick={removeValue}
      >Remove value {counter} </button>
      <p>footer: {counter}</p>
     
      
    
    </>
  )
}

export default App
