import PageBanner from '../components/PageBanner';
import Contact from '../sections/Contact';
import { IMG } from '../data';
import { usePageTitle } from '../utils';

export default function ContactPage() {
  usePageTitle('Book a massage or enquire');
  return <><PageBanner title="Contact & Booking" sub="Call, WhatsApp or send an enquiry." img={IMG.hero} /><Contact /></>;
}
