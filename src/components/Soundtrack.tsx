import { useRef, useState } from 'react';
import './Soundtrack.css';

export const Soundtrack = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    try {
      setError(false);
      await audio.play();
    } catch {
      setError(true);
    }
  };

  return (
    <div className="soundtrack-control">
      <button
        type="button"
        className="soundtrack-play"
        aria-label={error ? 'Retry playing mission soundtrack' : isPlaying ? 'Pause mission soundtrack' : 'Play mission soundtrack'}
        title={error ? 'Unable to play. Tap to retry.' : isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
        onClick={togglePlayback}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor">
          {isPlaying ? <path d="M6 4h4v16H6zm8 0h4v16h-4z" /> : <path d="M7 4v16l14-8z" />}
        </svg>
      </button>
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => { setIsPlaying(false); setError(true); }}
      >
        <source src={`${import.meta.env.BASE_URL}mission-soundtrack.m4a`} type="audio/mp4" />
      </audio>
    </div>
  );
};
