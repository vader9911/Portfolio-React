import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-800 font-spaceGrotesk">
        <Header />
        <main className="flex-grow">
          <About />
          {/* <Projects /> */}
          {/* <Skills /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
