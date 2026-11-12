import { Link } from 'react-router-dom';
import Img from './Img';

// Dark banner that opens every inner page (gives each page its own identity)
export default function PageBanner({ title, sub, img }) {
  return (
    <section className="banner">
      <Img src={img} alt="" className="banner-bg" eager />
      <div className="banner-in" data-reveal>
        <h1 className="gold-t">{title}</h1>
        {sub && <p>{sub}</p>}
        <nav aria-label="Breadcrumb"><Link to="/">Home</Link> / {title}</nav>
      </div>
    </section>
  );
}
