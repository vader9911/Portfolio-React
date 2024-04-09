import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-800 ">
        <Header />
        <main className="flex-grow">
          <About />
          <Projects />
          {/* <Skills /> */}
          {/* <Contact /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
