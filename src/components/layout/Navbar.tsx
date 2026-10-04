"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { label: "BUY", path: "/properties?type=buy" },
    { label: "RENT", path: "/properties?type=rent" },
    { label: "SAVED", path: "/saved" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Home className="w-6 h-6 text-white" />
          <span className="text-xl font-bold tracking-wide text-white">
            Nestora
          </span>
        </Link>

        {/* Small Links */}
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-xs font-semibold tracking-wider text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Profile Icon */}
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white cursor-pointer hover:bg-white/20 transition-colors">
            <User className="w-5 h-5" />
          </div>
        </div>
      </nav>
    </header>
  );
}