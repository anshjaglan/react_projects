// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";

function App(){
  const [Color, setColor] = useState("white")
return(
  <div className="w-full h-screen duration-200"
  style={{backgroundColor : Color}}>
 
     <div className="fixed flex flex-wrap justify-center bottom-60 inset-x-0">
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button
        onClick={() => setColor("red")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        >RED</button>
           <button
           onClick={() => setColor("blue")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}
        >blue</button>
           <button
           onClick={() => setColor("green")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}
        >green</button>
                   <button
           onClick={() => setColor("orange")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"orange"}}
        >orange</button>
                   <button
           onClick={() => setColor("yellow")}
        className="outline-none px-3 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"yellow"}}
        >yellow</button>
                   <button
           onClick={() => setColor("pink")}
        className="outline-none text-white rounded-3xlshadow-lg"
        style={{backgroundColor:"pink"}}
        >pink</button>
      </div>
   </div>
  </div>

)

}

export default App
