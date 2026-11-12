import { Link } from 'react-router-dom';
import Img from '../components/Img';
import { IMG } from '../data';

const STATS = [['Happy clients', 5000], ['Treatments', 12000], ['Years', 8], ['Expert therapists', 12]];

export default function About({ compact }) {
  return (
    <section className="sec split">
      <div className="arch-wrap"><Img src={IMG.about} alt="Therapist giving an Ayurvedic massage" className="arch" /><div className="exp"><b>8+</b> years of care</div></div>
      <div data-reveal>
        <h2>Where Ayurveda meets modern beauty care</h2><i className="h-line" />
        <p>MJ Beauty Salon &amp; Ayurvedic Spa blends traditional Ayurvedic therapy with modern beauty treatments. Along with our eight signature massages, we offer facials, body treatments, nail care and full beauty salon services.</p>
        {compact
          ? <Link className="btn gold" to="/about">Read our story <span>→</span></Link>
          : <div className="stats">{STATS.map(([l, n]) => <div key={l}><b data-count={n}>{n}+</b><span>{l}</span></div>)}</div>}
      </div>
    </section>
  );
}
