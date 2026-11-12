import { useState, useEffect } from 'react';
import Head from '../components/Head';
import { REVIEWS } from '../data';

// State lives here, so the 5.5s auto-slide re-renders only this section, not the whole page
export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!matchMedia('(min-width:1024px) and (hover:hover)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % REVIEWS.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="sec dark">
      <Head title="Kind words from our guests" sub="Rated 4.9 ★ on Google (placeholder)" />
      <div className="card quote" aria-live="polite"><span className="q">“</span><p>{REVIEWS[i][1]}</p><b>{REVIEWS[i][0]}</b><span className="stars">★★★★★</span></div>
      <div className="dots">{REVIEWS.map((_, n) => <button key={n} aria-label={`Review ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />)}</div>
    </section>
  );
}
