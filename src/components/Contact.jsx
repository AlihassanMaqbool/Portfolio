// import emailjs from "emailjs-com";
// import React from "react";


// export default function Contact() {
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(
//       "YOUR_SERVICE_ID",
//       "YOUR_TEMPLATE_ID",
//       e.target,
//       "YOUR_PUBLIC_KEY"
//     );
//     e.target.reset();
//   };

//   return (
//     <section id="Contact" className="py-20 text-center bg-gray-600">
//       <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

//       <form onSubmit={sendEmail} className="max-w-md mx-auto flex flex-col gap-4 bg-gray-800">
//         <input name="name" placeholder="Your Name" className="p-3 rounded"/>
//         <input name="email" placeholder="Email" className="p-3 rounded"/>
//         <textarea name="message" placeholder="Message" className="p-3 rounded"/>
//         <button className="bg-blue-600 text-white py-3 rounded">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }


import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handleNumberClick = () => {
    setShowNumber(true);
  };

  return (
    <section
      id="Contact"
      className="py-28 px-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I’m always open to discussing new projects or opportunities. Reach out
          via email or phone.
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left: Form */}
        <motion.form
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        {/* Right: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Contact Info
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Email: <span className="text-blue-500">m.alihassanm.maqbool812@gmail.com</span>
          </p>

          {/* Phone Button */}
          <div>
            {!showNumber ? (
              <button
                onClick={handleNumberClick}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-105"
              >
                Show Phone Number
              </button>
            ) : (
              <p className="text-gray-900 dark:text-white font-semibold text-lg">
                📞 +92 3097914548
              </p>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            Location: Lahore, Pakistan
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
