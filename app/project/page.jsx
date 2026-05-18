"use client";

import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "FlexiDays- ManagementSystem",
    description:
      "Dynamic leave management application connected to a REST API using JSON Server.",
    image: "/images/imagesProjects/FlexiDay.jpeg",
    technologies: ["JSON Server", "Axios", "JavaScript", "TailwindCSS"],
    github:'https://github.com/Saberkhawla-coder/FlexiDays'
  },

  {
    id: 2,
    title: "DailyHabits",
    description:
      "Web application built with React for creating and tracking daily routines.",
    image: "/images/imagesProjects/DailyHabits.jpg",
    technologies: ["React", "JavaScript", "LocalStorage", "Tailwind CSS"],
    github:'https://github.com/Saberkhawla-coder/DailyHabits'
  },

  {
    id: 3,
    title: "ArtConnect Maroc",
    description:
      "Interactive React platform for exploring Moroccan art and traditions.",
    image: "/images/imagesProjects/artConnect.jpg",
    technologies: [
      "React",
      "Tailwind CSS",
      "React Router",
      "JSON Server",
    ],
    github:'https://github.com/Saberkhawla-coder/ArtConnect-Maroc'
  },

  {
    id: 4,
    title: "EduConnect API",
    description:
      "Laravel e-learning API with secure authentication and role management.",
    image: "/images/imagesProjects/eduConnect.jpg",
    technologies: ["Laravel", "Sanctum", "MySQL", "REST API"],
    github:'https://github.com/Saberkhawla-coder/EduConnect'
  },

  {
    id: 5,
    title: "Podcast-Finder API",
    description:
      "RESTful Laravel API for podcasts and episode management.",
    image: "/images/imagesProjects/Podcast.jpg",
    technologies: ["Laravel", "Swagger", "MySQL"],
    github:'https://github.com/Saberkhawla-coder/PodCast-laravel'
  },

  {
    id: 6,
    title: "Appointment Booking System",
    description:
      "Fullstack booking application with multi-role management.",
    image: "/images/imagesProjects/booking.jpg",
    technologies: ["Laravel", "Sanctum", "MySQL"],
    github:'https://github.com/Saberkhawla-coder/R-servation-de-Rendez-vous'
  },

  {
    id: 7,
    title: "MyTiq Ticketing Platform",
    description:
      "Modern event ticketing platform built with React and Laravel.",
    image: "/images/imagesProjects/event.jpg",
    technologies: ["React", "Laravel", "REST API"],
    github:'https://github.com/Saberkhawla-coder/MyTiq'
  },

  {
    id: 8,
    title: "HealthCare",
    description:
      "Medical appointment platform with role-based dashboards.",
    image: "/images/imagesProjects/medical.jpg",
    technologies: ["React", "Laravel", "MySQL",, "Tailwind CSS", "Sanctum"],
    github:'https://github.com/Saberkhawla-coder/Cabinet-Medical'
  },
];

export default function AllProjects() {
  const [showAll, setShowAll] = useState(false);

  const displayprojects = showAll
    ? projects
    : projects.slice(0, 4);

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden px-4 sm:px-6 lg:px-10">

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col space-y-12">

      
        <div className="flex justify-center items-center gap-3">
          <div className="h-8 sm:h-10 w-[3px] bg-green-400"></div>

          <h2 className="text-2xl  sm:text-3xl md:text-4xl font-semibold text-white">
            Projects
          </h2>
        </div>

     
        <p className="font-mono text-gray-300 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
          Passionné par le développement web, j’ai réalisé plusieurs
          projets avec React, Laravel et JavaScript.
        </p>

       
        <div className="space-y-20 sm:space-y-28">

          {displayprojects.map((project, index) => (

            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            >

             
              <div
                className={`
                  space-y-5
                  order-2
                  ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}
                `}
              >

                <p className="text-cyan-400 uppercase tracking-[3px] text-xs text-center sm:text-sm font-semibold">
                  Project {project.id}
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white">
                  {project.title}
                </h2>

                <p className="text-zinc-400 leading-relaxed text-sm text-center sm:text-base">
                  {project.description}
                </p>

                
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">

                  {project.technologies.map((tech, techIndex) => (

                    <span
                      key={techIndex}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-xs sm:text-sm text-cyan-200"
                    >
                      {tech}
                    </span>

                  ))}
                </div>
              </div>

           
              <div
  className={`
    relative flex justify-center
    order-1
    ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}
  `}
>

 
  <div className="absolute w-[90%] h-[90%] border border-cyan-400 rounded-xl bottom-[-10px] left-[-10px] z-0"></div>

  
  <div className="relative group z-10 overflow-hidden rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md">

   
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-auto rounded-xl object-cover group-hover:scale-110 transition duration-500"
    />

   
    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

   
      <a
        href={project.github}
        target="_blank"
        className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:scale-105 transition duration-300"
      >
        Source Code
      </a>

    </div>
  </div>
</div>
            </div>
          ))}
        </div>


        <div className="flex justify-center pt-8">

          <button
            onClick={() => {
              setShowAll(!showAll);

              if (showAll) {
                window.scrollTo({
                  top: 3200,
                  behavior: "smooth",
                });
              }
            }}
            className="px-6 sm:px-10 py-3 sm:py-4 rounded-xl cursor-pointer bg-gradient-to-r from-cyan-400 to-green-600 hover:scale-105 transition duration-300 font-semibold text-sm sm:text-base"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
}