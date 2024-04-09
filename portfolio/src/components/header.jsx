import React from 'react';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-2">
      <nav className="container mx-auto flex justify-end items-center ">
        <div>
          <a href="#about" className="px-4 py-2 hover:bg-slate-700 hover:underline hover:text-emerald-400">About Me</a>
          <a href="#projects" className="px-4 py-2 hover:bg-slate-700 hover:underline hover:text-emerald-400">Projects</a>
          <a href="#skills" className="px-4 py-2 hover:bg-slate-700 hover:underline hover:text-emerald-400">Contact</a>
          <a href="#contact" className="px-4 py-2 hover:bg-slate-700 hover:underline hover:text-emerald-400">Contact</a>
        </div>
      </nav>
    </header>
  );
};

