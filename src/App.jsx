import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/Hero';
import GamesSection from './components/GamesSection';
import GitHubProjects from './components/Projects';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import GameReviews from './components/GameReviews';

// Color scheme constants
const colors = {
  primary: '#FF3D3D',    // Vibrant red
  secondary: '#1A1A1A',  // Dark gray
  accent: '#FF0000',     // Pure red
  background: '#0A0A0A', // Near black
  text: '#FFFFFF',       // White
  muted: '#808080'       // Gray
};

// Main App
const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }
      ::-webkit-scrollbar-thumb {
        background: #FF3D3D;
        border-radius: 5px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #FF0000;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
        <HeroSection />
        <GamesSection />
        <GameReviews />
        <GitHubProjects />
        <ContactSection />
      </main>
      <Footer />
      
      <div className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none mix-blend-difference z-50 hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out',
        }}
        id="custom-cursor"
      />
    </div>
  );
};

const GlobalStyles = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    
    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return null;
};

export default App;