import { Link } from 'react-router-dom';
import Img from '../components/Img';
import { BOOK } from '../utils';

export default function Hero() {
  return (
    <section className="mjhero">
      <Img
        src="/bg.png"
        alt="Ayurvedic spa room with brass bowl, towels and candles at MJ Spa"
        className="mh-bg"
        eager
      />
      <div className="mh-overlay" aria-hidden="true" />

      <div className="mh-content">
        <p className="mh-kick hero-fade">
          <i aria-hidden="true" />
          <span>MJ Spa · Bangalore</span>
          <i aria-hidden="true" />
        </p>

        <h1 className="mh-title hero-fade">
          <span className="mh-t1">The Art of</span>
          <em className="mh-t2">Ayurvedic Wellness</em>
        </h1>

        <p className="mh-tag hero-fade">Rediscover balance. Reconnect with yourself.</p>

        <span className="mh-rule hero-fade" aria-hidden="true" />

        <p className="mh-sub hero-fade">
          Experience thoughtful Ayurvedic therapies and moments of tranquillity
          in an atmosphere designed for complete relaxation.
        </p>

        <div className="mh-btns hero-fade">
          <Link className="mh-btn mh-btn-gold" to="/services">
            Explore Treatments <span aria-hidden="true">→</span>
          </Link>
          <a className="mh-btn mh-btn-line" href={BOOK}>
            Book Now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <a className="mh-scroll" href="#wisdom" aria-label="Scroll down">
        <i aria-hidden="true" />
        <b aria-hidden="true">↓</b>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}