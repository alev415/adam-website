import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FolderLayoutProps {
  children: ReactNode;
  title: string;
}

export const FolderLayout = ({ children, title }: FolderLayoutProps) => {
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

            {/* Content */}
            <div className="mt-24">
              <h1 className="text-2xl md:text-3xl font-retro mb-12 text-text-dark">
                {title}
              </h1>
              
              {children}
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