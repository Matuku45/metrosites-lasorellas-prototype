// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Scissors, Hand, Droplet, Calendar } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Hair Styling", icon: Scissors },
    { name: "Nail Art", icon: Hand },
    { name: "Spa Treatments", icon: Droplet },
    { name: "Online Booking", icon: Calendar },
  ];

  const primaryColor = "oklch(66.7% 0.295 322.15)";

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-white to-[oklch(95%_0.05_320)]">
      
      {/* Hero Section */}
      <motion.div
        className="max-w-3xl rounded-lg p-8 shadow-lg bg-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: primaryColor }}
        >
          Welcome to La Sorellas Salon
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Where beauty meets creativity! Luxury hair, nail, and spa services designed for you.
        </p>
        <motion.a
          href="/booking"
          className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Book an Appointment
        </motion.a>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.name}
            className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <service.icon className="w-12 h-12 mb-4 text-[oklch(66.7%_0.295_322.15)]" />
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* About / Tagline */}
      <motion.div
        className="mt-20 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: primaryColor }}
        >
          Experience the Art of Beauty
        </h2>
        <p className="text-gray-700 text-lg">
          At La Sorellas, we blend modern techniques with elegance to make every visit memorable. Our team of experts ensures your style, nails, and spa treatments are perfect every time.
        </p>
      </motion.div>
    </div>
  );
}
