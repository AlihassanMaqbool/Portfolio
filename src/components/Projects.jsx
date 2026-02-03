// import { useState } from "react";
// import React from "react";
// import { motion } from "framer-motion";

// export default function Projects() {
//   const [open, setOpen] = useState(null);

//   return (
//     <section id="Projects" className="py-20 bg-gray-100 dark:bg-gray-900">
//       <h2 className="text-4xl text-center font-bold mb-10">Projects</h2>

//       <div className="grid md:grid-cols-3 gap-8 px-10">
//         {[1,2,3].map(p=>(
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             key={p}
//             onClick={()=>setOpen(p)}
//             className="bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer"
//           >
//             <h3 className="text-xl font-semibold">Project {p}</h3>
//             <p className="text-gray-500">Click to view details</p>
//           </motion.div>
//         ))}
//       </div>

//       {open && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
//           <div className="bg-white dark:bg-gray-900 p-8 rounded-xl max-w-md">
//             <h2 className="text-2xl font-bold">Project {open}</h2>
//             <p className="mt-4 text-gray-500">
//               Full React project with animations and clean UI.
//             </p>
//             <button
//               onClick={()=>setOpen(null)}
//               className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import React from "react";
import { useState } from "react";
import img1 from "../assets/images.jpg"
import img2 from "../assets/download (1).jpg"
import img3 from "../assets/download (2).jpg"
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    title: "Portfolio Website",
    img: img1,
    desc: "A modern portfolio built with React and Tailwind CSS with smooth animations.",
    link: "#",
  },
  {
    title: "E-commerce App",
    img: img2,
    desc: "Responsive online store with product filtering and dynamic cart features.",
    link: "#",
  },
  {
    title: "Blog Platform",
    img: img3,
    desc: "Blog website with CMS integration and smooth reading experience.",
    link: "#",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="Projects"
      className="py-28 px-6 bg-gray-100 dark:bg-gray-950"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are some of my latest works showcasing my skills in development
          and design.
        </p>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {projectData.map((project, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl  group"
            onClick={() => setSelected(project)}
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-4">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg p-8 relative shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>

              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {selected.desc}
              </p>
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
