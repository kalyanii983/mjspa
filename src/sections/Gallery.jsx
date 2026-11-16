import { useState, useEffect, useCallback } from 'react';
import Head from '../components/Head';
import Img from '../components/Img';
import { GALLERY_BILEKAHALLI, GALLERY_INDIRANAGAR } from '../data';

const BRANCHES = [
  { key: 'bilekahalli', label: 'Bilekahalli Branch', photos: GALLERY_BILEKAHALLI },
  { key: 'indiranagar', label: 'Indiranagar Branch', photos: GALLERY_INDIRANAGAR },
];

export default function Gallery({ top }) {
  const [branch, setBranch] = useState('bilekahalli');
  const [open, setOpen] = useState(null);

  const photos = BRANCHES.find((b) => b.key === branch).photos;
  const total = photos.length;

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % total)), [total]);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + total) % total)), [total]);

  // close lightbox when switching branch
  const switchBranch = (key) => { setOpen(null); setBranch(key); };

  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [close, next, prev]);

  useEffect(() => {
    document.body.style.overflow = open !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const [touchX, setTouchX] = useState(null);
  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    setTouchX(null);
  };

  return (
    <section className={`sec gal${top ? ' top' : ''}`}>
      <Head as={top ? 'h1' : 'h2'} title="Gallery" />

      <p className="gal-intro">
        Step inside MJ Spa — warm lights, quiet rooms and a calm you can feel.
      </p>

      {/* Branch tab switcher */}
      <div className="gal-branch-tabs">
        {BRANCHES.map((b) => (
          <button
            key={b.key}
            className={`gal-branch-tab${branch === b.key ? ' active' : ''}`}
            onClick={() => switchBranch(b.key)}
          >
            {b.label}
            <span className="gal-branch-count">{b.photos.length} photos</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gal-grid" key={branch}>
        {photos.map((g, i) => (
          <button
            key={i}
            className={`gal-tile t${i % 6}`}
            style={{ '--d': `${Math.min(i, 12) * 60}ms` }}
            onClick={() => setOpen(i)}
            aria-label={`Open gallery image ${i + 1}`}
          >
            <Img src={g} alt={`MJ Spa ${branch} photo ${i + 1}`} />
            <span className="gal-shade" aria-hidden="true" />
            <span className="gal-zoom" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="6" /><path d="M21 21l-5-5M11 8v6M8 11h6" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      <p className="center gal-cta">
        <a className="btn" href="https://instagram.com/mjayurvedic_" target="_blank" rel="noreferrer">
          Follow @mjayurvedic_ on Instagram
        </a>
      </p>

      {open !== null && (
        <div
          className="lb-wrap"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="lb-btn lb-close" onClick={close} aria-label="Close">✕</button>
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">‹</button>
          <img
            key={`${branch}-${open}`}
            className="lb-img"
            src={photos[open]}
            alt={`MJ Spa ${branch} photo ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">›</button>
          <div className="lb-count">{open + 1} / {total}</div>
        </div>
      )}
    </section>
  );
}
