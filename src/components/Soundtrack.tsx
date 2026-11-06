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
            <iframe
              src="https://www.youtube-nocookie.com/embed/A7lLHJ6yfH0?autoplay=0&controls=1&playsinline=1&rel=0"
              title="007 theme song on YouTube"
              width="320"
              height="200"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="soundtrack-actions">
              <a href="https://www.youtube.com/watch?v=A7lLHJ6yfH0" target="_blank" rel="noopener noreferrer">Open on YouTube ↗<span className="sr-only"> (opens in a new tab)</span></a>
              <button type="button" onClick={() => setIsOpen(false)}>Close &amp; stop</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
