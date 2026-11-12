import { useState, useEffect } from 'react';

// Desktop-only percentage preloader (~1.4s). Mobile and reduced-motion users skip it.
export default function Preloader() {
  const on = matchMedia('(min-width:1024px) and (hover:hover) and (prefers-reduced-motion:no-preference)').matches;
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(!on);
  useEffect(() => {
    if (!on) return;
    const t0 = performance.now(); let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / 1400); setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick); else setTimeout(() => setGone(true), 500);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return gone ? null : <div className={`pre ${n >= 100 ? 'out' : ''}`} aria-hidden="true"><b>MJ</b><span>{n}%</span></div>;
}
