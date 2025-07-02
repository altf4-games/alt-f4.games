import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Modified GameReviews component with a "Return to Details" button
const GameReviews = ({ gameId, onReturn }) => {
  return (
    <div className="text-white p-4">
      <p className="mb-4">
        Reviews for this game can be found on the main game page.
      </p>
      {/* <button
        onClick={onReturn}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Return to Game Details
      </button> */}
    </div>
  );
};

// Games Section Component
const GamesSection = ({ games }) => {
  return (
    <section className="bg-black py-20 px-4" id="games">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Featured Games
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Discover our latest horror adventures and immersive gameplay.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link key={game.id} to={`/games/${game.id}`}>
              <div className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {game.title}
                    </h3>
                    <p className="text-gray-300 text-ellipsis">
                      {game.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Footnote */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Check out other games on my{' '}
            <a
              href="https://altf4-games.itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Itch.io
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

// Game Details Component with optional embed or external play link in the "play" tab
const GameDetails = ({ games }) => {
  const { gameId } = useParams();
  const game = games.find((g) => g.id.toString() === gameId);
  const [currentTab, setCurrentTab] = React.useState('details');

  if (!game) return <div className="text-white p-8">Game not found</div>;

  // Always include details and reviews. Include play if either playUrl or webglUrl exists.
  const tabs = ['details', 'reviews'];
  if (game.playUrl || game.webglUrl) {
    tabs.push('play');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/"
          className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
        >
          ← Back to Games
        </Link>
      </div>
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
        {/* Hero Image */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={game.heroImage}
            alt={game.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {game.title}
            </h1>
            <p className="text-xl text-gray-300">{game.shortDescription}</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-800">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-8 py-4 text-white capitalize transition-colors ${
                  currentTab === tab
                    ? 'border-b-2 border-red-500'
                    : 'hover:bg-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {currentTab === 'details' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">About</h2>
                <p className="text-gray-300">{game.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Screenshots
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {game.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`${game.title} screenshot ${index + 1}`}
                      className="rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              {/* {game.playUrl && (
                <div className="text-center mt-8">
                  <a
                    href={game.playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Play Game
                  </a>
                </div>
              )} */}
            </div>
          )}

          {currentTab === 'reviews' && (
            <GameReviews
              gameId={game.id}
              onReturn={() => setCurrentTab('details')}
            />
          )}

          {currentTab === 'play' && (
            <div className="flex flex-col items-center justify-center space-y-4">
              {game.playUrl ? (
                <a
                  href={game.playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Launch Game
                </a>
              ) : null}
              {(!game.playUrl && game.webglUrl) ? (
                <div className="flex justify-center">
                  <iframe
                    src={game.webglUrl}
                    title={`Play ${game.title}`}
                    frameBorder="0"
                    width="1280"
                    height="720"
                    className="rounded-lg"
                  ></iframe>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function Games() {
  // Define your games list with necessary properties
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

  return <GamesSection games={games} />;
}

// Export both the component with data and the base component
export { GameDetails, GamesSection };
export default Games;
