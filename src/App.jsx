// import { Particles } from "@/components/ui/particles"
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Hero from "./components/hero";
// import Footer from "./components/Footer";



// export default function App() {
//   const [dark, setDark] = useState(true);

//   return (
//     <div className={dark ? "dark" : ""}>
//       <div className="bg-white dark:bg-gray-950 relative text-gray-900 overflow-hidden dark:text-white transition">
//         {/* <div className="relative h-[500px] w-full overflow-hidden"> */}
//           <Particles number={50} quantity={300} className={"text-white"} />
//           <Navbar dark={dark} setDark={setDark} />
//           <Hero />
//           {/* <StarsBackground /> */}
//           <About />
//           <Skills />
//           <Projects />
//           {/* <Testimonials/> */}
//           <Contact />
//           <Footer />
//         </div>
//       </div>
//     // </div>
//   );
// }








import { Pointer } from "@/components/ui/pointer"
import React, { useState } from "react";
import { Particles } from "@/components/ui/particles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import React from "react";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
        
      <div className="relative min-h-screen overflow-hidden bg-white text-gray-900 transition dark:bg-gray-950 dark:text-white">

        {/* Background Particles */}
        <Particles
          quantity={500}
          number={50}
          className="absolute inset-0 z-50 text-gray-900 dark:text-white"
        />
        <Pointer />

        {/* Content */}
        <Navbar dark={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}




