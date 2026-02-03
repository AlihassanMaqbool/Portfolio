// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import React from "react";


// const filters = ["All", "Frontend", "Backend", "Tools"];

// const skills = [
//   {
//     title: "React",
//     desc: "Component-based UI development with hooks and state.",
//     img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
//     level: 85,
//     type: "Frontend",
//   },
//   {
//     title: "Tailwind CSS",
//     desc: "Utility-first modern and responsive UI design.",
//     img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
//     level: 90,
//     type: "Frontend",
//   },
//   {
//     title: "JavaScript",
//     desc: "Core language for logic, DOM & async programming.",
//     img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
//     level: 80,
//     type: "Frontend",
//   },
//   {
//     title: "API Integration",
//     desc: "REST APIs, fetch & async data handling.",
//     img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
//     level: 70,
//     type: "Backend",
//   },
//   {
//     title: "Git & GitHub",
//     desc: "Version control and collaboration workflow.",
//     img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
//     level: 75,
//     type: "Tools",
//   },
//   {
//     title: "UI / UX",
//     desc: "Clean layouts and user-focused design thinking.",
//     img: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
//     level: 65,
//     type: "Tools",
//   },
// ];

// const floatAnim = {
//   animate: {
//     y: [0, -12, 0],
//   },
//   transition: {
//     duration: 4,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// const Skills = () => {
//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All"
//       ? skills
//       : skills.filter((s) => s.type === active);

//   return (
//     <section
//       id="Skills"
//       className="py-28 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900"
//     >
//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//           My <span className="text-blue-500">Skills</span>
//         </h2>
//         <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           Technologies and tools I use to build modern, animated, and scalable
//           web applications.
//         </p>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex justify-center gap-4 mb-16 flex-wrap">
//         {filters.map((f) => (
//           <button
//             key={f}
//             onClick={() => setActive(f)}
//             className={`px-6 py-2 rounded-full backdrop-blur-md border transition
//               ${
//                 active === f
//                   ? "bg-blue-600 text-white border-blue-600"
//                   : "bg-white/40 dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 border-white/30"
//               }`}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       {/* Cards */}
//       <motion.div
//         layout
//         className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
//       >
//         <AnimatePresence>
//           {filtered.map((skill, index) => (
//             <motion.div
//               key={skill.title}
//               layout
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               transition={{ duration: 0.6 }}
//               whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
//               className="relative backdrop-blur-xl bg-white/40 dark:bg-gray-900/40
//                          border border-white/30 rounded-2xl p-8 shadow-xl
//                          cursor-pointer transform-gpu"
//             >
//               {/* Floating Effect */}
//               <motion.div {...floatAnim}>
//                 {/* Image */}
//                 <div className="flex justify-center mb-6">
//                   <img
//                     src={skill.img}
//                     alt={skill.title}
//                     className="w-20 h-20 object-contain"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
//                   {skill.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-5">
//                   {skill.desc}
//                 </p>

//                 {/* Progress Bar */}
//                 <div className="w-full bg-white/40 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 1.2 }}
//                     viewport={{ once: true }}
//                     className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
//                   />
//                 </div>

//                 <p className="text-right text-sm mt-2 text-gray-700 dark:text-gray-300">
//                   {skill.level}%
//                 </p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;



import { motion } from "framer-motion";
import React from "react";


const skills = [
  {
    title: "React Development",
    desc: "Building fast, scalable, and component-based user interfaces.",
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  },
  {
    title: "Tailwind CSS",
    desc: "Creating clean, responsive, and modern UI designs efficiently.",
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    title: "JavaScript",
    desc: "Writing clean logic, handling DOM, and working with APIs.",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    title: "API Integration",
    desc: "Fetching and managing dynamic data from REST APIs.",
    img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png",
  },
  {
    title: "UI / UX Design",
    desc: "Designing user-friendly and visually appealing interfaces.",
    img: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
  },
  {
    title: "Git & GitHub",
    desc: "Version control and collaborative development workflow.",
    img: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Skills = () => {
  return (
    <section
      id="Skills"
      className="py-28 px-6 bg-gray-100 dark:bg-gray-950"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, high-quality web
          applications.
        </p>
      </motion.div>

      {/* <Pointer /> */}
      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{
              scale: 1.08,
              rotateX: 6,
              rotateY: -6,
            }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl text-center  transform transition"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <img
                src={skill.img}
                alt={skill.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Heading */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {skill.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
