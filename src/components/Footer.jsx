import { motion } from "framer-motion";
import React from "react";
import imglogo from"../assets/ali.dev.png"


import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/alihassanmaqbool/" },
  { icon: <FaGithub />, url: "https://github.com/AlihassanMaqbool" },
  { icon: <FaTwitter />, url: "https://x.com/Alihassan812812" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/m.alihassanm.maqbool812/" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={imglogo} alt="logo ali.dev" style={{width:"200px", height:"100px", objectFit:"cover"}} />
          {/* <h1 className="text-2xl font-bold text-white">Ali Hassan</h1> */}
          <p className="text-gray-400 text-sm mt-1">
            Frontend Developer | React & Tailwind
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.3,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5, repeat: 1 },
              }}
              className="text-white text-2xl hover:text-blue-500 cursor-none transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* Bottom */}
      <motion.div
        className="mt-10 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        © {new Date().getFullYear()} Ali Hassan. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
