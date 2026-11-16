import { useState, useEffect } from 'react';
import { REVIEWS } from '../data';
import './Testimonials.css';

// Set this to your Google reviews link to show the "Read all reviews" link. Leave empty to hide it.
const GOOGLE_REVIEWS_URL = '';
// Update this when you have the real rating.
const RATING = '4.9';

const initials = (name = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

// REVIEWS items are [name, text, treatment?]. The third value is optional.
function ReviewCard({ review, featured }) {
  const [name, text, treatment] = review;
  return (
    <article className={`mjt-card${featured ? ' mjt-featured' : ''}`} aria-live={featured ? 'polite' : undefined}>
      <span className="mjt-q" aria-hidden="true">“</span>
      <p className="mjt-text">{text}</p>
      <span className="mjt-stars" aria-label="5 out of 5 stars">★★★★★</span>
      <div className="mjt-person">
        <span className="mjt-avatar" aria-hidden="true">{initials(name)}</span>
        <div>
          <b className="mjt-name">{name}</b>
          {treatment && <span className="mjt-treat">{treatment}</span>}
        </div>
      </div>
    </article>
  );
}

// State lives here, so the auto-slide re-renders only this section, not the whole page
export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = REVIEWS.length;

  useEffect(() => {
    if (paused || total < 2) return;
    if (!matchMedia('(min-width:1024px) and (hover:hover)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % total), 5500);
    return () => clearInterval(t);
  }, [paused, total]);

  const prev = (i - 1 + total) % total;
  const next = (i + 1) % total;
  const showSides = total >= 3;

  const go = (n) => setI((n + total) % total);

  return (
    <section
      className="mjt"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mjt-head">
        <p className="mjt-kick">Guest stories</p>
        <h2 className="mjt-title">Kind words from our guests</h2>
        <div className="mjt-ornament" aria-hidden="true"><span /><i /><span /></div>
        <p className="mjt-rating">{RATING} ★ Rated on Google</p>
      </div>

      <div className="mjt-stage">
        {showSides && (
          <div className="mjt-side mjt-side-l">
            <ReviewCard review={REVIEWS[prev]} />
          </div>
        )}
        <ReviewCard key={i} review={REVIEWS[i]} featured />
        {showSides && (
          <div className="mjt-side mjt-side-r">
            <ReviewCard review={REVIEWS[next]} />
          </div>
        )}
      </div>

      <div className="mjt-nav">
        <button className="mjt-arrow" aria-label="Previous review" onClick={() => go(i - 1)}>←</button>
        <div className="mjt-dots">
          {REVIEWS.map((_, n) => (
            <button
              key={n}
              aria-label={`Review ${n + 1}`}
              className={n === i ? 'on' : ''}
              onClick={() => setI(n)}
            />
          ))}
        </div>
        <button className="mjt-arrow mjt-arrow-fill" aria-label="Next review" onClick={() => go(i + 1)}>→</button>
      </div>

      {GOOGLE_REVIEWS_URL && (
        <a className="mjt-more" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
          Read all reviews on Google →
        </a>
      )}
    </section>
  );
}