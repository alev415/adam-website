import React from 'react';
import { FolderLayout } from './FolderLayout';

export const Writing = () => {
  return (
    <FolderLayout title="WRITING">
      <div className="space-y-8">
        <div className="border-l-4 border-folder-dark pl-6">
          <h2 className="font-retro text-lg text-text-dark mb-4">WORK IN PROGRESS</h2>
          <p className="font-retro text-xs text-text-dark mb-4">
            Mission briefing documents are currently being declassified.
            Check back soon for updates.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="font-retro text-xs bg-folder-dark px-2 py-1 text-text-dark">CLASSIFIED</span>
          </div>
        </div>
      </div>
    </FolderLayout>
  );
}; 