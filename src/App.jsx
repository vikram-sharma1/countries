import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './components/Homepage'
import AllRoutes from './components/router/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AllRoutes/>
    </div>
  )
}

export default App
