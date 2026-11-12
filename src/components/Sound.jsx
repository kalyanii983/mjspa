import { useRef, useState } from 'react';

// Ambient music toggle (desktop only, muted by default). Put your own file at public/ambient.mp3
export default function Sound() {
  const audio = useRef(null);
  const [on, setOn] = useState(false);
  if (!matchMedia('(min-width:1024px) and (hover:hover)').matches) return null;
  const toggle = () => {
    if (!audio.current) { audio.current = new Audio('/ambient.mp3'); audio.current.loop = true; audio.current.volume = 0.35; }
    if (on) audio.current.pause(); else audio.current.play().catch(() => {});
    setOn(!on);
  };
  return <button className="icon-btn" aria-label={on ? 'Mute ambient music' : 'Play ambient music'} onClick={toggle}>{on ? '🔊' : '🔇'}</button>;
}
