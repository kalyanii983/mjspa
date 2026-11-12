import { Link } from 'react-router-dom';
import Img from '../components/Img';

/* ---------- icons ---------- */
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const IconBowl = () => (
  <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 26h34c0 8-7 14-17 14S7 34 7 26Z" />
    <path d="M24 26c-5-1-8-5-8-10 5 0 8 4 8 10Zm0 0c5-1 8-5 8-10-5 0-8 4-8 10Z" />
    <path d="M24 26V10M20 40h8" />
  </svg>
);
const IconStones = () => (
  <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="24" cy="37" rx="14" ry="5" />
    <ellipse cx="24" cy="28" rx="10" ry="4.5" />
    <ellipse cx="24" cy="20" rx="6" ry="3.8" />
    <circle cx="24" cy="12" r="2.2" />
  </svg>
);
const IconLotus = () => (
  <svg viewBox="0 0 48 48" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 38c-5-4-7-10-7-16 4 2 6 6 7 10 1-4 3-8 7-10 0 6-2 12-7 16Z" />
    <path d="M24 32c-3-5-3-12 0-18 3 6 3 13 0 18Z" />
    <path d="M10 26c3 8 9 12 14 12s11-4 14-12" />
  </svg>
);

/* ---------- content ---------- */
const CARDS = [
  {
    img: '/wisdomcard1.png',
    alt: 'Ancient wisdom Ayurvedic therapy',
    title: 'Ancient wisdom',
    text: 'Time-honoured Ayurvedic techniques and herbal oils, chosen for your body and mood.',
    icon: <IconBowl />,
  },
  {
    img: '/wisdomcard2.png',
    alt: 'Modern spa treatment experience',
    title: 'Modern experiences',
    text: 'Private rooms, fresh linen and attentive therapists, from massages to facials and beauty care.',
    icon: <IconStones />,
  },
  {
    img: '/wisdomcard3.png',
    alt: 'Complete wellness and rejuvenation',
    title: 'Complete wellness',
    text: 'A holistic approach to relaxation, rejuvenation and inner balance.',
    icon: <IconLotus />,
  },
];

export default function Wisdom() {
  return (
    <section id="wisdom" className="mjw">
      <div className="mw-wrap">
        <header className="mw-head" data-reveal>
          <p className="mw-kick">
            <i aria-hidden="true" />
            <span>A sanctuary in Bilekahalli</span>
            <i aria-hidden="true" />
          </p>
          <h2 className="mw-title">
            Ancient wisdom, shaped for <em>modern life</em>
          </h2>
          <div className="mw-divider" aria-hidden="true">
            <i />
            <svg viewBox="0 0 48 48" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M24 38c-5-4-7-10-7-16 4 2 6 6 7 10 1-4 3-8 7-10 0 6-2 12-7 16Z" />
              <path d="M24 32c-3-5-3-12 0-18 3 6 3 13 0 18Z" />
              <path d="M10 26c3 8 9 12 14 12s11-4 14-12" />
            </svg>
            <i />
          </div>
        </header>

        <div className="mw-grid" data-stagger>
          {CARDS.map((c) => (
            <article className="mw-card" key={c.title}>
              <div className="mw-media">
                <div className="mw-photo">
                  <Img src={c.img} alt={c.alt} />
                </div>
                <span className="mw-badge">{c.icon}</span>
              </div>
              <div className="mw-body">
                <div className="mw-copy">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
                <Link to="/services" className="mw-arrow" aria-label={`Explore ${c.title}`}>
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mw-cta" data-reveal>
          <i aria-hidden="true" />
          <Link to="/services" className="mw-btn">
            View All Treatments <Arrow />
          </Link>
          <i aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}