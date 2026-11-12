import { Link } from 'react-router-dom';
import Img from '../components/Img';
import { PACKS, IMG } from '../data';
import { BOOK } from '../utils';

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const PACK_DATA = [
  {
    title: 'Couple’s Retreat',
    tagline: 'Side-by-side calm in a private suite',
    desc: 'Two therapists, warm aromatic herbal oils, and soothing herbal tea served in serenity.',
    dur: '90–120 min',
    img: IMG.b,
    features: ['Private couple suite', 'Custom herbal oils', 'Warm herbal tea'],
    badge: 'Popular',
  },
  {
    title: 'Bridal & Pamper',
    tagline: 'Head-to-toe glow & pre-event bliss',
    desc: 'A full-body massage, rejuvenating Ayurvedic facial glow, and revitalising nail & skin care.',
    dur: '120–150 min',
    img: IMG.c,
    features: ['Signature massage', 'Nourishing facial', 'Nail & skin care'],
    badge: 'Special',
  },
];

export default function Treats() {
  return (
    <section id="treats" className="mjt-sec">
      <div className="mjt-wrap">
        <header className="mjt-head" data-reveal>
          <div className="mjt-kick-wrap">
            <span className="mjt-kick-line" aria-hidden="true" />
            <span className="mjt-kick">CURATED EXPERIENCES</span>
            <span className="mjt-kick-line" aria-hidden="true" />
          </div>
          <div className="mjt-lotus" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21c-3-3-4.5-7-4.5-11 2.5 1.5 4 4 4.5 7 .5-3 2-5.5 4.5-7 0 4-1.5 8-4.5 11Z" />
              <path d="M12 17c-2-3-2-8 0-12 2 4 2 9 0 12Z" />
              <path d="M4 14c2.5 5 5.5 7 8 7s5.5-2 8-7" />
            </svg>
          </div>
          <h2 className="mjt-title">
            Signature Spa <em>Packages</em>
          </h2>
          <p className="mjt-sub">Thoughtfully bundled rituals for lasting harmony & radiance</p>
        </header>

        <div className="mjt-grid" data-stagger>
          {PACK_DATA.map((p, idx) => (
            <div className="mjt-card" key={idx}>
              <div className="mjt-card-media">
                <Img src={p.img} alt={p.title} />
                <span className="mjt-card-badge">{p.badge}</span>
                <span className="mjt-card-dur">{p.dur}</span>
              </div>
              <div className="mjt-card-body">
                <h3 className="mjt-card-title">{p.title}</h3>
                <p className="mjt-card-tagline">{p.tagline}</p>
                <p className="mjt-card-desc">{p.desc}</p>
                
                <ul className="mjt-card-perks">
                  {p.features.map((f, i) => (
                    <li key={i}>
                      <span className="mjt-perk-dot" aria-hidden="true">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mjt-card-actions">
                  <Link to="/packages" className="mjt-btn-ghost">
                    <span>View Package</span>
                    <Arrow />
                  </Link>
                  <a href={BOOK} className="mjt-btn-primary">
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mjt-foot-cta" data-reveal>
          <span className="mjt-foot-line" aria-hidden="true" />
          <Link to="/packages" className="mjt-more-btn">
            <span>Explore All Wellness Packages</span>
            <span className="mjt-more-arrow" aria-hidden="true">→</span>
          </Link>
          <span className="mjt-foot-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
