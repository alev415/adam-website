import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import portraitImage from '../assets/images/portrait.jpg';

export const MainMenu = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-folder-dark flex"
    >
      <div className="w-full min-w-0">
        {/* Main Folder */}
        <div className="folder-shell bg-folder-dark min-h-screen p-4 md:p-9 relative">
          <div className="folder-page border-2 border-text-dark bg-folder-brown bg-folder-texture bg-folder-pattern p-4 md:p-8 relative min-w-0 md:mr-20">
            {/* Top Secret Stamp */}
            <div className="absolute top-6 right-4 md:top-8 md:right-8 transform rotate-[-12deg] text-stamp-red font-retro">
              <div className="border-4 border-stamp-red px-2 md:px-4 py-2">
                <span className="text-sm md:text-xl font-bold tracking-wider">TOP SECRET</span>
              </div>
            </div>

            {/* Photo Container */}
            <div className="relative mt-20 md:mt-0 md:top-0 md:left-0 w-48 h-48 border-4 border-folder-dark shadow-lg overflow-hidden">
              <img 
                src={portraitImage} 
                alt="Adam Levinson" 
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
            
            {/* Mission Select Title */}
            <div className="mt-12">
              <h1 className="text-2xl md:text-3xl font-retro mb-12 text-text-dark">
                SELECT MISSION
              </h1>
              
              {/* Mission Options */}
              <div className="space-y-6">
                <Link className="block w-fit py-2" to="/experience">
                  <motion.div
                    whileHover={{ x: 20 }}
                    className="flex items-center text-text-dark hover:text-stamp-red transition-colors duration-300"
                  >
                    <span className="font-retro text-sm md:text-base">01 &gt; EXPERIENCE</span>
                  </motion.div>
                </Link>
                
                <Link className="block w-fit py-2" to="/work">
                  <motion.div
                    whileHover={{ x: 20 }}
                    className="flex items-center text-text-dark hover:text-stamp-red transition-colors duration-300"
                  >
                    <span className="font-retro text-sm md:text-base">02 &gt; PORTFOLIO</span>
                  </motion.div>
                </Link>
                
                <Link className="block w-fit py-2" to="/writing">
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


          </div>
        </div>
      </div>
    </motion.div>
  );
}; 