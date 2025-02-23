import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Terminal,
  Monitor,
  Mail,
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-black py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
        
        <div className="bg-gray-900 rounded-lg p-8 mb-12">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500 text-white"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-red-600 rounded hover:bg-red-700 transition-colors text-white w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="https://github.com/altf4-games"
            className="flex items-center justify-center gap-2 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <Github size={24} />
            GitHub
          </a>
          <a
            href="https://altf4-games.itch.io"
            className="flex items-center justify-center gap-2 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <Terminal size={24} />
            itch.io
          </a>
          <a
            href="https://pradyum.vercel.app"
            className="flex items-center justify-center gap-2 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <Monitor size={24} />
            Portfolio
          </a>
          <a
            href="mailto:pradyum_mistry@protonmail.com"
            className="flex items-center justify-center gap-2 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <Mail size={24} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;