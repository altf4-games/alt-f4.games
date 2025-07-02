import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SilentHousePP from './privacy-policy/SilentHousePP';

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

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    
    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games/silent-house/privacy-policy" element={<SilentHousePP />} />
      </Routes>
    </div>
  );
};

export default App;