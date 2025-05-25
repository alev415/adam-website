import React from 'react';
import { FolderLayout } from './FolderLayout';

export const Work = () => {
  return (
    <FolderLayout title="PORTFOLIO">
      <div className="space-y-8">
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-2">Project Alpha</h2>
          <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">Lead Product Manager</h3>
          <p className="font-retro text-xs text-text-dark mb-4">
            Innovative product that revolutionized how users interact with our platform.
            Led end-to-end development from conception to launch.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Strategy</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">UX Design</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Analytics</span>
          </div>
        </div>

        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-2">Project Beta</h2>
          <h3 className="font-retro text-sm text-text-dark opacity-75 mb-4">Product Manager</h3>
          <p className="font-retro text-xs text-text-dark mb-4">
            Successful launch of a new feature set that increased user engagement by 200%.
            Managed a team of designers and engineers.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Leadership</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Product Development</span>
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">Team Management</span>
          </div>
        </div>
      </div>
    </FolderLayout>
  );
}; 