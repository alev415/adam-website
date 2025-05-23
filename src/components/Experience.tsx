import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-spy-dark p-8"
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="folder-tab inline-block mb-8">
          ← Back to Menu
        </Link>
        
        <div className="bg-folder-brown p-1">
          <div className="border-2 border-spy-accent p-8">
            <h1 className="text-4xl classified-text mb-8">Experience</h1>
            <p className="mb-4">Content coming soon...</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 