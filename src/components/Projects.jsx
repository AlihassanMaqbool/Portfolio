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


// import React from "react";
// import { useState } from "react";
// import img1 from "../assets/images.jpg"
// import img2 from "../assets/download (1).jpg"
// import img3 from "../assets/download (2).jpg"
// import { motion, AnimatePresence } from "framer-motion";

// const projectData = [
//   {
//     title: "Portfolio Website",
//     img: img1,
//     desc: "A modern portfolio built with React and Tailwind CSS with smooth animations.",
//     link: "#",
//   },
//   {
//     title: "E-commerce App",
//     img: img2,
//     desc: "Responsive online store with product filtering and dynamic cart features.",
//     link: "#",
//   },
//   {
//     title: "Blog Platform",
//     img: img3,
//     desc: "Blog website with CMS integration and smooth reading experience.",
//     link: "#",
//   },
// ];

// const Projects = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section
//       id="Projects"
//       className="py-28 px-6 bg-gray-100 dark:bg-gray-950"
//     >
//       {/* Heading */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//           My <span className="text-blue-500">Projects</span>
//         </h2>
//         <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//           Here are some of my latest works showcasing my skills in development
//           and design.
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <motion.div
//         className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           show: {
//             transition: { staggerChildren: 0.2 },
//           },
//         }}
//       >
//         {projectData.map((project, idx) => (
//           <motion.div
//             key={idx}
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               show: { opacity: 1, y: 0 },
//             }}
//             whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
//             className="relative rounded-2xl overflow-hidden shadow-xl  group"
//             onClick={() => setSelected(project)}
//           >
//             {/* Project Image */}
//             <img
//               src={project.img}
//               alt={project.title}
//               className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//               <h3 className="text-white text-xl font-semibold text-center px-4">
//                 {project.title}
//               </h3>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Modal */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg p-8 relative shadow-2xl"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             >
//               <button
//                 className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl"
//                 onClick={() => setSelected(null)}
//               >
//                 &times;
//               </button>

//               <img
//                 src={selected.img}
//                 alt={selected.title}
//                 className="w-full h-64 object-cover rounded-lg mb-6"
//               />
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//                 {selected.title}
//               </h3>
//               <p className="text-gray-700 dark:text-gray-400 mb-6">
//                 {selected.desc}
//               </p>
//               <a
//                 href={selected.link}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
//               >
//                 View Project
//               </a>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Projects;


import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, X, Code2, Calendar, Layers, ArrowUpRight } from "lucide-react";

const projectImages = {
  portfolio: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  ecommerce: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  blog: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  task: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  social: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
};

// Enhanced project data with more details
const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    img: projectImages.portfolio,
    category: "Frontend",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    desc: "A stunning portfolio website featuring smooth scroll animations, dark mode support, and responsive design. Built with performance and accessibility in mind.",
    link: "#",
    github: "#",
    date: "2024",
    status: "Completed",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "E-commerce App",
    img: projectImages.ecommerce,
    category: "Full Stack",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    desc: "Full-featured online store with real-time inventory, secure payment processing, and advanced filtering. Includes admin dashboard and analytics.",
    link: "#",
    github: "#",
    date: "2024",
    status: "Live",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Blog Platform",
    img: projectImages.blog,
    category: "CMS",
    tech: ["React", "GraphQL", "PostgreSQL"],
    desc: "Modern blogging platform with markdown support, SEO optimization, and automated newsletter delivery. Features custom CMS and analytics dashboard.",
    link: "#",
    github: "#",
    date: "2023",
    status: "Completed",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 4,
    title: "Task Manager",
    img: projectImages.task,
    category: "Productivity",
    tech: ["Vue.js", "Firebase", "PWA"],
    desc: "Progressive web app for task management with offline support, real-time sync, and collaborative features. Includes drag-and-drop interface.",
    link: "#",
    github: "#",
    date: "2023",
    status: "Beta",
    color: "from-green-500 to-emerald-400"
  },
  // {
  //   id: 5,
  //   title: "AI Dashboard",
  //   img: projectImages.ai,
  //   category: "AI/ML",
  //   tech: ["Python", "TensorFlow", "React", "D3.js"],
  //   desc: "Interactive dashboard for visualizing machine learning model performance. Real-time data streaming and predictive analytics visualization.",
  //   link: "#",
  //   github: "#",
  //   date: "2024",
  //   status: "In Progress",
  //   color: "from-indigo-500 to-purple-600"
  // },
  // {
  //   id: 6,
  //   title: "Social Media App",
  //   img: projectImages.social,
  //   category: "Mobile",
  //   tech: ["React Native", "Socket.io", "Redis"],
  //   desc: "Cross-platform social media application with real-time messaging, stories, and push notifications. Optimized for performance and battery life.",
  //   link: "#",
  //   github: "#",
  //   date: "2023",
  //   status: "Live",
  //   color: "from-pink-500 to-rose-500"
  // }
];

const categories = ["All", ...new Set(projectData.map(p => p.category))];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects = filter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selected]);

  return (
    <section
      id="Projects"
      className="py-32 px-6 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <Layers className="w-4 h-4" />
            <span>Featured Work</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore my latest work featuring innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all cursor-none duration-300 ${
                filter === cat
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 z-0"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
                onClick={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500 z-0"
          >
            No projects found in this category
          </motion.div>
        )}
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

// 3D Tilt Card Component
const ProjectCard = ({ project, index, isHovered, onHover, onLeave, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group cursor-none perspective-1000 z-0"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl z-0 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden cursor-none ">
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 z-0 bg-linear-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
          
          {/* Hover Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 z-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <span className="text-sm font-medium uppercase tracking-wider mb-2">{project.category}</span>
            <h3 className="text-2xl font-bold text-center mb-4">{project.title}</h3>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm">View Details</span>
            </div>
          </motion.div>

          {/* Status Badge */}
          <div className="absolute z-0 top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
              project.status === "Live" ? "bg-green-500/20 text-green-300 border border-green-500/30" :
              project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30" :
              "bg-blue-500/20 text-blue-300 border border-blue-500/30"
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 z-0 cursor-none ">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 cursor-none  text-sm mb-4 line-clamp-2">
            {project.desc}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-xs">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Modal Component
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0  bg-black/80 backdrop-blur-sm flex items-center justify-center z-40 p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 cursor-none  bg-white/10 backdrop-blur-md rounded-full text-gray-800 dark:text-white hover:bg-white/20 transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Image */}
        <div className="relative h-72 md:h-96 overflow-hidden cursor-none ">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-linear-to-t ${project.color} opacity-30`} />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/80 to-transparent">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-3">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-500" />
                  About Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.desc}
                </p>
              </motion.div>

              {/* Tech Stack Detailed */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-linear-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-200 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-600 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    project.status === "Live" ? "border-green-500 bg-green-500/20" :
                    project.status === "In Progress" ? "border-yellow-500 bg-yellow-500/20" :
                    "border-blue-500 bg-blue-500/20"
                  }`} />
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium text-gray-900 dark:text-white">{project.status}</p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5 cursor-none"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700 cursor-none"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;