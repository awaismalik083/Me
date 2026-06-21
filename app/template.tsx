

"use client";

import { motion } from "framer-motion";

const PANEL_COUNT = 5;

export default function Template({ children }: { children: React.ReactNode }) {
  const panels = Array.from({ length: PANEL_COUNT });

  return (
    <>
      {/* Panels overlay */}
      <div className="fixed inset-0 z-50 flex pointer-events-none">
        {panels.map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.08 * i,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ originY: 0 }}
            className="flex-1 bg-[#E1FF01]"
          />
        ))}
      </div>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.08 * PANEL_COUNT }}
      >
        {children}
      </motion.div>
    </>
  );
}