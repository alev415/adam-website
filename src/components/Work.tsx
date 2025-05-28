import React from 'react';
import { FolderLayout } from './FolderLayout';
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  role?: string;
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
        {role && <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">{role}</h3>}
        <p className="font-retro text-xs text-text-dark mb-4 whitespace-pre-line">
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

const Summary: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border-l-4 border-folder-dark pl-6 mb-16">
    <h2 className="font-retro text-xl text-text-dark mb-4">{title}</h2>
    <p className="font-retro text-xs text-text-dark whitespace-pre-line">
      {description}
    </p>
  </div>
);

export const Work = () => {
  const summary = {
    title: "Driving over $30 million in incremental revenue through product-led growth",
    description: "At Hinge Health, a leading virtual physical therapy solution, I helped expand the company's member acquisition strategy beyond its traditional employer-based model. When I joined, the company had no organic or paid acquisition channels. Over my tenure, I built and scaled new growth engines—organic, paid, and referral—driving tens of millions in annual revenue. Along the way, we launched nearly 100 website experiments, created foundational systems for high-velocity execution, and introduced AI-driven product experiences to personalize the member journey."
  };

  const projects: ProjectProps[] = [
    {
      title: "Design System for Growth",
      description: "To enable fast, high-quality experimentation, we built a modular web design system from the ground up. This system standardized components and templates across pages, significantly accelerating our ability to launch A/B tests and landing pages. The result was faster iteration cycles, consistent UI, and greater collaboration between design, engineering, and marketing teams.",
      imageSrc: "", // Add image path
      tags: ["Design System", "Component Library", "Experimentation", "UI/UX"]
    },
    {
      title: "A/B Testing for Conversion Optimization",
      description: "We implemented a robust A/B testing framework to drive conversion rate improvements across the web funnel. These experiments focused on messaging, design, and call-to-action optimization—ultimately driving more high-intent visitors to complete the signup flow. This experimentation engine played a key role in expanding our member base and refining our understanding of user behavior.",
      imageSrc: "", // Add image path
      tags: ["A/B Testing", "CRO", "Analytics", "User Behavior"]
    },
    {
      title: "Referral Program",
      description: "I led the development and launch of Hinge Health's first member referral program, designed to leverage existing user satisfaction and word-of-mouth. The program scaled quickly, driving tens of millions in revenue annually. It became a core acquisition channel that complemented employer-based marketing while helping members advocate for care in their own communities.",
      imageSrc: "", // Add image path
      tags: ["Growth", "Referral", "User Acquisition", "Revenue"]
    },
    {
      title: "SEO and Paid Acquisition Channels",
      description: "Starting from scratch, I built and scaled both SEO and paid acquisition channels. For SEO, we created educational content, landing pages, and technical infrastructure to improve our search visibility and attract organic traffic. For paid, we tested and optimized across Google, Meta, and other channels to acquire users efficiently. These channels became critical growth levers, generating tens of millions in new revenue.",
      imageSrc: "", // Add image path
      tags: ["SEO", "Paid Acquisition", "Content Strategy", "Growth"]
    },
    {
      title: "Freemium Product Launch",
      description: "To expand access and drive top-of-funnel acquisition, we launched a freemium offering that allowed prospective members to explore the product before enrolling. This initiative led to a 10% increase in accepted members and served as a scalable way to reduce acquisition friction while still delivering value upfront.",
      imageSrc: "", // Add image path
      tags: ["Product Strategy", "Freemium", "User Acquisition", "Conversion"]
    },
    {
      title: "AI Chatbot for Injury Education",
      description: "We launched Hinge Health's first AI-powered chatbot to help prospective members better understand their pain and explore treatment options. The chatbot leveraged leading LLMs, evaluated for performance and compliance, and was one of the first HIPAA-compliant bots to go live in the healthcare space. It personalized education and triage at scale, improving the digital experience and driving conversion through helpful, interactive content.",
      imageSrc: "", // Add image path
      tags: ["AI/ML", "Healthcare", "Chatbot", "User Experience"]
    }
  ];

  return (
    <FolderLayout title="PORTFOLIO">
      <div>
        <Summary {...summary} />
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </FolderLayout>
  );
}; 