import React from 'react';
import { motion } from 'framer-motion';

const Phantom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: 1
      }}
      className="absolute inset-0 bg-gradient-to-t from-transparent to-black"
    >
      {children}
    </motion.div>
  );
};

export default Phantom; 