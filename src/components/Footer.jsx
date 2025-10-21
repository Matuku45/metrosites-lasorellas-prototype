// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { 
      name: "WhatsApp", 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.003 3C9.373 3 4 8.372 4 15c0 2.667.873 5.133 2.336 7.167L4 29l6.008-2.3C12.067 27.1 14.013 27.8 16 27.8c6.63 0 12-5.373 12-12S22.633 3 16.003 3zm6.2 16.2c-.3.85-1.733 1.567-2.367 1.667-.6.1-1.3.1-2.733-.5-2.367-1.067-3.9-3.867-4.033-4.033-.133-.167-1-1.3-1-2.367 0-1.067.567-1.633.767-1.833.2-.2.433-.3.733-.3.3 0 .6 0 .867.067.267.067.667-.1.967.667.3.767 1 2.633 1.067 2.833.067.2.1.433 0 .667-.1.233-.133.367-.267.567-.133.2-.3.433-.433.6-.133.167-.267.367-.133.633.133.267.6 1 1.267 1.633.867.833 1.533 1.1 1.767 1.233.233.133.367.1.5-.067.133-.167.567-.667.733-.9.167-.233.3-.2.5-.133.2.067 1.267.6 1.467.7.2.1.333.167.367.267.033.1.033.6-.267 1.45z"/>
        </svg>
      ),
      href: "https://wa.me/123456789"
    },
    { name: "Email", icon: Mail, href: "mailto:info@lasorellas.com" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[oklch(58.8%_0.158_241.966)] to-[oklch(87.1%_0.006_286.286)] text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Info */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-2">La Sorellas</h2>
          <p className="text-sm md:text-base text-white/80">
            Luxury Hair, Nail & Beauty Studio. Pampering you with style and elegance.
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn btn-circle btn-sm bg-white/20 hover:bg-white/40 border-none text-white shadow-md"
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-white/70">
        © {new Date().getFullYear()} La Sorellas. All rights reserved.
      </div>
    </footer>
  );
}
