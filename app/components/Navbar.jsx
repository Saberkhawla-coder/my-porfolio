"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("/");
  const [scrolled, setScrolled] = useState(false);

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
            ? "bottom-10 left-1/2 -translate-x-1/2 flex items-center bg-zinc-900/70 backdrop-blur-md p-4 rounded-2xl gap-4"
            : "top-0 left-0 w-full flex justify-between items-center py-4 px-6"
        }
      `}
    >
      <Link
        href="/"
        className={`text-sm font-light tracking-wide whitespace-nowrap ${
          scrolled ? "hidden" : "flex"
        }`}
      >
        KHAWLA SABER
      </Link>

      <ul
        className={`${
          scrolled
            ? "flex gap-4 text-center"
            : "flex gap-6 text-sm"
        }`}
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
    </nav>
  );
}