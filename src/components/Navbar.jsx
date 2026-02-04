import React from "react";
import { motion } from "framer-motion";
import imglogo from "../assets/ali.dev.png"
import { Pointer } from "@/components/ui/pointer"



function Navbar({ dark, setDark }) {
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-30 px-5 py-2 flex justify-between"
      >

        <img src={imglogo} alt="logo ali.dev" style={{ width: "150px", height: "80px", objectFit: "cover" }} />
        <Pointer />
        {/* <h1 className="font-bold text-xl">Ali.Dev</h1> */}
        <div className="flex gap-6 items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map(link => (
            <a key={link} href={`#${link}`} className="hover:text-blue-500 cursor-none ">{link}</a>
          ))}
          <button onClick={() => setDark(!dark)}>
            {/* {dark ? "☀️" : "🌙"} */}
          </button>
        </div>
      </motion.nav>
    </>
  );
}
export default Navbar