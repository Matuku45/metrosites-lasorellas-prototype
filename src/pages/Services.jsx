// src/pages/Services.jsx
import React from "react";
import { Scissors, Star, Droplet, Layers } from "lucide-react"; // Safe icons
import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {
  const services = [
    {
      title: "Hair Styling",
      description: "Professional haircuts, coloring, and styling for all occasions.",
      icon: Scissors,
    },
    {
      title: "Nail Art",
      description: "Creative nail designs, gel polish, and luxury manicures.",
      icon: Star,
    },
    {
      title: "Spa Treatments",
      description: "Relaxing massages, facials, and skincare treatments.",
      icon: Droplet,
    },
    {
      title: "Makeup & Beauty",
      description: "Professional makeup services for events and photoshoots.",
      icon: Layers,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[oklch(95%_0.05_320)] px-6 py-16">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: "oklch(88.2% 0.059 254.128)" }}
        >
          Our Services
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Explore the range of luxury services offered at La Sorellas Hair, Nail & Beauty Studio.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}
