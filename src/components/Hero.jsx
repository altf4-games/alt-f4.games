import { 
  Code, 
  Gamepad2,
  ChevronDown,
} from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Animated background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#FF0000 1px, transparent 1px), linear-gradient(90deg, #FF0000 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-scroll 20s linear infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
            AltF4 Games
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Creating Immersive Digital Experiences
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="#games" 
            className="px-8 py-3 bg-red-600 rounded hover:bg-red-700 transition-colors text-white flex items-center gap-2"
          >
            <Gamepad2 size={20} />
            View Games
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border border-red-600 rounded hover:bg-red-900/30 transition-colors text-white flex items-center gap-2"
          >
            <Code size={20} />
            Web Projects
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default HeroSection;