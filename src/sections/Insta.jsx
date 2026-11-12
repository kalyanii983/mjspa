import Img from '../components/Img';
import { GALLERY } from '../data';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Insta() {
  return (
    <section id="gallery" className="mji-sec">
      <div className="mji-wrap">
        <header className="mji-head" data-reveal>
          <div className="mji-kick-wrap">
            <span className="mji-kick-line" aria-hidden="true" />
            <span className="mji-kick">MOMENTS OF CALM</span>
            <span className="mji-kick-line" aria-hidden="true" />
          </div>
          <div className="mji-lotus" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21c-3-3-4.5-7-4.5-11 2.5 1.5 4 4 4.5 7 .5-3 2-5.5 4.5-7 0 4-1.5 8-4.5 11Z" />
              <path d="M12 17c-2-3-2-8 0-12 2 4 2 9 0 12Z" />
              <path d="M4 14c2.5 5 5.5 7 8 7s5.5-2 8-7" />
            </svg>
          </div>
          <h2 className="mji-title">
            Follow Our <em>Sanctuary</em>
          </h2>
          <a
            className="mji-handle-pill"
            href="https://instagram.com/mjayurvedic_"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit MJ Spa on Instagram"
          >
            <InstagramIcon />
            <span>@mjayurvedic_</span>
            <span className="mji-pill-arrow" aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="mji-grid" data-stagger>
          {GALLERY.slice(0, 5).map((g, i) => (
            <a
              key={i}
              href="https://instagram.com/mjayurvedic_"
              target="_blank"
              rel="noreferrer"
              className="mji-card"
              aria-label={`Open Instagram photo ${i + 1}`}
            >
              <div className="mji-card-inner">
                <Img src={g} alt={`MJ Spa Instagram photo ${i + 1}`} />
                <div className="mji-overlay">
                  <div className="mji-overlay-icon">
                    <InstagramIcon />
                  </div>
                  <span className="mji-overlay-label">View on Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
