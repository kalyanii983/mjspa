// Botanical line-art leaf used as background decoration
export default function Leaf({ className = '' }) {
  return <svg className={`leaf ${className}`} viewBox="0 0 100 220" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M50 215C10 160 5 80 50 5c45 75 40 155 0 210z" /><path d="M50 215V10M50 150L22 120M50 120L78 90M50 90L24 60M50 180L30 155" /></svg>;
}
