import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, }  from 'react-router-dom';
import './App.css'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Home />
        <Routes>
          <Route path="/react-portfolio/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
