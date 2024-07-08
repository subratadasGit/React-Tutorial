import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('welcome to React Class')


 const changeCount=()=> {
setCount('React is the best frontend part')
  }

  return (
    <>

    <h1>useState Example</h1>

    <button onClick={changeCount}>Click here !</button>
<br />
<br />
   
   <h3> {count}</h3>
     
    </>
  )
}

export default App
