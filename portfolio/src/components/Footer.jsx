import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white text-center p-4 mt-8">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/vader9911" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/jeffrey-scott-51a931214/" target="_blank"  className="hover:text-blue-400">
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-sm mt-2">© {new Date().getFullYear()} Jeffrey Scott. All rights reserved.</p>
    </footer>
  );
}
