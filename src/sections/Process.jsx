import Head from '../components/Head';
import { STEPS } from '../data';
import '../sections.css';

export default function Process() {
  return (
    <section className="sec dark journey">
      <Head title="Your treatment journey" />
      <ol className="timeline">
        {STEPS.map(([t, d], i) => (
          <li key={t} style={{ '--i': i }}>
            <span className="num">{i + 1}</span>
            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}