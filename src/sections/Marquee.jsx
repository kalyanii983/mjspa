import { SERVICES } from '../data';

export default function Marquee() {
  const items = [...SERVICES, ...SERVICES];
  return <div className="marquee" aria-hidden="true"><div>{items.map((s, i) => <span key={i}>✦ {s.name}</span>)}</div></div>;
}
