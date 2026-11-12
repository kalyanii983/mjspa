import PageBanner from '../components/PageBanner';
import Services from '../sections/Services';
import Benefits from '../sections/Benefits';
import { IMG } from '../data';
import { usePageTitle } from '../utils';

export default function ServicesPage() {
  usePageTitle('Massage services in Bilekahalli, Bannerghatta Road');
  return <><PageBanner title="Our Services" sub="Eight massages, plus facials, body treatments and nail care." img={IMG.a} /><Services /><Benefits /></>;
}
