import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps { onComplete: () => void; }

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState<'ready' | 'incomplete' | 'wrong'>('ready');
  const [unlocked, setUnlocked] = useState(false);
  const collectButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (unlocked) collectButton.current?.focus({ preventScroll: true });
  }, [unlocked]);

  const clear = () => { setCode(''); setFeedback('ready'); };
  const digit = (value: string) => {
    if (unlocked) return;
    setCode(current => (feedback === 'wrong' || current.length === 3 ? '' : current) + value);
    setFeedback('ready');
  };
  const unlock = () => {
    if (unlocked) return;
    if (code.length !== 3) setFeedback('incomplete');
    else if (code === '007') setUnlocked(true);
    else setFeedback('wrong');
  };
  const handleKey = (event: KeyboardEvent<HTMLElement>) => {
    if (unlocked || event.altKey || event.ctrlKey || event.metaKey) return;
    if (/^[0-9]$/.test(event.key)) { event.preventDefault(); digit(event.key); }
    else if (event.key === 'Backspace') {
      event.preventDefault();
      if (feedback === 'wrong') clear();
      else { setCode(current => current.slice(0, -1)); setFeedback('ready'); }
    } else if (event.key === 'Escape') { event.preventDefault(); clear(); }
    else if (event.key === 'Enter' && (event.target as HTMLElement).closest('.panel')) {
      event.preventDefault(); unlock();
    }
  };
  const message = feedback === 'wrong' ? 'CODE NOT RECOGNIZED. RECHECK THE CLUE.'
    : feedback === 'incomplete' ? 'ENTER ALL THREE DIGITS FIRST.'
    : 'ENTER CODE, THEN PRESS ↵ TO UNLOCK.';

  return (
    <main id="electronic-safe" onKeyDown={handleKey}>
      <section className="game" aria-labelledby="safe-heading">
        <header>
          <h1 id="safe-heading">Crack the safe to see Adam's dossier</h1>
          <p className="sub">Enter the three-digit access code.</p>
        </header>
        <div className="stage">
          <div className="note"><div className="note-label">INTERCEPTED MESSAGE</div><p>“The first two digits are nothing.<br />The last is a week’s worth of days.”</p></div>
          <div className={`safe${unlocked ? ' is-open' : ''}`}>
            <div className="interior" aria-hidden={!unlocked}>
              <button type="button" className="file" aria-label="Open Adam’s dossier" disabled={!unlocked} onClick={onComplete} ref={collectButton}><p>DECLASSIFIED / AL-007</p><strong>Adam Levinson</strong><span>OPEN DOSSIER →</span></button>
            </div>
            <div className="door" aria-hidden={unlocked}>
              <div className="brand"><span>LEVINSON</span><span>ELECTRONIC VAULT / 03</span></div>
              <div className="mechanism">
                <div className="panel">
                  <div className={`screen${feedback === 'wrong' ? ' error' : ''}`}>
                    <div className="screen-top"><span>{unlocked ? 'ACCESS GRANTED' : feedback === 'wrong' ? 'TRY AGAIN' : 'ENTER PIN'}</span><span>SECURE <i className="led" aria-hidden="true" /></span></div>
                    <div className="pin" role="status" aria-live="polite" aria-label={code ? `Entered code: ${code.split('').join(' ')}` : 'Code empty'}>
                      {[0, 1, 2].map(index => <span key={index}>{code[index] ?? '_'}</span>)}
                    </div>
                  </div>
                  <div className="keypad" role="group" aria-label="Electronic safe keypad">
                    {['1','2','3','4','5','6','7','8','9'].map(number => <button type="button" className="key" key={number} disabled={unlocked} onClick={() => digit(number)}>{number}</button>)}
                    <button type="button" className="key special" aria-label="Clear code" disabled={unlocked} onClick={clear}>CLR</button>
                    <button type="button" className="key" disabled={unlocked} onClick={() => digit('0')}>0</button>
                    <button type="button" className="key confirm" aria-label="Unlock safe" disabled={unlocked} onClick={unlock}>↵</button>
                  </div>
                </div>
                <div className="handle" aria-hidden="true" />
              </div>
              <p className="message" role="status" aria-live="polite">{message}</p>
            </div>
          </div>
          <div className="below">
            {unlocked && <div className="collection"><button type="button" className="collect" onClick={onComplete}>COLLECT THE DOSSIER →</button><p className="fine" role="status">Access granted. Nice work, agent.</p></div>}
            <button type="button" className="skip" onClick={onComplete}>Skip the safe &amp; view my work →</button>
            <p className="fine">No timer. Unlimited attempts. Keyboard supported.</p>
          </div>
        </div>
      </section>
    </main>
  );
};
