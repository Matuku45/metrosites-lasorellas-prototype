// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, Home, Scissors, Image, Calendar, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links with icons
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Scissors },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Booking", href: "/booking", icon: Calendar },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo with icon and bounce animation */}
        <motion.a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Scissors className="w-6 h-6 animate-spin-slow text-blue-500" />
          La Sorellas
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isOpen ? <X size={28} className="text-blue-600" /> : <Menu size={28} className="text-blue-600" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu with fade-in */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md"
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
