'use client';
import Link from "next/link";
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
    <section style={{filter}} className="relative min-h-[90vh]  flex items-center justify-center">
       
      <div   className="container mx-auto py-4 px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
     
       <div className="relative flex justify-center items-center">

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
                <FaLaravel className=" text-3xl"  />
            </motion.div>
   


</div>
        {/* About text */}
        <div className="space-y-6">

          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-[3px] bg-green-400"></div>
            <h1 className="text-3xl font-semibold">About</h1>
          </div>

       
            <p className="font-mono text-gray-300 text-sm leading-relaxed max-w-lg text-justify">
           I am a passionate Full-Stack Web Developer based in Casablanca. I specialize in building
            modern and scalable web applications using React.js and Laravel. I enjoy creating clean
            user interfaces and secure backend systems. During my training at Simplon Maghreb, I
            worked on real-world projects including e-commerce and medical management platforms.
            I am always eager to learn new technologies and improve my development skills.
            </p>
            <div className="flex max-w-lg justify-between">
                <div className="flex  items-center gap-2 text-gray-300 font-mono">
                    <BiLogoGmail className="text-green-400"/>khawla.saber06@gmail.com
                </div>
                <div className="flex  items-center gap-2 text-gray-300 font-mono ">
                    <FaPhone className="text-green-400"/> 0770511710
                </div>
              
                
            </div>
            <a
                href="/KHAWLA_SABER_CV.pdf"
                download
                className="hover:text-white bg-green-400/35 p-2 rounded transition"
                >
                Download CV
            </a>

        </div>

      </div>
      

    </section>

    </>
   
  );
}