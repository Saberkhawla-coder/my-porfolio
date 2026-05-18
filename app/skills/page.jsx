import React from "react";
import { FaReact, FaLaravel, FaJs, FaGitAlt, FaGithub,FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiBootstrap, SiPostman, SiJira, SiTrello } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import ParticlesBackground from "../components/ParticlesBackground";
export default function Skills() {
  return (
   <section className="relative min-h-[90vh] flex items-center justify-center  overflow-hidden">
    <ParticlesBackground/>
        <div className="container relative z-10 flex flex-col mx-5 space-y-12">
  
        <div className="flex justify-center items-center gap-3">
          <div className="h-10 w-[3px] bg-green-400"></div>
          <h2 className="text-3xl text-white font-semibold">Skills</h2>
        </div>

        <p className="font-mono text-gray-300 text-sm leading-relaxed text-center max-w-2xl m-auto">
          I work with modern web technologies to build fast, scalable, and secure
          applications. I continuously improve my skills by learning new frameworks,
          tools, and best development practices to deliver high-quality digital solutions.
        </p>

        
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">

         
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Frontend</h3>

            <div className="flex flex-wrap justify-center gap-4 text-3xl">
              <FaReact className="text-blue-400"/>
              <FaJs className="text-yellow-400"/>
              <RiTailwindCssFill className="text-blue-500"/>
              <SiBootstrap className="text-purple-500"/>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              HTML5 • CSS3 • React • JavaScript • Tailwind • Bootstrap
            </p>
          </div>

          
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Backend & Database
            </h3>

            <div className="flex justify-center gap-4 text-3xl">
              <FaLaravel className="text-red-500"/>
              <FaPhp className="text-indigo-400"/>
              <DiMysql className="text-blue-400"/>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              PHP • Laravel • MySQL
            </p>
          </div>

          
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Tools</h3>

            <div className="flex flex-wrap justify-center gap-4 text-3xl">
              <FaGitAlt className="text-orange-500"/>
              <FaGithub/>
              <SiPostman className="text-orange-400"/>
              <SiJira className="text-blue-400"/>
              <SiTrello className="text-blue-500"/>
              <VscVscode className="text-blue-500"/>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Git • GitHub • Postman • VS Code • Jira • Trello • Agile
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
