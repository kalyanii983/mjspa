import { Link } from 'react-router-dom';
import Leaf from './Leaf';
import { BOOK } from '../utils';

export default function Footer() {
  return (
    <footer className="foot2">
      <Leaf className="fl" />
      <div className="foot-logo-wrap">
        <img src="/logo1.png" alt="MJ Spa Logo" className="foot-logo-img" />
      </div>
      <p className="kick">MJ Beauty Salon &amp; Ayurvedic Spa</p>
      <h2>Your self-care journey awaits</h2>
      <div className="row c">
        <a className="btn gold" href={BOOK}>WhatsApp us</a>
        <a className="btn ghost" href="tel:+919740418533">Call +91 97404 18533</a>
      </div>
      <div className="fcols">
        <div><h4>Visit</h4><p>3rd Floor, SV Arcade, Bilekahalli Main Road, Bannerghatta Rd, near Akshara Eye Hospital, Bengaluru 560076</p><p>Opening hours: add yours in Footer.jsx</p></div>
        <div><h4>Explore</h4>{[['/', 'Home'], ['/about', 'About us'], ['/services', 'Treatments'], ['/packages', 'Packages'], ['/gallery', 'Gallery'], ['/faq', 'FAQ'], ['/contact', 'Contact']].map(([t, l]) => <Link key={t} to={t}>{l}</Link>)}</div>
        <div><h4>Follow</h4><a href="https://instagram.com/mjayurvedic_" target="_blank" rel="noreferrer">@mjayurvedic_</a><a href="mailto:mjbeautysalonandayurvedicspa@gmail.com">Email us</a></div>
      </div>
      <p className="quote">“Take a quiet hour. The day will wait.”</p>
      <p className="copy">© 2025 MJ Spa. All rights reserved.</p>
    </footer>
  );
}
