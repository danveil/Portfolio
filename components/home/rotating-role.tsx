"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Cybersecurity", "Networking", "Secure Systems", "AI Security Research"];

export function RotatingRole() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % roles.length), 3200);
    return () => window.clearInterval(timer);
  }, [reduced]);
  return (
    <span className="rotating-role" aria-label={roles.join(", ")}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.24 }}
          aria-hidden="true"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
