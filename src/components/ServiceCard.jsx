// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
  const primaryColor = "oklch(88.2% 0.059 254.128)";
  const secondaryColor = "oklch(80.9% 0.105 251.813)";

  return (
    <motion.div
      className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-white hover:shadow-2xl cursor-pointer transition-shadow w-full"
      whileHover={{ scale: 1.05, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className="p-4 rounded-full mb-4 shadow-md"
        style={{ backgroundColor: secondaryColor }}
      >
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3
        className="text-xl font-bold mb-2 text-center"
        style={{ color: primaryColor }}
      >
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
}
