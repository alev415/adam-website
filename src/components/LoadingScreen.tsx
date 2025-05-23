import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-spy-dark flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl text-spy-accent classified-text mb-8"
      >
        Adam Levinson – Product Leader
      </motion.h1>
      
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onComplete}
        className="px-8 py-3 bg-spy-accent text-spy-dark classified-text text-xl hover:bg-folder-brown hover:text-spy-accent transition-colors duration-300"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}; 