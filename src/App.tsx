import { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { Navigation } from './components/utils/navigation'
import { Characters } from './components/Personagens'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Router>
        <Navigation />
        <Routes>
          <Route path='/Personagens' element={<Characters />} />
          {/* <Route path='/Quadrinhos' element={ } /> */}
        </Routes>
      </Router>

    </div>
  )
}

export default App
