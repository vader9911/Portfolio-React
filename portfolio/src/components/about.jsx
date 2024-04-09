import React from 'react';
import Headshot from '../assets/Headshot.jpg';

export default function About() {
    return (
      <section id="about" className="min-h-screen flex items-center p-4 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
          <img src={Headshot} alt="Headshot" className="rounded-full w-32 md:w-48 lg:w-64 mb-4 md:mb-0 p-2" />
          <div className="md:ml-4">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-emerald-400">About Me</h2>
            <p>
              Hi! I'm Jeff, a software developer based in New Jersey. I am a Full-Stack developer with a passion for problem solving and creative solutions. With a deep understanding of front and back-end development best practices, I am an innovative developer experienced in Node and React. 
            </p>
          </div>
        </div>
      </section>
    );
  }
  