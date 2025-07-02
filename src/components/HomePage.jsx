import React, { useState } from 'react';
import Navbar from './NavBar';
import HeroSection from './Hero';
import GamesSection from './GamesSection';
import GitHubProjects from './Projects';
import ContactSection from './Contact';
import Footer from './Footer';
import GameReviews from './GameReviews';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <>
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
    </>
  );
};

export default HomePage;
