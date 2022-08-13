import { useState } from 'react'
import { Routes, Route, Link} from "react-router-dom"
import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
      <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer>
        <Link to="/contact">Contact</Link>
      </Footer>
      </>
  )
}

export default App
