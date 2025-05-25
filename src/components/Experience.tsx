import React from 'react';
import { FolderLayout } from './FolderLayout';

export const Experience = () => {
  return (
    <FolderLayout title="EXPERIENCE">
      <div className="space-y-8">
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-2">Senior Product Manager</h2>
          <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">Company Name • 2020 - Present</h3>
          <ul className="space-y-2 text-text-dark">
            <li className="font-retro text-xs">• Led development of key product initiatives</li>
            <li className="font-retro text-xs">• Managed cross-functional teams</li>
            <li className="font-retro text-xs">• Drove 40% increase in user engagement</li>
          </ul>
        </div>

        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-2">Product Manager</h2>
          <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">Previous Company • 2018 - 2020</h3>
          <ul className="space-y-2 text-text-dark">
            <li className="font-retro text-xs">• Launched new product features</li>
            <li className="font-retro text-xs">• Collaborated with design and engineering teams</li>
            <li className="font-retro text-xs">• Increased user retention by 25%</li>
          </ul>
        </div>
      </div>
    </FolderLayout>
  );
}; 