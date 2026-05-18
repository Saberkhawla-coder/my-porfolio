"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
export default function ContactPage() {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
   const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("✔ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
};
  return (
    <section className=" min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10 bg-zinc-900/70 rounded-3xl sm:rounded-4xl mx-3 sm:mx-6 lg:mx-20">      
     
      <div className=" flex justify-center items-center mb-10 ">
       

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Contact
        </h2>
      </div>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-5">
        
       
        <div className="space-y-6">
          <h1 className="text-2xl text-center md:text-left  sm:text-3xl md:text-4xl font-bold leading-tight">
            Let’s work together.
          </h1>

         <p className="text-zinc-400 text-center md:text-left leading-relaxed text-lg">
            I’m available for freelance projects, internships,
            and full-stack web development opportunities.
            I enjoy building modern, responsive, and user-friendly
            web applications using React, Next.js, Laravel, and
            modern web technologies.
        </p>

          <div className="space-y-4 text-zinc-300">
            <p className="flex justify-center md:justify-start  items-center gap-2">
              <span className="text-green-400">
                <FaPhoneAlt/>
              </span>
              0770511710
            </p>

            <p className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-green-400">
                <IoMdMail/>
              </span>
              khawla.saber06@gmail.com
            </p>

            <p className="flex justify-center md:justify-start items-center gap-2">
              <span className="text-green-400">
                <FaLocationDot />
              </span>
              Casablanca, Morocco
            </p>
          </div>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/60 p-5 sm:p-8 md:p-10 rounded-3xl backdrop-blur-md border border-zinc-800 shadow-2xl">
          
          <div className="space-y-2">
            <label className="text-sm text-zinc-400">
              Full Name
            </label>

            <input
              type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-black border border-zinc-700 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-green-400 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">
              Email
            </label>

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              placeholder="your@email.com"
              className="w-full bg-black border border-zinc-700 rounded-xl px-3 sm:px-4 py-2 sm:py-3 outline-none focus:border-green-400 transition"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">
              Message
            </label>

            <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
              placeholder="Write your message..."
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 outline-none focus:border-green-400 transition resize-none"
            />
          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <footer className="mt-5 px-6 ">
  
  <div className="bg-green-400/70 h-[1px] w-full mb-8"></div>

    <div className="text-center  w-full">
     

      <p className="text-zinc-500 text-sm mt-2 ">
        © 2026 Khawla Saber. All rights reserved.
      </p>
    </div>


 
</footer>
    </section>
  );
}