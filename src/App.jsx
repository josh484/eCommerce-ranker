import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, }  from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NavigationBar /> {}
        <Home />
        <Routes>
          <Route path="/react-portfolio/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

