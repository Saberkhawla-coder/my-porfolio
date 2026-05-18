"use client";
import React from "react";
import { useState } from "react";
const projects = [
 {
  id: 1,
  title: "FlexiDays- ManagementSystem",
  description:
    "Dynamic leave management application connected to a REST API using JSON Server. Employees can submit, edit and cancel leave requests, while managers and HR can approve or refuse requests in real time.",
  image: "/images/imagesProjects/FlexiDay.jpeg",
  technologies: ["JSON Server", "Axios", "JavaScript", "TailwindCSS"],
  buttonColor: "bg-blue-400 hover:bg-blue-300",
  borderColor: "hover:border-blue-400/40",
},
  {
  id: 2,
  title: "DailyHabits",
  description:
    "Web application built with React for creating and tracking daily routines. Users can add, complete and delete habits while monitoring individual and group progress using localStorage.",
  image: "/images/imagesProjects/DailyHabits.jpg",
  technologies: ["React", "JavaScript", "LocalStorage", "Tailwind CSS"],
  buttonColor: "bg-green-400 hover:bg-green-300",
  borderColor: "hover:border-green-400/40",
},
 
  {
  id: 3,
  title: "ArtConnect Maroc",
  description:
     "Interactive React platform for exploring, publishing and managing Moroccan art, traditions and cultural events.",
  image: "/images/imagesProjects/artConnect.jpg",
  technologies: [
    "React",
    "Tailwind CSS",
    "React Router",
    "JSON Server",
    "Context API",
    "Cloudinary"
  ],
  buttonColor: "bg-orange-400 hover:bg-orange-300",
  borderColor: "hover:border-orange-400/40",
}, {
  id: 4,
  title: "EduConnect API",
  description:
    "Laravel e-learning API where teachers manage courses, students enroll online, and admins control roles and permissions securely.",
  image: "/images/imagesProjects/eduConnect.jpg",
  technologies: [
    "Laravel",
    "Sanctum",
    "MySQL",
    "REST API"
  ],
  buttonColor: "bg-red-400 hover:bg-red-300",
  borderColor: "hover:border-red-400/40",
},
 
 {
  id: 5,
  title: "Podcast-Finder API",
  description:
    "RESTful Laravel API for discovering, managing and searching podcasts, episodes and hosts with secure authentication and role management.",
  image: "/images/imagesProjects/Podcast.jpg",
  technologies: [
    "Laravel",
    "Sanctum",
    "MySQL",
    "Swagger",
    "PHPUnit",
    "REST API"
  ],
  buttonColor: "bg-purple-400 hover:bg-purple-300",
  borderColor: "hover:border-purple-400/40",
},
  {
  id: 6,
  title: "Appointment Booking System",
  description:
    "Fullstack appointment booking application with Laravel Sanctum authentication, multi-role management and real-time appointment handling.",
  image: "/images/imagesProjects/booking.jpg",
  technologies: [
    "React",
    "Laravel",
    "Sanctum",
    "MySQL",
    "TailwindCSS",
    "PHPUnit"
  ],
  buttonColor: "bg-cyan-400 hover:bg-cyan-300",
  borderColor: "hover:border-cyan-400/40",
},
  {
  id: 7,
  title: "MyTiq Ticketing Platform",
  description:
    "Modern event ticketing platform built with React and Laravel for managing events, ticket purchases, newsletters and secure user authentication.",
  image: "/images/imagesProjects/event.jpg",
  technologies: [
    "React",
    "Laravel",
    "Sanctum",
    "MySQL",
    "REST API",
    "Context API"
  ],
  buttonColor: "bg-pink-400 hover:bg-pink-300",
  borderColor: "hover:border-pink-400/40",
},
{
  id: 8,
  title: "HealthCare",
  description:
    "Full-stack medical appointment platform for managing patients, doctors, consultations and secure internal messaging with role-based dashboards.",
  image: "/images/imagesProjects/medical.jpg",
  technologies: [
    "React",
    "Laravel",
    "MySQL",
    "Tailwind CSS",
    "REST API"
  ],
  buttonColor: "bg-emerald-400 hover:bg-emerald-300",
  borderColor: "hover:border-emerald-400/40",
},
];

export default function AllProjects() {
  const [showAll,setShowAll]=useState(false);
  const  displayprojects=showAll? projects:projects.slice(0,4)
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container relative z-10 flex flex-col mx-auto space-y-12">

        <div className="flex justify-center items-center gap-3">
          <div className="h-10 w-[3px] bg-green-400"></div>
          <h2 className="text-3xl font-semibold">Projects</h2>
        </div>

        <p className="font-mono text-gray-300 text-sm leading-relaxed text-center max-w-2xl m-auto">
          Passionné par le développement web, j’ai réalisé plusieurs projets avec React, Laravel et JavaScript.
        </p>

       <div className="py-24 px-6  text-white">

  
  <div className="max-w-6xl mx-auto space-y-32">
    
    {displayprojects.map((project, index) => (
      <div
        key={project.id}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        
       
        <div
          className={`
            space-y-5
            ${index % 2 !== 0 ? "md:order-2" : ""}
          `}
        >
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-semibold">
            Project {project.id}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            {project.title}
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          {/* TECHNOLOGIES */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-4 py-2 border border-cyan-400/20 bg-cyan-400/5 rounded-full text-sm text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>

        
        </div>

        
        <div
          className={`
            relative flex justify-center
            ${index % 2 !== 0 ? "md:order-1" : ""}
          `}
        >
       
          <div className="absolute w-[90%] h-[90%] border-[1px] border-cyan-400 rounded-xl bottom-[-15px] left-[-15px] z-0"></div>

          {/* IMAGE */}
          <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-md rounded-xl object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    ))}
  </div>

 
  <div className="flex justify-center mt-24">
    
      <button 
      onClick={()=>{setShowAll(!showAll);  if (showAll) {
      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    }}  } className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-green-600 hover:scale-105 transition duration-300 font-semibold">
      {showAll? 'View Less':'View All'} 
    </button>
    
    
  </div>
</div>
      </div>
    </section>
  );
}