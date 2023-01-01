import { useState } from 'react'
import AllRouter from './AllRouter/AllRouter'
import Body from './Components/Body'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
     <AllRouter/>
    </div>
  )
}

export default App
