// src/pages/Gallery.jsx
import React from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react"; // Safe Lucide icon
import galleryImages from "../assets/galleryImages"; // Assume an array of image URLs

export default function Gallery() {
  const primaryColor = "oklch(88.2% 0.059 254.128)";
  const secondaryColor = "oklch(80.9% 0.105 251.813)";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[oklch(95%_0.05_320)] px-6 py-16">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: primaryColor }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Gallery
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Explore our work – hair, nails, spa treatments, and more!
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <ImageIcon className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
