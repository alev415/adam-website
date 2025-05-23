import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MainMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-spy-dark p-8 flex items-center justify-center"
    >
      <div className="bg-folder-brown p-1 max-w-4xl w-full">
        <div className="border-2 border-spy-accent p-8">
          <h1 className="text-4xl classified-text mb-8 text-center">TOP SECRET</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/experience">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="folder-tab text-center"
              >
                Experience
              </motion.div>
            </Link>
            
            <Link to="/work">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="folder-tab text-center"
              >
                Work
              </motion.div>
            </Link>
            
            <Link to="/writing">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="folder-tab text-center"
              >
                Writing
              </motion.div>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-center opacity-50">
            CLEARANCE LEVEL: TOP SECRET
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 