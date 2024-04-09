import React from 'react';


const projects = [
  {
    id: 1,
    name: "Spellbinder",
    description: "Spellbinder is an web-app to view and collect Magic the Gathering cards. It allows you to easily search and add cards to your collection.",
    image: "https://github.com/vader9911/Spellbinder/blob/main/public/images/readmepic.png?raw=true" ,
    repoUrl: "https://github.com/vader9911/Spellbinder",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-fit p-2 text-emerald-400 bg-slate-800 m-8 mb-12">
      <div className="container mx-auto">
        <h2 className="text-9xl md:text-5xl text-left font-bold mb-6 p-5 underline">My Work</h2>
        <div className="grid grid-cols-1 gap-4 w-full">
          {projects.map((project) => (
            <div key={project.id} className="rounded overflow-hidden shadow-lg bg-slate-700 hover:bg-slate-600  transition-colors duration-300">
              <a href={project.repoUrl} target="_blank">
                <img className="w-full" src={project.image} alt={project.name} />
              </a>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2">{project.name}</div>
                <p className="text-gray-300 text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}