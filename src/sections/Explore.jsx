import { Link } from 'react-router-dom';
import Head from '../components/Head';
import Img from '../components/Img';
import { IMG } from '../data';

const TILES = [
  ['/about', 'Our story', 'Ayurveda and modern beauty care under one roof.', IMG.about],
  ['/packages', 'Packages', 'Couples, full-body and bridal pampering.', IMG.b],
  ['/gallery', 'Gallery', 'A look inside our calm, private rooms.', IMG.c],
  ['/contact', 'Book a visit', 'Find us, call us or message on WhatsApp.', IMG.hero],
];

export default function Explore() {
  return (
    <section className="sec dark">
      <Head title="Explore MJ Spa" />
      <div className="grid4" data-stagger>
        {TILES.map(([to, t, d, img]) => (
          <Link key={to} to={to} className="tile"><Img src={img} alt="" /><div className="tile-t"><h3>{t}</h3><p>{d}</p><span>Open page →</span></div></Link>
        ))}
      </div>
    </section>
  );
}
