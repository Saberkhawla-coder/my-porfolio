"use client";

import Image from "next/image";
import ParticlesBackground from "./components/ParticlesBackground";
import Link from "next/link";
import About from "./about/page";
import { motion, useScroll, useTransform } from "framer-motion";
import Skills from "./skills/page";
import AllProjects from "./project/page";
import ContactPage from "./contact/page";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const filter = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["blur(0px)", "blur(8px)"]
  );

  return (
    <div className="overflow-x-hidden">
      <ParticlesBackground />

      {/* HERO SECTION */}
      <motion.section
        style={{ filter }}
        className="relative min-h-screen m-auto flex items-center overflow-hidden px-4 sm:px-6 lg:px-10 py-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10 w-full">

          
          <div className=" m-auto  text-center md:text-left">

            <p className="font-mono text-sm sm:text-base lg:text-lg text-gray-400 mb-4">
              Hey 🖐, I&apos;m a Full Stack Developer
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-green-500 leading-tight mb-6 break-words">
              KHAWLA SABER
            </h1>

            <p className="text-gray-300 text-sm sm:text-base text-center md:text-justify max-w-md mx-auto md:mx-0 leading-relaxed mb-6">
              I build modern and scalable web applications using
              React.js and Laravel, focusing on clean interfaces
              and reliable backend systems.
            </p>

         
            <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-gray-400 font-mono flex-wrap">

              <Link
                href="https://www.linkedin.com/in/khawla-saber/"
                className="hover:text-white transition"
              >
                LinkedIn
              </Link>

              <Link
                href="https://github.com/Saberkhawla-coder"
                className="hover:text-white transition"
              >
                GitHub
              </Link>

            </div>
          </div>

         
          <div className="relative flex justify-center">

          
            <div className="absolute w-56 h-auto sm:w-72 sm:h-72 bg-green-500 rounded-full blur-3xl opacity-40"></div>

           
            <Image
              src="/images/test2.png"
              alt="Khawla Saber"
              width={320}
              height={320}
              priority
              className="relative object-cover rounded-2xl shadow-2xl flex items-center w-56 sm:w-72 md:w-80 h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <div id="about">
        <About />
      </div>

      {/* SKILLS */}
      <div id="skill">
        <Skills />
      </div>

      {/* PROJECTS */}
      <div id="project">
        <AllProjects />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
}