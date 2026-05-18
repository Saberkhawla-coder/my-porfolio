'use client';
import Image from "next/image";
import { FaReact,FaLaravel,FaJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaPhone } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion, useScroll, useTransform} from 'framer-motion';
import { BiLogoGmail } from "react-icons/bi";
export default function About() {
     const {scrollYProgress}=useScroll();
  const filter=useTransform(
    scrollYProgress,
    [0, 0.5],
    ['blur(0px)', 'blur(8px)']
  )
  return (
    <> 
    <section style={{filter}} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10">
       
      <div   className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        
     
       <div className="relative flex justify-center items-center order-2 md:order-1">

       <div className="absolute w-99 h-99 bg-green-500 rounded-full blur-3xl opacity-40"></div>


        <div className="relative w-90 h-90 rounded-full overflow-hidden shadow-2xl ">
            <Image
            src="/images/magicHand.png"
            alt="Hand"
            fill
            className="object-cover"
            />
        </div>
        <motion.div 
            className="absolute"
            style={{ top: "60%", left: "45%" }}
            animate={{rotate:360}}
            transition={{
                duration:6,
                repeat:Infinity,
                ease: "linear"
            }}
            >
                <RiTailwindCssFill className=" text-3xl text-blue-400" />
            </motion.div>
        
            <motion.div
                className="absolute"
                style={{ top: "40%", left: "48%" }}
                animate={{ rotate: 360 }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
                }}>
                <FaJs
                className="text-3xl text-yellow-400"
                
            />
            </motion.div>
        
            <motion.div
                className="absolute"
                style={{ top: "25%", left: "50%" }}
                animate={{ rotate: 360 }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
                }}
            >
                <FaReact className="text-3xl text-blue-400" />
            </motion.div>
            <motion.div
            className="absolute"
            style={{ bottom: "40%", right: "40%" }}
            animate={{rotate:360}}
            transition={{
                duration:6,
                repeat:Infinity,
                ease:'linear'
            }} >
            <DiMysql className="text-3xl "/>
            </motion.div>

            <motion.div 
            className="absolute"
            style={{ bottom: "45%", right: "55%" }}
            animate={{rotate:360}}
            transition={{
                duration:6,
                repeat:Infinity,
                ease:'linear'
            }}
            >
                <FaLaravel className=" text-3xl text-red-500"  />
            </motion.div>
   


</div>
        {/* About text */}
        <div className="space-y-6 text-center md:text-left rder-1 md:order-2">

          {/* title */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="h-8 w-[3px] bg-green-400"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              About
            </h1>
          </div>

          {/* paragraph */}
          <p className="font-mono text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
            I am a passionate Full-Stack Web Developer based in Casablanca. I specialize in building modern and scalable web applications using React.js and Laravel. I enjoy creating clean user interfaces and secure backend systems.
          </p>

          {/* contact */}
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-between text-gray-300 font-mono text-sm">

            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <BiLogoGmail className="text-green-400" />
              <span className="break-all">khawla.saber06@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <FaPhone className="text-green-400" />
              0770511710
            </div>
          </div>

          {/* button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/KHAWLA_SABER_CV.pdf"
              download
              className="hover:text-white bg-green-400/35 px-4 py-2 rounded transition"
            >
              Download CV
            </a>
          </div>

        </div>

      </div>
      

    </section>

    </>
   
  );
}