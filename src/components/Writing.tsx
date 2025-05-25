import React from 'react';
import { FolderLayout } from './FolderLayout';

export const Writing = () => {
  return (
    <FolderLayout title="WRITING">
      <div className="space-y-8">
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-2">The Future of Product Management</h2>
          <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">Published on Medium • 2023</h3>
          <p className="font-retro text-xs text-text-dark mb-4">
            An exploration of how AI and machine learning are transforming the role of product managers
            and what skills will be crucial in the coming years.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">AI</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Product Management</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Future of Work</span>
          </div>
        </div>

        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-2">Building Products That Matter</h2>
          <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">Personal Blog • 2023</h3>
          <p className="font-retro text-xs text-text-dark mb-4">
            Insights and lessons learned from years of product development, focusing on creating
            meaningful impact while maintaining technical excellence.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Product Strategy</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">User Impact</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Development</span>
          </div>
        </div>
      </div>
    </FolderLayout>
  );
}; 