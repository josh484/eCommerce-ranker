import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, }  from 'react-router-dom';

import Home from './components/Home'
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import './App.css'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <NavigationBar />

        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      </Router>
      <Footer/>
      
    </>
  )
}

export default App