import { Link, useParams } from 'react-router-dom';
import Img from '../components/Img';
import PageBanner from '../components/PageBanner';
import NotFound from './NotFound';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../data';
import { usePageTitle, wa } from '../utils';

export default function ServiceDetail() {
  const { id } = useParams();
  const s = SERVICES.find((x) => x.id === id);
  usePageTitle(s ? `${s.name} in Bangalore` : 'Service not found');
  if (!s) return <NotFound />;
  return (<>
    <PageBanner title={s.name} sub={s.desc} img={s.img} />
    <section className="sec split">
      <Img src={s.img} alt={`${s.name} at MJ Spa`} className="arch" eager />
      <div data-reveal>
        <Link className="link" to="/services">← All services</Link>
        <h2>About this massage</h2><i className="h-line" /><p>{s.desc}</p>
        <h3>Benefits</h3><ul>{s.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
        <h3>Who it’s for</h3><p>{s.who}</p>
        <h3>What to expect</h3><p>{s.expect}</p>
        <p><b>Duration:</b> {s.dur}</p>
        <a className="btn gold" href={wa(`Hello MJ Spa, I would like to book a ${s.name}.`)}>Book This Massage <span>→</span></a>
      </div>
    </section>
    <section className="sec alt">
      <div className="grid4" data-stagger>{SERVICES.filter((x) => x.id !== id).slice(0, 4).map((x) => <ServiceCard key={x.id} s={x} />)}</div>
    </section>
  </>);
}
