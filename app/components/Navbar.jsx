"use client";

import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "/");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
        <nav
        className={`
          fixed z-50 transition-all duration-500 font-mono
          ${
            scrolled
              ? "top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-auto flex items-center justify-between bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl"
              : "top-0 left-0 w-full flex justify-between items-center  py-4 px-6"
          }
        `}
      >
      <Link
        href="/"
        className={`text-sm font-light tracking-wide whitespace-nowrap ${
          scrolled ? "hidden" : "hidden md:flex justify-end"
        }`}
      >
        KHAWLA SABER
      </Link>

<ul
  className={`
    hidden md:flex 
    ${scrolled ? "gap-4 text-center" : "gap-6 text-sm"}
  `}
>
  {links.map((link, index) => (
    <li key={index}>
      <Link
        href={link.href}
        onClick={() => setActive(link.href)}
        className={`transition-colors duration-300 ${
          active === link.href
            ? "text-green-400"
            : "text-white"
        }`}
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-3xl text-white flex justify-end w-full"
>
  {menuOpen ? <HiX /> : <HiMenu />}
</button>

{menuOpen && (
  <div className="md:hidden fixed inset-0  flex flex-col">

  
    <div className="flex justify-end p-6">
     {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-3xl text-white flex justify-end w-full"
        >
          <HiMenu />
        </button>
      )}
    </div>

    <div className="flex flex-1 items-center justify-center bg-black/80 ">
      <ul className="flex flex-col gap-8 text-center w-full">
        {links.map((link, i) => (
          <li key={i} className="w-full">
            <Link
              href={link.href}
              onClick={() => {
                setActive(link.href);
                setMenuOpen(false);
              }}
              className="block w-full py-4 text-xl text-white hover:text-green-400 transition"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>

  </div>
)}
    </nav>
  );
}

