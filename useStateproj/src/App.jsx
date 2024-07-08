import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('welcome to React Class')

	const [change, setChange] = useState(true);

  
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
    



		<div>
			<button onClick={() => setChange(!change)}>
				Click Here!
			</button>
			{change ? (
				<h1>Welcome to GeeksforGeeks</h1>
			) : (
				<h1>A Computer Science Portal for Geeks</h1>
			)}
		</div>
	



    </>
  )
}

export default App
