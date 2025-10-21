// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Users, Star, Heart, Gift } from "lucide-react";

export default function About() {
  const primaryColor = "oklch(66.7% 0.295 322.15)";
  const secondaryColor = "oklch(87% 0.05 320)";

  const highlights = [
    { icon: Users, title: "Our Team", description: "Professional stylists, nail artists, and beauty experts dedicated to making you shine." },
    { icon: Star, title: "Our Mission", description: "Deliver luxury beauty services with creativity, precision, and elegance." },
    { icon: Heart, title: "Our Values", description: "Passion, care, and attention to detail in every treatment we provide." },
    { icon: Gift, title: "Customer Experience", description: "A relaxing and personalized experience, leaving every client delighted." },
  ];

  return (
    <div className="px-6 py-16 bg-gradient-to-b from-white to-[oklch(95%_0.05_320)] text-center">
      
      {/* Hero / About Intro */}
      <motion.div
        className="max-w-3xl mx-auto rounded-lg p-8 shadow-lg bg-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: primaryColor }}>
          About La Sorellas
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          La Sorellas Hair, Nail & Beauty Studio is where luxury meets creativity. We blend modern techniques with elegance to provide exceptional services for our valued clients.
        </p>
        <motion.a
          href="/booking"
          className="btn btn-primary bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Book Your Experience
        </motion.a>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {highlights.map((item) => (
          <motion.div
            key={item.title}
            className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <item.icon className="w-12 h-12 mb-4 text-[oklch(66.7%_0.295_322.15)]" />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mission / Brand Story */}
      <motion.div
        className="mt-20 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: primaryColor }}>
          Our Story
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Founded with a vision of excellence, La Sorellas has become a sanctuary for beauty enthusiasts seeking professional hair, nail, and spa services. Our team is committed to ensuring every client feels pampered, confident, and radiant.
        </p>
        <motion.a
          href="/services"
          className="btn btn-outline btn-primary text-[oklch(66.7%_0.295_322.15)] px-6 py-3 rounded-lg shadow hover:bg-[oklch(66.7%_0.295_322.15)] hover:text-white transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Explore Our Services
        </motion.a>
      </motion.div>
    </div>
  );
}
