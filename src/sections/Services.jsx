import { useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../components/Head';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../data';

export default function Services({ filterable = true, limit }) {
  const [f, setF] = useState('All');
  const list = SERVICES.filter((s) => f === 'All' || s.cat === f).slice(0, limit || 99);
  return (
    <section className="sec alt">
      <Head title="Our massage services" sub="Eight treatments, each tailored to you. Also available: facials, body treatments, nail care and beauty salon services." />
      {filterable && <div className="tabs" role="tablist">
        {['All', 'Relaxation', 'Therapeutic', 'Beauty'].map((c) => <button key={c} role="tab" aria-selected={f === c} className={f === c ? 'on' : ''} onClick={() => setF(c)}>{c}</button>)}
      </div>}
      <div className="grid4" data-stagger>{list.map((s) => <ServiceCard key={s.id} s={s} />)}</div>
      {limit && <p className="center"><Link className="btn gold" to="/services">View all services <span>→</span></Link></p>}
    </section>
  );
}
