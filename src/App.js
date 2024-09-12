import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Note from './components/note/Note';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/note' element={<Note/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
