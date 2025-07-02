import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SilentHousePP from './privacy-policy/SilentHousePP';
import { GameDetails } from './components/GamesSection';

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
  // Games data
  const games = [
    {
      id: 1,
      title: 'Fragments of Fear: Not Alone',
      description:
        'Step into the chilling prologue of the Fragments of Fear episodic horror anthology, where every sound, shadow, and choice matters. Chapter 0: Not Alone sets the stage for the terror to come, introducing you to a world where survival is never guaranteed. Ethan is sleeping at work, unaware that someone has been watching him. As he walks home late at night with a serial killer on the loose, strange events unfold—doubled footsteps, eerie noises, and a creeping sense of dread. When Ethan reaches his house, his stalker isn\'t far behind. Will he make it through the night? It\'s up to you to ensure his survival.',
      image:
        'https://img.itch.zone/aW1nLzkzMzA4NzEucG5n/315x250%23c/WNAtKz.png',
      heroImage:
        'https://img.itch.zone/aW1hZ2UvMTU3ODMwMy85MjE5NjM4LnBuZw==/347x500/bJ2BM5.png',
      shortDescription:
        'You are walking home late at night with a serial killer on the loose.',
      features: [
        'A massive map to explore',
        'Atmospheric sounds that immerse you in fear',
        'AI that will haunt your every move',
        'Multiple endings to discover'
      ],
      technologies: ['Unity', 'C#'],
      screenshots: [
        'https://img.itch.zone/aW1hZ2UvMTU3ODMwMy85MjE5NjM4LnBuZw==/347x500/bJ2BM5.png',
        'https://img.itch.zone/aW1hZ2UvMTU3ODMwMy85MjE5NjQzLnBuZw==/347x500/jw5%2BaW.png',
        'https://img.itch.zone/aW1hZ2UvMTU3ODMwMy85MjE5NjY1LnBuZw==/347x500/d6ZbVd.png',
        'https://img.itch.zone/aW1hZ2UvMTU3ODMwMy85MjE5NjM5LnBuZw==/347x500/vcTcKM.png',
        'https://img.itch.zone/aW1hZ2UvMTU3ODMwMy85MjE5NjQyLnBuZw==/347x500/WMIAPs.png'
      ],
      playUrl: 'https://altf4-games.itch.io/not-alone',
    },
    {
      id: 2,
      title: 'Fragments of Fear: Wash and Watch',
      description: 'Wash and Watch, what starts as an ordinary trip to do laundry unravels into a horrifying night of survival. As you navigate a trailer park, endure an eerie bus ride, and wait alone in a laundromat, an unsettling presence looms closer. When a killer strikes, the night becomes a desperate race to escape. Every sound, every shadow, and every choice could mean the difference between life and death.',
      image: 'https://img.itch.zone/aW1nLzE5MDY2NDQzLnBuZw==/315x250%23c/G83FgK.png',
      heroImage: 'https://img.itch.zone/aW1hZ2UvMzE5MzQ0Ni8xOTA2NjQ1MC5wbmc=/347x500/tYqmfN.png',
      shortDescription: 'A chilling adventure about washing laundry.',
      features: ['Mystery', 'Atmosphere', 'Horror'],
      technologies: ['Unity', 'C#'],
      screenshots: [
        'https://img.itch.zone/aW1hZ2UvMzE5MzQ0Ni8xOTA2NjQ0Ni5wbmc=/347x500/HJOopm.png',
        'https://img.itch.zone/aW1hZ2UvMzE5MzQ0Ni8xOTA2NjQ0Ny5wbmc=/347x500/M2zBsj.png',
        'https://img.itch.zone/aW1hZ2UvMzE5MzQ0Ni8xOTA2NjQ0OS5wbmc=/347x500/2UyF%2BM.png',
        'https://img.itch.zone/aW1hZ2UvMzE5MzQ0Ni8xOTA2NjQ0OC5wbmc=/347x500/WLq018.png',
        'https://img.itch.zone/aW1hZ2UvMzE5MzQ0Ni8xOTA2NjQ1MC5wbmc=/347x500/tYqmfN.png',

      ],
      playUrl: 'https://altf4-games.itch.io/fragments-of-fear-wash-and-watch',
    },
    {
      id: 3,
      title: 'Midnight Visitor',
      description: 'You play as Mark, a detective. The game starts with you arriving at the crime scene. A woman died here and is haunting the apartment. You have heard rumors that any detective who decided to investigate the case never returned. You ignore the red flags and enter this haunted apartment. Will you be able to solve the murder mystery and escape in one piece?',
      image: 'https://img.itch.zone/aW1nLzc2MjQ2NzcucG5n/315x250%23c/g5kgej.png',
      heroImage: 'https://img.itch.zone/aW1nLzc2MjQ0MzgucG5n/original/k3ki1x.png',
      shortDescription: 'A scary detective horror game.',
      features: ['Mystery', 'Detective', 'Horror'],
      technologies: ['Unreal', 'Blueprints'],
      screenshots: [
        'https://img.itch.zone/aW1hZ2UvMTMxMTA1NS83NjI0Mzg3LnBuZw==/347x500/u76DYt.png',
        'https://img.itch.zone/aW1hZ2UvMTMxMTA1NS83NjI0Mzg3LnBuZw==/347x500/u76DYt.png',
        'https://img.itch.zone/aW1hZ2UvMTMxMTA1NS83NjI0MzkwLnBuZw==/347x500/qntjEg.png',
        'https://img.itch.zone/aW1hZ2UvMTMxMTA1NS83NjI0Mzg4LnBuZw==/347x500/V6sgj4.png',
        'https://img.itch.zone/aW1hZ2UvMTMxMTA1NS84MzEzMzM3LnBuZw==/347x500/EliFJ3.png',

      ],
      playUrl: 'https://altf4-games.itch.io/midnight-visitor',
    },
    {
      id: 4,
      title: 'Heart Quake',
      description: 'The player is trapped in a simulation. Armed with a cutting-edge Charm-inator 3000, C.H.A.R.M (an acronym for charm) your enemies by shooting them. Once charmed they will fight for you. Navigate through the simulation and get out of the simulation alongside your trusty inator.',
      image: 'https://img.itch.zone/aW1nLzE0NTAzMDc3LnBuZw==/315x250%23c/45Nhe9.png',
      heroImage: 'https://img.itch.zone/aW1hZ2UvMjQ0NzY1NC8xNDUwMjg2OC5wbmc=/347x500/RhNDk0.png',
      shortDescription: 'A first person shooter developed in 3 days for Winter MelonJam 2023.',
      features: ['FPS', 'WebGL', 'Stylized'],
      technologies: ['Unity', 'C#'],
      screenshots: [
        'https://img.itch.zone/aW1hZ2UvMjQ0NzY1NC8xNDUwMjg2Ny5wbmc=/347x500/7J5tul.png',
        'https://img.itch.zone/aW1hZ2UvMjQ0NzY1NC8xNDUwMjg2OS5wbmc=/347x500/6OeSTM.png',
        'https://img.itch.zone/aW1hZ2UvMjQ0NzY1NC8xNDUwMjg3MS5wbmc=/347x500/KflFaA.png',
        'https://img.itch.zone/aW1hZ2UvMjQ0NzY1NC8xNDUwMjg2Ni5wbmc=/347x500/v78RED.png',
        'https://img.itch.zone/aW1hZ2UvMjQ0NzY1NC8xNDUwMjg3MC5wbmc=/347x500/h4B0jP.png',
      ],

      webglUrl: 'https://itch.io/embed-upload/11018137?color=000000'
    },
    {
      id: 5,
      title: 'UNO Way Out',
      description: 'The player is trapped in a simulation. Armed with a cutting-edge Charm-inator 3000, C.H.A.R.M (an acronym for charm) your enemies by shooting them. Once charmed they will fight for you. Navigate through the simulation and get out of the simulation alongside your trusty inator.',
      image: 'https://img.itch.zone/aW1nLzE5ODg3MTMxLnBuZw==/315x250%23c/F%2Fx3Bn.png',
      heroImage: 'https://img.itch.zone/aW1hZ2UvMzMzMDUxMy8xOTg4NzEzNC5wbmc=/347x500/njmkaE.png',
      shortDescription: 'Shuffle. Shoot. Survive!',
      features: ['FPS', 'UNO', 'Stylized'],
      technologies: ['Unreal', 'Blueprints'],
      screenshots: [
        'https://img.itch.zone/aW1hZ2UvMzMzMDUxMy8xOTg4NzEzNS5wbmc=/347x500/GDC86a.png',
        'https://img.itch.zone/aW1hZ2UvMzMzMDUxMy8xOTg4NzEzNy5wbmc=/347x500/Pbin8m.png',
        'https://img.itch.zone/aW1hZ2UvMzMzMDUxMy8xOTg4NzEzMy5wbmc=/347x500/eZhg%2BK.png',
        'https://img.itch.zone/aW1hZ2UvMzMzMDUxMy8xOTg4NzEzNi5wbmc=/347x500/Q2c88P.png',
        'https://img.itch.zone/aW1hZ2UvMzMzMDUxMy8xOTg4NzEzNC5wbmc=/347x500/njmkaE.png',
      ],

      playUrl: 'https://altf4-games.itch.io/uno-way-out'
    },
    {
      id: 6,
      title: 'The Outer Limits',
      description: 'The player is trapped in a simulation. Armed with a cutting-edge Charm-inator 3000, C.H.A.R.M (an acronym for charm) your enemies by shooting them. Once charmed they will fight for you. Navigate through the simulation and get out of the simulation alongside your trusty inator.',
      image: 'https://img.itch.zone/aW1nLzEzMjQ3NjMxLnBuZw==/315x250%23c/IOzKzE.png',
      heroImage: 'https://img.itch.zone/aW1hZ2UvMjIzNTM0OC8xMzIzNTg0NS5wbmc=/347x500/ji04NK.png',
      shortDescription: 'Horror game inspired by Iron Lung.',
      features: ['FPS', 'Horror', 'Space'],
      technologies: ['Unity', 'C#'],
      screenshots: [
        'https://img.itch.zone/aW1hZ2UvMjIzNTM0OC8xMzIzNTg0MS5wbmc=/347x500/%2BjIjCi.png',
        'https://img.itch.zone/aW1hZ2UvMjIzNTM0OC8xMzIzNTg0Mi5wbmc=/347x500/uyKLX9.png',
        'https://img.itch.zone/aW1hZ2UvMjIzNTM0OC8xMzIzNTg0OC5wbmc=/347x500/LM3AKB.png',
        'https://img.itch.zone/aW1hZ2UvMjIzNTM0OC8xMzIzNTg0Ny5wbmc=/347x500/NmYXo5.png',
        'https://img.itch.zone/aW1hZ2UvMjIzNTM0OC8xMzIzNTg0Ni5wbmc=/347x500/cy0aI4.png',
      ],
      webglUrl: 'https://itch.io/embed-upload/8583615?color=000000'
    },
  ];

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
        <Route path="/games/:gameId" element={<GameDetails games={games} />} />
        <Route path="/games/silent-house/privacy-policy" element={<SilentHousePP />} />
      </Routes>
    </div>
  );
};

export default App;