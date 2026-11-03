/// <reference types="react" />
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FolderLayoutProps {
  children: ReactNode;
  title: string;
}

export const FolderLayout = ({ children, title }: FolderLayoutProps) => {

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


          </div>
        </div>
      </div>
    </motion.div>
  );
}; 