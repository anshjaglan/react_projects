
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import Chai from "./chai.jsx"

function MyApp(){
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}
  // const ReactElement = {
  //   type: 'a',
  //   props: {
  //       href: 'https://google.com',
  //       target: '_blank'
  //   },
  //   children: 'Click me to visit google'

//}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotherUser =  "ANSH JAGLAN"

const reactElement =  React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'}, 'Click me to visit Google', anotherUser)
  
ReactDOM.createRoot(document.getElementById('root')).render(
reactElement
)

