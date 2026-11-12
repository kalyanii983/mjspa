import { useState } from 'react';
// Lazy, async-decoded image with fixed dimensions (no layout shift) and a fallback block
export default function Img({ src, alt, className, eager }) {
  const [ok, setOk] = useState(true);
  return ok
    ? <img src={src} alt={alt} className={className} width="640" height="480" decoding="async"
        loading={eager ? 'eager' : 'lazy'} fetchpriority={eager ? 'high' : undefined} onError={() => setOk(false)} />
    : <div className={`${className || ''} ph`} role="img" aria-label={alt} />;
}
