import Head from '../components/Head';
import { STEPS } from '../data';

export default function Process() {
  return (
    <section className="sec dark">
      <Head title="Your treatment journey" />
      <ol className="timeline"><i className="tl-line" />
        {STEPS.map(([t, d], i) => <li key={t}><span className="num">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>)}
      </ol>
    </section>
  );
}
