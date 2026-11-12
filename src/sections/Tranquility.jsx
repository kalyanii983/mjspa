import { Link } from 'react-router-dom';

export default function Tranquility() {
  return (
    <section
      className="tranq"
      style={{ backgroundImage: 'url(/bgimg2.png)' }}
    >
      <div className="tranq-content" data-reveal>
        <p className="tranq-kicker">A Serene Space To</p>

        <h2 className="tranq-title">
          <span className="tranq-soothe">Soothe Mind</span>
          <span className="tranq-script">and Body</span>
        </h2>

        <div className="tranq-divider" aria-hidden="true">
          <span />
          <svg viewBox="0 0 40 28" width="34" height="24" fill="none" stroke="#a9794a" strokeWidth="1.2">
            <path d="M20 4c-3 4-3 10 0 16 3-6 3-12 0-16z" />
            <path d="M20 20C14 20 8 16 6 10c6 0 11 3 14 10z" />
            <path d="M20 20c6 0 12-4 14-10-6 0-11 3-14 10z" />
            <path d="M8 22c4 3 20 3 24 0" />
          </svg>
          <span />
        </div>

        <Link className="tranq-btn" to="/gallery">
          See the Spa <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}