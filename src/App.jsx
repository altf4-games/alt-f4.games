import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Games from './pages/Games'
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './component_style.css'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
};

export default App
