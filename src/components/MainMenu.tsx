import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import portraitImage from '../assets/images/portrait.jpg';

export const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black flex"
    >
      <div className="w-full">
        {/* Main Folder */}
        <div className="bg-folder-dark h-screen md:h-auto md:p-1">
          <div className="border-0 md:border-2 border-text-dark bg-folder-brown bg-folder-texture bg-folder-pattern p-4 md:p-8 relative h-full md:min-h-[600px] md:m-8">
            {/* Top Secret Stamp */}
            <div className="absolute top-8 right-8 transform rotate-[-12deg] text-stamp-red font-retro">
              <div className="border-4 border-stamp-red px-4 py-2">
                <span className="text-xl font-bold tracking-wider">TOP SECRET</span>
              </div>
            </div>

            {/* Photo Container */}
            <div className="absolute top-8 left-8 w-56 h-72 border-4 border-folder-dark shadow-lg overflow-hidden">
              <img 
                src={portraitImage} 
                alt="Adam Levinson" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Mission Select Title */}
            <div className="mt-80 md:mt-96">
              <h1 className="text-2xl md:text-3xl font-retro mb-12 text-text-dark">
                SELECT MISSION
              </h1>
              
              {/* Mission Options */}
              <div className="space-y-6">
                <Link to="/experience">
                  <motion.div
                    whileHover={{ x: 20 }}
                    className="flex items-center text-text-dark hover:text-stamp-red transition-colors duration-300"
                  >
                    <span className="font-retro text-sm md:text-base">01 &gt; EXPERIENCE</span>
                  </motion.div>
                </Link>
                
                <Link to="/work">
                  <motion.div
                    whileHover={{ x: 20 }}
                    className="flex items-center text-text-dark hover:text-stamp-red transition-colors duration-300"
                  >
                    <span className="font-retro text-sm md:text-base">02 &gt; PORTFOLIO</span>
                  </motion.div>
                </Link>
                
                <Link to="/writing">
                  <motion.div
                    whileHover={{ x: 20 }}
                    className="flex items-center text-text-dark hover:text-stamp-red transition-colors duration-300"
                  >
                    <span className="font-retro text-sm md:text-base">03 &gt; WRITING</span>
                  </motion.div>
                </Link>
              </div>
            </div>
            
            {/* Classified Footer */}
            <div className="mt-12 text-xs font-retro text-text-dark opacity-50">
              CLEARANCE LEVEL: TOP SECRET
            </div>

            {/* Desktop Folder Tab - Hidden on mobile */}
            <motion.div
              onClick={() => navigate('/')}
              whileHover={{ x: -4 }}
              className="hidden md:flex absolute -right-20 top-8 w-20 h-28 bg-folder-brown border-t-2 border-r-2 border-b-2 border-text-dark items-center justify-center cursor-pointer hover:bg-folder-dark transition-colors duration-300"
            >
              <span className="font-retro text-xs text-text-dark transform -rotate-90">BACK</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 