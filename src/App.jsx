
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Counter from './Counter';
import About from './About';
import Contact from './Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;





