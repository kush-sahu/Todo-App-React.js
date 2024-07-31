import { useState } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Arr from './components/arr';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <Arr></Arr>
    </>
  )
}

export default App
