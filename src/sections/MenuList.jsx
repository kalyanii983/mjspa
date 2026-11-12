import { Link } from 'react-router-dom';
import { BOOK } from '../utils';
import { SERVICES } from '../data';

const TAGLINES = {
  'signature': 'A personalised therapy for total relaxation.',
  'deep-tissue': 'Release tension and restore balance.',
  'hot-stone': 'Let the warmth heal you.',
  'swedish': 'Gentle care for mind and body.',
  'thai': 'Awaken your senses.',
  'aroma': 'Breathe deeper, feel lighter.',
  'head': 'Relieve stress, find calm.',
  'balinese': 'A perfect blend of relaxation and care.',
};

export default function MenuList() {
  return (
    <section id="menu" className="menu-sec">
      <div className="menu-container">

        <div className="menu-list" data-stagger>
          {SERVICES.map((s) => (
            <Link to={`/services/${s.id}`} className="menu-card" key={s.id}>
              <div className="menu-card-thumb">
                <img src={s.img} alt={s.name} loading="lazy" />
              </div>
              <div className="menu-card-info">
                <h3 className="menu-card-title">{s.name}</h3>
                <p className="menu-card-tag">{TAGLINES[s.id] || s.desc}</p>
              </div>
              <div className="menu-card-meta">
                <span className="menu-card-dur">{s.dur}</span>
                <span className="menu-card-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="menu-left" data-reveal>
          <div className="menu-kick-wrap">
            <span className="menu-kick-line" aria-hidden="true" />
            <span className="menu-kick">TREATMENTS</span>
            <span className="menu-kick-line" aria-hidden="true" />
          </div>
          <div className="menu-lotus" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21c-3-3-4.5-7-4.5-11 2.5 1.5 4 4 4.5 7 .5-3 2-5.5 4.5-7 0 4-1.5 8-4.5 11Z" />
              <path d="M12 17c-2-3-2-8 0-12 2 4 2 9 0 12Z" />
              <path d="M4 14c2.5 5 5.5 7 8 7s5.5-2 8-7" />
            </svg>
          </div>
          <h2 className="menu-title">The MJ Menu</h2>
          <p className="menu-sub">Healing traditions. Modern care.</p>
          <p className="menu-desc">
            From a deeply relaxing hot stone massage to a firm deep tissue session, choose what your body needs today. Facials, body treatments and nail care are also available.
          </p>
          <a className="menu-btn" href={BOOK}>
            <span>BOOK A TREATMENT</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>


      </div>
    </section>
  );
}
