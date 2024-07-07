import { useEffect, useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <> <h1>Render count: {count.current}</h1>
      <button onClick={() => { setValue(prev => prev - 1); }}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => { setValue(prev => prev + 1); }}>+1</button>
     
    </>
  );
}

export default App;
