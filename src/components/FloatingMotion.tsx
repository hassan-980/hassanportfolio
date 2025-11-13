"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingMotionProps {
  children: ReactNode;
  duration?: number; // optional, default: 3
  distance?: number; // optional, default: 15
}

export default function FloatingMotion({
  children,
  duration = 3,
  distance = 5,
}: FloatingMotionProps) {
  return (
    <motion.div
      animate={{
        y: [0, -distance, 0],
        x: [0, 3, 0],
        scale: [1, 1.03, 1],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
