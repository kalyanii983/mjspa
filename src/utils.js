import { useEffect } from 'react';
export const PHONE = '919740418533';
export const wa = (t) => `https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
export const BOOK = wa('Hello MJ Spa, I would like to book a session.');
export function usePageTitle(t) {
  useEffect(() => { document.title = t ? `${t} | MJ Spa Bangalore` : 'MJ Spa | Ayurvedic Spa in Bilekahalli, Bannerghatta Road, Bangalore'; }, [t]);
}
