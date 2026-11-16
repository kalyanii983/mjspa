import Head from '../components/Head';
import { FEATURES } from '../data';
import '../sections.css';

export default function WhyUs() {
  return (
    <section className="sec dark why">
      <Head title="Why choose MJ Spa" />
      <div className="grid3" data-stagger>
        {FEATURES.map(([i, t, d]) => (
          <div className="card feat" key={t}>
            <span className="ic" aria-hidden="true">{i}</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}