import { useState } from 'react';
import { SERVICES } from '../data';
import { wa } from '../utils';

const BRANCHES = [
  {
    id: 'bilekahalli',
    name: 'Bilekahalli Branch',
    area: 'Bannerghatta Road',
    address: '3rd Floor, SV Arcade, Bilekahalli Main Road, Bannerghatta Rd, near Akshara Eye Hospital, Bengaluru 560076',
    mapUrl: 'https://www.google.com/maps?q=12.898991,77.6056478&z=17&hl=en',
    embedUrl: 'https://maps.google.com/maps?q=12.898991,77.6056478&z=16&output=embed',
  },
  {
    id: 'indiranagar',
    name: 'Indiranagar Branch',
    area: 'Indiranagar',
    address: 'Indiranagar, Bengaluru, Karnataka (Near 100 Feet Road / CMH Road hub)',
    mapUrl: 'https://www.google.com/maps?q=12.9698682,77.6407684&z=17&hl=en',
    embedUrl: 'https://maps.google.com/maps?q=12.9698682,77.6407684&z=16&output=embed',
  },
];

export default function Contact({ top }) {
  const [activeBranch, setActiveBranch] = useState(BRANCHES[0]);
  const H = top ? 'h1' : 'h2';

  const send = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.target));
    window.open(
      wa(`Hello MJ Spa, I'm ${d.name} (${d.phone}). Branch: ${d.branch}. Service: ${d.service}. Date: ${d.date || 'flexible'}. ${d.message || ''}`),
      '_blank'
    );
  };

  return (
    <section className={`sec split${top ? ' top' : ''}`}>
      <form className="card form" onSubmit={send} data-reveal>
        <H>Book or enquire</H>
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
        <label>
          Preferred Branch
          <select name="branch" defaultValue={activeBranch.name}>
            {BRANCHES.map((b) => (
              <option key={b.id} value={b.name}>{b.name} ({b.area})</option>
            ))}
          </select>
        </label>
        <label>Service<select name="service">{SERVICES.map((s) => <option key={s.id}>{s.name}</option>)}</select></label>
        <label>Preferred date<input name="date" type="date" /></label>
        <label>Message<textarea name="message" rows="3" /></label>
        <button className="btn gold" type="submit">Send on WhatsApp <span>→</span></button>
      </form>

      <div data-reveal className="branches-wrapper">
        <div className="branch-selector">
          <span className="branch-label">Select Branch Location:</span>
          <div className="branch-tabs">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`branch-tab ${activeBranch.id === b.id ? 'active' : ''}`}
                onClick={() => setActiveBranch(b)}
              >
                📍 {b.name}
              </button>
            ))}
          </div>
        </div>

        <div className="branch-map-card">
          <iframe
            key={activeBranch.id}
            title={`MJ Spa location map - ${activeBranch.name}`}
            loading="lazy"
            className="map"
            src={activeBranch.embedUrl}
          />
          <div className="branch-info">
            <div className="branch-badge">
              <strong>{activeBranch.name}</strong>
              <a
                href={activeBranch.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="branch-directions-link"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <p className="branch-addr">{activeBranch.address}</p>
          </div>
        </div>

        <ul className="contact">
          <li>📞 <a href="tel:+919740418533">+91 97404 18533</a></li>
          <li>✉️ <a href="mailto:mjbeautysalonandayurvedicspa@gmail.com">mjbeautysalonandayurvedicspa@gmail.com</a></li>
          <li>🕘 Open daily: 10:00 AM – 9:00 PM</li>
        </ul>
      </div>
    </section>
  );
}
