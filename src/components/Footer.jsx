// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Whatsapp, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "WhatsApp", icon: Whatsapp, href: "https://wa.me/123456789" },
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
