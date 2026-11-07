import { useState } from 'react';
import './Soundtrack.css';

export const Soundtrack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mission-soundtrack" aria-label="Optional mission soundtrack">
      <button
        type="button"
        className="soundtrack-toggle font-retro"
        aria-expanded={isOpen}
        aria-controls="mission-soundtrack-player"
        onClick={() => setIsOpen(open => !open)}
      >
        <span aria-hidden="true">♫</span>
        <span>MISSION SOUNDTRACK</span>
        <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
      </button>
      <div id="mission-soundtrack-player" hidden={!isOpen}>
        {isOpen && (
          <div className="soundtrack-player">
            <p>007 theme · Press play when you’re ready.</p>
            <audio controls preload="none" aria-label="007 mission soundtrack">
              <source src={`${import.meta.env.BASE_URL}mission-soundtrack.m4a`} type="audio/mp4" />
              Your browser does not support audio playback.
            </audio>
            <div className="soundtrack-actions">
              <button type="button" onClick={() => setIsOpen(false)}>Close &amp; stop</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
