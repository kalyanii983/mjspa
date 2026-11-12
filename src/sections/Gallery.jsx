import { useState, useEffect } from 'react';
import Head from '../components/Head';
import Img from '../components/Img';
import { GALLERY } from '../data';

export default function Gallery({ top }) {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);
  return (
    <section className={`sec${top ? ' top' : ''}`}>
      <Head as={top ? 'h1' : 'h2'} title="Gallery" />
      <div className="masonry" data-stagger>
        {GALLERY.map((g, i) => <button key={i} className="g" onClick={() => setOpen(g)} aria-label={`Open gallery image ${i + 1}`}><Img src={g} alt={`MJ Spa gallery photo ${i + 1}`} /></button>)}
      </div>
      <p className="center"><a className="btn ghost" href="https://instagram.com/mjayurvedic_" target="_blank" rel="noreferrer">Follow @mjayurvedic_ on Instagram</a></p>
      {open && <div className="overlay" onClick={() => setOpen(null)}><img className="lb" src={open} alt="Gallery enlarged" /></div>}
    </section>
  );
}
