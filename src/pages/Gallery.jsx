import React from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function Gallery() {
  const primaryColor = "oklch(88.2% 0.059 254.128)";
  const secondaryColor = "oklch(80.9% 0.105 251.813)";

  // Define gallery images directly based on your folder
  const galleryImages = [
    "/assets/galleryImages/one.jpg",
    "/assets/galleryImages/two.webp",
    "/assets/galleryImages/three.webp",
    "/assets/galleryImages/four.jpg",
    "/assets/galleryImages/five.webp",
    "/assets/galleryImages/six.webp",
    "/assets/galleryImages/seven.jpg",
  ];

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
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <ImageIcon className="w-10 h-10 text-white animate-pulse" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: secondaryColor }}
        >
          Want Your Own Style?
        </h2>
        <p className="text-gray-700 mb-6">
          Book an appointment today and let our experts transform your look!
        </p>
        <motion.a
          href="/booking"
          className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform bg-gradient-to-r from-pink-400 to-purple-500"
          whileHover={{ scale: 1.1 }}
        >
          Book Now
        </motion.a>
      </motion.div>
    </div>
  );
}
