import { Link } from 'react-router-dom';
import Img from './Img';

export default function ServiceCard({ s }) {
  return (
    <article className="card svc">
      <div className="frame"><Img src={s.img} alt={`${s.name} at MJ Spa`} /></div>
      <h3>{s.name}</h3><p>{s.desc}</p><small>{s.dur}</small>
      <Link className="link" to={`/services/${s.id}`} aria-label={`Learn more about ${s.name}`}>Learn more →</Link>
    </article>
  );
}
