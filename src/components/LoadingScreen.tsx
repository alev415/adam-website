import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Short delay before showing content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-spy-dark flex flex-col items-center justify-center p-4"
    >
      <AnimatePresence>
        {showContent && (
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm md:text-lg text-spy-accent font-retro mb-4 tracking-wide"
            >
              Growth Product Leader
            </motion.h2>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-4xl text-spy-accent font-retro mb-12 tracking-wide"
            >
              Adam Levinson
            </motion.h1>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="px-6 py-3 bg-spy-accent text-spy-dark font-retro text-sm hover:bg-folder-brown hover:text-spy-accent transition-colors duration-300"
            >
              Press Start
            </motion.button>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 