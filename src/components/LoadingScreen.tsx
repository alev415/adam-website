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
      className="fixed inset-0 bg-spy-dark flex flex-col items-center justify-center"
    >
      <AnimatePresence>
        {showContent && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl text-spy-accent classified-text mb-8"
            >
              Adam Levinson – Product Leader
            </motion.h1>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onComplete}
              className="px-8 py-3 bg-spy-accent text-spy-dark classified-text text-xl hover:bg-folder-brown hover:text-spy-accent transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 