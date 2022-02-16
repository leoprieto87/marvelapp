import { useState } from 'react'
import { Navigation } from './components/navigation'
import { Characters } from './components/Personagens'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <div>
        <Characters />
      </div>

    </div>
  )
}

export default App
