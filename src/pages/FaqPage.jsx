import PageBanner from '../components/PageBanner';
import Faq from '../sections/Faq';
import { IMG } from '../data';
import { usePageTitle } from '../utils';

export default function FaqPage() {
  usePageTitle('FAQ');
  return <><PageBanner title="FAQ" sub="Everything to know before your first visit." img={IMG.b} /><Faq /></>;
}
