import { 
  Github, 
  Terminal,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AltF4 Games</h3>
            <p className="text-gray-400">
              Stay haunted – the nightmare awaits your return.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-500">Home</a>
              </li>
              <li>
                <a href="#games" className="text-gray-400 hover:text-red-500">Games</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-red-500">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-500">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/altf4-games" className="text-gray-400 hover:text-red-500">
                <Github size={24} />
              </a>
              <a href="https://altf4-games.itch.io" className="text-gray-400 hover:text-red-500">
                <Terminal size={24} />
              </a>
              <a href="mailto:pradyum_mistry@protonmail.com" className="text-gray-400 hover:text-red-500">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AltF4 Games. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;