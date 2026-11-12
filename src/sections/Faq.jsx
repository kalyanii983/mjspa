import { useState } from 'react';
import Head from '../components/Head';
import { FAQS } from '../data';

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec alt narrow">
      <Head title="Questions, answered" />
      {FAQS.map(([q, a], i) => (
        <div className={`faq ${open === i ? 'open' : ''}`} key={q}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span>+</span></button>
          {open === i && <p>{a}</p>}
        </div>
      ))}
    </section>
  );
}
