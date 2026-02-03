import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";


const testimonials = [
  {
    name: "Sarah Khan",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Ali is an exceptional developer! His attention to detail and smooth UI designs really brought our project to life.",
  },
  {
    name: "Ahmed Raza",
    role: "CEO, TechCorp",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "Working with Ali was a pleasure. He delivered high-quality code and beautiful animations that impressed our clients.",
  },
  {
    name: "Maria Ali",
    role: "UI Designer",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    feedback:
      "Ali’s creativity and frontend skills are top-notch. His designs are both functional and visually stunning.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="Testimonials"
      className="py-28 px-6 bg-gray-100 dark:bg-gray-950"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          What <span className="text-blue-500">Clients Say</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Feedback from clients and colleagues about my work and professionalism.
        </p>
      </div>

      {/* Testimonial Card */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 text-center relative"
      >
        <img
          src={testimonials[index].img}
          alt={testimonials[index].name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500"
        />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {testimonials[index].name}
        </h3>
        <p className="text-blue-500 font-medium mb-4">{testimonials[index].role}</p>
        <p className="text-gray-700 dark:text-gray-300">{testimonials[index].feedback}</p>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            ◀
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            ▶
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
