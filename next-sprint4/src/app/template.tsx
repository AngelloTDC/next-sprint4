"use client";

import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const location = usePathname();

  return (
    <motion.div
      key={location}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
