// src/pages/Booking.jsx
import React from "react";
import { motion } from "framer-motion";
import BookingForm from "../components/BookingForm.jsx";

export default function Booking() {
  const primaryColor = "oklch(66.7% 0.295 322.15)";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[oklch(95%_0.05_320)] px-6 py-16">
      
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: primaryColor }}
        >
          Book Your Appointment
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Schedule your visit to La Sorellas Hair, Nail & Beauty Studio. Choose your preferred service, date, and time, and let us pamper you!
        </p>
      </motion.div>

      {/* Booking Form */}
      <BookingForm />

      {/* Additional Info */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto text-center text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
          Studio Information
        </h2>
        <p>📍 Location: 123 La Sorellas Lane, Beauty City</p>
        <p>⏰ Operating Hours: Mon-Sat 9:00 AM - 7:00 PM</p>
        <p>📞 Contact: +27 123 456 789 | info@lasorellas.com</p>
      </motion.div>
    </div>
  );
}
