// src/components/BookingForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Calendar, Clock, Smartphone } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We will contact you shortly.");
    setFormData({ name: "", phone: "", service: "", date: "", time: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Book Your Appointment
      </h2>

      {/* Name */}
      <div className="form-control mb-4">
        <label className="input-group">
          <span className="bg-purple-600 text-white">
            <User className="w-5 h-5" />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
      </div>

      {/* Phone */}
      <div className="form-control mb-4">
        <label className="input-group">
          <span className="bg-purple-600 text-white">
            <Smartphone className="w-5 h-5" />
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
      </div>

      {/* Service */}
      <div className="form-control mb-4">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Select Service
          </option>
          <option>Hair Styling</option>
          <option>Nail Art</option>
          <option>Spa Treatment</option>
          <option>Full Package</option>
        </select>
      </div>

      {/* Date */}
      <div className="form-control mb-4">
        <label className="input-group">
          <span className="bg-purple-600 text-white">
            <Calendar className="w-5 h-5" />
          </span>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
      </div>

      {/* Time */}
      <div className="form-control mb-6">
        <label className="input-group">
          <span className="bg-purple-600 text-white">
            <Clock className="w-5 h-5" />
          </span>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </label>
      </div>

      <motion.button
        type="submit"
        className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Submit Booking
      </motion.button>
    </motion.form>
  );
}
