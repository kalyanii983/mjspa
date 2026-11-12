import { SERVICES } from '../data';
import { wa } from '../utils';

export default function Contact({ top }) {
  const H = top ? 'h1' : 'h2';
  const send = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    window.open(wa(`Hello MJ Spa, I'm ${d.name} (${d.phone}). Service: ${d.service}. Date: ${d.date || 'flexible'}. ${d.message || ''}`), '_blank');
  };
  return (
    <section className={`sec split${top ? ' top' : ''}`}>
      <form className="card form" onSubmit={send} data-reveal>
        <H>Book or enquire</H>
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
        <label>Service<select name="service">{SERVICES.map((s) => <option key={s.id}>{s.name}</option>)}</select></label>
        <label>Preferred date<input name="date" type="date" /></label>
        <label>Message<textarea name="message" rows="3" /></label>
        <button className="btn gold" type="submit">Send on WhatsApp <span>→</span></button>
      </form>
      <div data-reveal>
        <iframe title="MJ Spa location map" loading="lazy" className="map" src="https://www.google.com/maps?q=SV+Arcade+Bilekahalli+Main+Road+Bannerghatta+Rd+Bengaluru&output=embed" />
        <ul className="contact">
          <li>📞 <a href="tel:+919740418533">+91 97404 18533</a></li>
          <li>✉️ <a href="mailto:mjbeautysalonandayurvedicspa@gmail.com">mjbeautysalonandayurvedicspa@gmail.com</a></li>
          <li>📍 3rd Floor, SV Arcade, Bilekahalli Main Road, Bannerghatta Rd, near Akshara Eye Hospital, Bengaluru 560076</li>
          <li>🕘 Open daily (edit hours in sections/Contact.jsx)</li>
        </ul>
      </div>
    </section>
  );
}
