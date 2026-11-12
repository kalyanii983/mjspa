import { useState, useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Preloader from './Preloader';
import Footer from './Footer';
import Floating from './Floating';
import { initAnimations } from '../animations';

export default function Layout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState('light');
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  // Re-run desktop animations for each page (cleanup resets the old page)
  useLayoutEffect(() => initAnimations(), [pathname]);
  return (<>
    <Preloader />
    <div className="progress" aria-hidden="true" />
    <div className="decos" aria-hidden="true">
      <svg className="deco d1" viewBox="0 0 100 100"><path d="M50 95C20 70 15 35 50 5c35 30 30 65 0 90zM50 10v85" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
      <svg className="deco d2" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" /><circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" /><circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" /></svg>
    </div>
    <Navbar theme={theme} setTheme={setTheme} />
    <main><Outlet /></main>
    <Footer />
    <Floating />
  </>);
}
