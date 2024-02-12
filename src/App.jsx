import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, }  from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar';
import SearchBar from './components/SearchBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact";
import Speech from "./components/Speech";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavigationBar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speech" element={<Speech />} />
        </Routes>
      </Router>
    </>
  );
}

export default App