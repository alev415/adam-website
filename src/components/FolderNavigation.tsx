import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const sections = [
  { to: '/', label: 'HOME', end: true },
  { to: '/experience', label: 'EXPERIENCE' },
  { to: '/work', label: 'PORTFOLIO' },
  { to: '/writing', label: 'WRITING' },
];

export const FolderNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const previous = useRef(pathname);
  const returning = useRef(false);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (previous.current === pathname) return;
    if (!returning.current) {
      const from = previous.current;
      setHistory(items => [...items, from]);
    }
    returning.current = false;
    previous.current = pathname;
  }, [pathname]);

  const goBack = () => {
    const target = history[history.length - 1];
    if (target) {
      returning.current = true;
      setHistory(items => items.slice(0, -1));
      navigate(target);
    } else if (pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <nav className="folder-navigation" aria-label="Site navigation">
      {sections.map(section => (
        <NavLink
          key={section.to}
          to={section.to}
          end={section.end}
          className={({ isActive }) => `folder-navigation-tab${isActive ? ' is-active' : ''}`}
        >
          <span>{section.label}</span>
        </NavLink>
      ))}
      <button
        type="button"
        className="folder-navigation-tab folder-navigation-back"
        onClick={goBack}
        disabled={history.length === 0 && pathname === '/'}
        aria-label="Go back to previous section"
      >
        <span>BACK</span>
      </button>
    </nav>
  );
};
