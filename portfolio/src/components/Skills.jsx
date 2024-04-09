import React from 'react';
// Importing icons
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript, DiReact } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoGraphql } from "react-icons/bi";

export default function Skills() {
  // Skills data array, each skill has a name and its ocon, as well as a color
  const skills = [
    { name: 'HTML', icon: AiFillHtml5, color: "text-orange-500" },
    { name: 'CSS', icon: FaCss3Alt, color: "text-blue-500" },
    { name: 'JavaScript', icon: DiJavascript, color: "text-yellow-500" },
    { name: 'Tailwind', icon: BiLogoTailwindCss, color: "text-sky-300" },
    { name: 'React', icon: DiReact, color: "text-sky-500" },
    { name: 'SQL', icon: GrMysql, color: "text-blue-700" },
    { name: 'MongoDB', icon: BiLogoMongodb, color: "text-green-500"},
    { name: 'GraphQL', icon: BiLogoGraphql, color: "text-pink-500"},
  ];

  return (
    <section id="skills" className="min-h-fit flex  flex-col justify-center p-4 m-8 mb-12 text-white">
        <div className='flex-auto mb-6 p-5 items-start text-emerald-400'>
            <h2 className="text-9xl md:text-5xl text-left  font-bold mb-6 underline">Skills</h2>
        </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-20 p-10">
        {skills.map((skill) => {
          const IconComponent = skill.icon; // Dynamically determine the icon component
          return (
            <div key={skill.name} className="flex flex-col items-center">
              <IconComponent className={`w-40 h-40 ${skill.color}`}/> 
              <span className="text-xl text-gray-300 pt-3">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}