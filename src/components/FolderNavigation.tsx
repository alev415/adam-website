import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const sections = [
  { to: '/', label: 'HOME', end: true },
  { to: '/experience', label: 'EXPERIENCE' },
  { to: '/work', label: 'PORTFOLIO' },
  { to: '/writing', label: 'WRITING' },
];

export const FolderNavigation = () => {
  const { pathname } = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout>>();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveal = () => {
      clearTimeout(idleTimer.current);
      setIsScrolling(false);
    };
    const onScroll = () => {
      if (!window.matchMedia('(max-width: 767px)').matches) return;
      if (navRef.current?.querySelector(':focus-visible')) return;
      setIsScrolling(true);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(reveal, 300);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', reveal);
    window.addEventListener('resize', reveal);
    return () => {
      clearTimeout(idleTimer.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', reveal);
      window.removeEventListener('resize', reveal);
    };
  }, []);

  useEffect(() => {
    clearTimeout(idleTimer.current);
    setIsScrolling(false);
  }, [pathname]);


  return (
    <nav
      ref={navRef}
      className={`folder-navigation${isScrolling ? ' is-scrolling' : ''}`}
      aria-label="Site navigation"
      onFocusCapture={() => {
        clearTimeout(idleTimer.current);
        setIsScrolling(false);
      }}
    >
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

    </nav>
  );
};
