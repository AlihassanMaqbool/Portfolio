// import { motion } from "framer-motion";
// import React from "react";
// import { useEffect, useState } from "react";

// const roles = [
//   "Frontend Developer",
//   "React Developer",
//   "UI Designer",
//   "Creative Coder",
// ];

// const Hero = () => {
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [reverse, setReverse] = useState(false);

//   // ⌨ Typing Effect
//   useEffect(() => {
//     if (subIndex === roles[index].length + 1 && !reverse) {
//       setTimeout(() => setReverse(true), 1000);
//       return;
//     }

//     if (subIndex === 0 && reverse) {
//       setReverse(false);
//       setIndex((prev) => (prev + 1) % roles.length);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       setSubIndex((prev) => prev + (reverse ? -1 : 1));
//       setText(roles[index].substring(0, subIndex));
//     }, reverse ? 50 : 120);

//     return () => clearTimeout(timeout);
//   }, [subIndex, index, reverse]);

//   return (
//     <section
//       id="Home"
//       className="min-h-screen flex items-center relative overflow-hidden bg-gray-950 px-6"
//     >
//       {/* 🌊 Animated Gradient Background */}
//       <motion.div
//         animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//         transition={{ duration: 12, repeat: Infinity }}
//         className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_200%] opacity-20"
//       />

//       <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//             Hi, I’m <span className="text-blue-400">Ali Hassan</span>
//           </h1>

//           <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300 h-10">
//             {text}
//             <span className="text-blue-400">|</span>
//           </h2>

//           <p className="mt-6 text-gray-400 max-w-xl">
//             I create modern, animated, and responsive web experiences using
//             React, Tailwind CSS, and creative UI techniques.
//           </p>

//           <div className="mt-8 flex gap-4 flex-wrap">
//             <a
//               href="/resume.pdf"
//               download
//               className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-105"
//             >
//               📄 Download CV
//             </a>

//             <a
//               href="#Projects"
//               className="px-8 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition"
//             >
//               View Projects
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE (3D EFFECT) */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           whileHover={{ rotateY: 12, rotateX: -8 }}
//           className="flex justify-center perspective-1000"
//         >
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-40"></div>
//             <img
//               src="/profile.png"
//               alt="Profile"
//               className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
//             />
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

// import StarsBackground from "./components/starsbackground";
// import StarsBackground from "./components/Starsbackground";



import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StarsBackground from "./StarsBackground";
import aliimg from "@/assets/alihassan.jpg";
// import StarsBackground from "./components/StarsBackground";




const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Designer",
  "Creative Coder",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, reverse ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="Home"
      className="relative min-h-screen pt-12 flex items-center overflow-hidden bg-gray-950 px-6"
    >
      {/* ⭐ Stars Background */}
      {/* <StarsBackground/> */}

      {/* 🌊 Gradient Overlay */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-size-[200%_200%] opacity-20"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hi, I’m <span className="text-blue-400">Ali Hassan</span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-300 h-10">
            {text}
            <span className="text-blue-400">|</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            I create modern, animated, and responsive web experiences using
            React, Tailwind CSS, and creative UI techniques.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/Ali_Hassan_CV.pdf"
              download
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 cursor-none  transition hover:scale-105"
            >
              📄 Download CV
            </a>

            <a
              href="#Projects"
              className="px-8 py-3 border border-blue-500 text-blue-400 cursor-none rounded-full hover:bg-blue-500 hover:text-white transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ rotateY: 18, rotateX: -18 }}
          className="flex justify-center perspective-1000"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-40 rounded-full" />
            <img
              src={aliimg}
              alt="Profile"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
