import { Link } from 'react-router-dom';
import Leaf from './Leaf';
import { BOOK } from '../utils';
import './Footer.css';


const BRANCHES = [
  {
    name: 'Bilekahalli',
    address: [
      '3rd Floor, SV Arcade,',
      'Bilekahalli Main Road,',
      'Bannerghatta Rd, near',
      'Akshara Eye Hospital,',
      'Bengaluru 560076',
    ],
    map: 'https://www.google.com/maps?q=12.898991,77.6056478&z=17&hl=en',
  },
  {
    name: 'Indiranagar',
    address: [
      'Indiranagar, Bengaluru,',
      'Karnataka (Near 100 Feet',
      'Road / CMH Road)',
    ],
    map: 'https://www.google.com/maps?q=12.9698682,77.6407684&z=17&hl=en',
  },
];

const LINKS = [
  ['/', 'Home'],
  ['/about', 'About us'],
  ['/services', 'Treatments'],
  ['/packages', 'Packages'],
  ['/gallery', 'Gallery'],
  ['/faq', 'FAQ'],
  ['/contact', 'Contact'],
];

const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const InstaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="mjf">
      <Leaf className="fl" />

      <div className="mjf-cta">
        <img src="/logo1.png" alt="MJ Spa Logo" className="mjf-logo" />
        <p className="mjf-kick">MJ Beauty Salon &amp; Ayurvedic Spa</p>
        <h2 className="mjf-title">Your self-care journey awaits</h2>
        <p className="mjf-sub">Book a relaxing session at the branch nearest you</p>
        <div className="mjf-btns">
          <a className="mjf-btn mjf-btn-gold" href={BOOK}>WhatsApp us</a>
          <a className="mjf-btn mjf-btn-ghost" href="tel:+919740418533">Call +91 97404 18533</a>
        </div>
      </div>

      <div className="mjf-divider" />

      <div className="mjf-grid">
        <div className="mjf-branches">
          <h4 className="mjf-label">Our Branches</h4>
          <div className="mjf-cards">
            {BRANCHES.map((b) => (
              <div className="mjf-card" key={b.name}>
                <h5>{b.name}</h5>
                <address>
                  {b.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
                <a href={b.map} target="_blank" rel="noreferrer" className="mjf-map">
                  <PinIcon /> View on Google Maps <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mjf-col">
          <h4 className="mjf-label">Explore</h4>
          <nav className="mjf-links">
            {LINKS.map(([to, label]) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </nav>
        </div>

        <div className="mjf-col">
          <h4 className="mjf-label">Follow</h4>
          <div className="mjf-links">
            <a href="https://instagram.com/mjayurvedic_" target="_blank" rel="noreferrer" className="mjf-icon-link">
              <InstaIcon /> @mjayurvedic_
            </a>
            <a href="mailto:mjbeautysalonandayurvedicspa@gmail.com" className="mjf-icon-link">
              <MailIcon /> Email us
            </a>
          </div>

          <h4 className="mjf-label mjf-label-gap">Open daily</h4>
          <p className="mjf-hours"><ClockIcon /> 10:00 AM – 9:00 PM</p>
        </div>
      </div>

      <p className="mjf-quote">“Take a quiet hour. The day will wait.”</p>

      <div className="mjf-divider" />
      <p className="mjf-copy">© {new Date().getFullYear()} MJ Spa. All rights reserved.</p>
    </footer>
  );
}