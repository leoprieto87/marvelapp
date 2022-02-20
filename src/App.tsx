import { useState } from 'react'
import { Navigation } from './components/navigation'
import { Characters } from './components/Personagens'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation />
      <Characters />
    </div>
  )
}

export default App
