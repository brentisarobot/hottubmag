import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'

function App() {

  return (
      <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      <Footer />
      </>
  )
}

export default App
