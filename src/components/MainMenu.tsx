import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import portraitImage from '../assets/images/portrait-clean.jpg';
import './MainMenu.css';

export const MainMenu = () => {

  return (
    <div
      className="min-h-screen bg-folder-dark flex"
    >
      <div className="w-full min-w-0">
        {/* Main Folder */}
        <div className="folder-shell bg-folder-dark min-h-screen p-4 md:p-9 relative">
          <div className="folder-page border-2 border-text-dark bg-folder-brown bg-folder-texture bg-folder-pattern p-4 md:p-8 relative min-w-0 md:mr-20">
            {/* Top Secret Stamp */}
            <div className="home-secret-stamp absolute top-6 right-4 md:top-8 md:right-8 transform rotate-[-12deg] text-stamp-red font-retro">
              <div className="border-4 border-stamp-red px-2 md:px-4 py-2">
                <span className="text-sm md:text-xl font-bold tracking-wider">TOP SECRET</span>
              </div>
            </div>

            <div className="home-layout">
            <div className="home-missions">
            {/* Photo Container */}
            <div className="relative mt-20 md:mt-0 md:top-0 md:left-0 w-48 h-48 border-4 border-folder-dark shadow-lg overflow-hidden">
              <img 
                src={portraitImage} 
                alt="Adam Levinson" 
                className="w-full h-full object-cover object-center grayscale"
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
            
            <div className="home-contact">
              <p className="font-retro">ESTABLISH CONTACT</p>
              <a href="https://www.linkedin.com/in/alevinson/" target="_blank" rel="noopener noreferrer" className="font-retro">
                LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            {/* Classified Footer */}
            <div className="mt-12 text-xs font-retro text-text-dark opacity-50">
              CLEARANCE LEVEL: TOP SECRET
            </div>

            </div>
            <aside className="agent-profile" aria-labelledby="agent-profile-heading">
              <div className="agent-profile-header">
                <h2 id="agent-profile-heading">AGENT PROFILE</h2><span>AL / 007</span>
              </div>
              <h3 className="agent-profile-name">Adam Levinson</h3>
              <p className="agent-profile-role"><strong>Staff Product Manager at Roo</strong><br />Hospitals &amp; Experience</p>
              <dl>
                <div className="agent-record"><dt>SERVICE RECORD</dt><dd><div className="agent-service"><strong>Roo</strong><span>/</span><strong>Hinge Health</strong><span>/</span><strong>Udemy</strong></div><span className="agent-context">Previously Head of Growth Product at Hinge Health.</span></dd></div>
                <div className="agent-record"><dt>TIME IN THE FIELD</dt><dd><strong className="agent-stat">15+ years</strong><span className="agent-context">Building products in technology.</span></dd></div>
                <div className="agent-record"><dt>CONFIRMED IMPACT</dt><dd><strong className="agent-stat">$30M+</strong><span className="agent-context">Incremental annual revenue in 2023 at Hinge Health.</span></dd></div>
                <div className="agent-record"><dt>SPECIALIZATIONS</dt><dd>Product-led growth · Experimentation<br />Behavior change · AI-assisted development</dd></div>
              </dl>
              <div className="agent-verification"><span>PERSONNEL INTELLIGENCE</span><span>VERIFIED</span></div>
            </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
