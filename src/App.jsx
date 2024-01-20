import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './component_style.css'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
};

export default App
