import React, { useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { MainMenu } from './components/MainMenu';
import { Experience } from './components/Experience';
import { Work } from './components/Work';
import { Writing } from './components/Writing';
import { FolderNavigation } from './components/FolderNavigation';

function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen w-full bg-folder-dark">
      <Router>
        <ScrollToTop />
        <FolderNavigation />
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App; 