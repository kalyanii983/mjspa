import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Sound from './Sound';
import { BOOK } from '../utils';

const LINKS = [['/', 'Home'], ['/about', 'About us'], ['/services', 'Treatments'], ['/packages', 'Packages'], ['/gallery', 'Gallery'], ['/faq', 'FAQ'], ['/contact', 'Contact']];

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const k = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open]);
  return (<>
    <header className={`nav ${solid ? 'solid' : ''} ${open ? 'open' : ''}`}>
      <Link to="/" className="logo" aria-label="MJ Spa home" onClick={() => setOpen(false)}>
        <img src="/logo1.png" alt="MJ Spa" className="logo-img" />
      </Link>
      <nav aria-label="Main">{LINKS.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'}>{l}</NavLink>)}</nav>
      <Sound />
      <button className="icon-btn" aria-label="Toggle dark mode" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? '☾' : '☀'}</button>
      <button className="menu-btn" aria-expanded={open} aria-controls="fullmenu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    </header>
    <div id="fullmenu" className={`menu ${open ? 'on' : ''}`} aria-hidden={!open}>
      {LINKS.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{l}</NavLink>)}
      <a className="btn gold" href={BOOK} tabIndex={open ? 0 : -1}>Book a treatment</a>
    </div>
  </>);
}
