import { motion } from "framer-motion";
import React from "react";


// Create multiple floating boxes with random positions, sizes, delays
const boxes = Array.from({ length: 20 }).map(() => ({
  size: Math.random() * 40 + 20, // size 20-60px
  top: Math.random() * 100, // top position %
  left: Math.random() * 100, // left position %
  delay: Math.random() * 5, // animation delay
  duration: Math.random() * 10 + 10, // duration 10-20s
  color: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`, // blue with opacity
}));

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {boxes.map((box, idx) => (
        <motion.div
          key={idx}
          style={{
            width: box.size,
            height: box.size,
            top: `${box.top}%`,
            left: `${box.left}%`,
            backgroundColor: box.color,
            borderRadius: "12px",
            position: "absolute",
          }}
          animate={{
            y: [0, 20, -10, 0], // floating motion
            x: [0, 10, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: box.duration,
            delay: box.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;
