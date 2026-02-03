import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter"
import React from "react";


export default function About() {
  return (
    <section
      id="About"
      className="py-24 px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            I’m <span className="font-semibold text-gray-900 dark:text-white">
              Ali Hassan
            </span>, a passionate
            Frontend Developer
            who loves creating modern, interactive, and visually stunning web experiences.
          </p>


          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            My focus is on building clean UI, smooth animations, and
            responsive designs using <strong>React</strong>,
            <strong> Tailwind CSS</strong>, and modern
            JavaScript.
            I enjoy turning complex problems into simple and elegant solutions.
          </p>

          <div className="flex gap-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-500">1+</h3>
              <p className="text-gray-500">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-500">15+</h3>
              <p className="text-gray-500">Projects Completed</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-gray-900 p-10 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">What I Do</h3>

          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li>🚀 Build modern React applications</li>
            <li>🎨 Design clean & responsive UI</li>
            <li>✨ Create smooth animations with Framer Motion</li>
            <li>🔗 Integrate APIs & dynamic data</li>
            <li>⚡ Optimize performance & UX</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
