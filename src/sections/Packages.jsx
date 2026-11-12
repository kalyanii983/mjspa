import Head from '../components/Head';
import { PACKS } from '../data';

export default function Packages({ top }) {
  return (
    <section className={`sec${top ? ' top' : ''}`}>
      <Head as={top ? 'h1' : 'h2'} title="Signature packages" sub="Call for pricing. We will tailor the package to you." />
      <div className="grid3" data-stagger>
        {PACKS.slice(0, 3).map(([t, d, li], i) => (
          <div className={`card pack ${i === 1 ? 'pop' : ''}`} key={t}>
            {i === 1 && <em>Most Popular</em>}<h3>{t}</h3><p>{d}</p>
            <ul>{li.map((x) => <li key={x}>{x}</li>)}</ul>
            <a className="btn gold" href="tel:+919740418533">Call for pricing</a>
          </div>
        ))}
      </div>
    </section>
  );
}
