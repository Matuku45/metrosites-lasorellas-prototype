// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X, Home, Scissors, Image, Calendar, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
        <motion.div
          className="flex items-center gap-2 text-2xl font-bold text-blue-600 cursor-pointer"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Scissors className="w-6 h-6 animate-spin-slow text-blue-500" />
          <Link to="/">La Sorellas</Link>
        </motion.div>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              className="flex items-center gap-1 font-medium text-blue-600 hover:text-blue-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <link.icon className="w-5 h-5" />
              <Link to={link.href}>{link.name}</Link>
            </motion.div>
          ))}
        </nav>

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
                <Link
                  to={link.href}
                  className="flex items-center gap-2 font-medium text-blue-600 hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
