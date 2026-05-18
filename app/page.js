"use client";
import Image from "next/image";
import ParticlesBackground from "./components/ParticlesBackground";
import Link from "next/link";
import About from "./about/page";
import {motion, useScroll, useTransform} from 'framer-motion';
import Skills from "./skills/page";
import AllProjects from "./project/page";
import ContactPage from "./contact/page";
export default function Home() {
  
  const {scrollYProgress}=useScroll();
  const filter=useTransform(
    scrollYProgress,
    [0, 0.5],
    ['blur(0px)', 'blur(8px)']
  )

  return (
    <div>
  <ParticlesBackground/>
        <motion.section style={{filter}} className="relative min-h-[100vh]  flex items-center overflow-hidden">
        

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          <div>
            <p className="font-mono text-lg text-gray-400 mb-4">
              Hey 🖐, I&apos;m a Full Stack Developer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-500 leading-tight mb-6">
              KHAWLA SABER
            </h1>

            <p className="text-gray-300 text-justify max-w-md leading-relaxed mb-6">
             I build modern and scalable web applications using React.js and Laravel, focusing on clean interfaces and reliable backend systems.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400 font-mono">
              <Link href="https://www.linkedin.com/in/khawla-saber/" className="hover:text-white transition">LinkedIn</Link>
              <Link href="https://github.com/Saberkhawla-coder" className="hover:text-white transition">GitHub</Link>
              
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-60"></div>

            <Image
              src="/images/test1.png"
              alt="Khawla Saber"
              width={299}
              height={299}
              className="relative object-cover rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </motion.section>
      <div id="about">
         <About/>
      </div>
      <div id="skill">
        <Skills/>
      </div>
      <div id='project'>
        <AllProjects/>
      </div>
      <div id='contact'>
        <ContactPage/>
      </div>
      
    </div>
  
  );
}