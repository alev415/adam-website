import React from 'react';
import { FolderLayout } from './FolderLayout';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  role: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

const Project: React.FC<ProjectProps> = ({ title, role, description, imageSrc, tags }) => (
  <div className="border-l-4 border-folder-dark pl-6 mb-16">
    <div className="grid md:grid-cols-2 gap-8">
      {/* Content Section */}
      <div>
        <h2 className="font-retro text-lg text-text-dark mb-2">{title}</h2>
        <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">{role}</h3>
        <p className="font-retro text-xs text-text-dark mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="relative group">
        <motion.div 
          className="border-4 border-folder-dark overflow-hidden bg-folder-dark"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-spy-accent font-retro text-xs p-2">
            CONFIDENTIAL
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export const Work = () => {
  // This is a placeholder project. You can add more projects by adding to this array
  const projects: ProjectProps[] = [
    {
      title: "Project Example",
      role: "Lead Product Manager",
      description: "Add your project description here. The image will be displayed in a retro-styled frame with a 'CONFIDENTIAL' stamp, maintaining the GoldenEye theme.",
      imageSrc: "", // Add your image path here
      tags: ["Strategy", "UX Design", "Analytics"]
    }
  ];

  return (
    <FolderLayout title="PORTFOLIO">
      <div>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </FolderLayout>
  );
}; 