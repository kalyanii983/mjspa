import { useState } from 'react';
import Head from '../components/Head';
import { BENEFITS } from '../data';

export default function Benefits() {
  const [tab, setTab] = useState(0);
  return (
    <section className="sec alt">
      <Head title="Benefits of Ayurvedic massage" />
      <div className="tabs" role="tablist">{BENEFITS.map(([t], i) => <button key={t} role="tab" aria-selected={tab === i} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>{t}</button>)}</div>
      <div className="card panel"><h3>{BENEFITS[tab][0]}</h3><p>{BENEFITS[tab][1]}</p></div>
    </section>
  );
}
