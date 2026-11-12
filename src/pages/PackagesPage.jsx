import PageBanner from '../components/PageBanner';
import Packages from '../sections/Packages';
import { IMG } from '../data';
import { usePageTitle } from '../utils';

export default function PackagesPage() {
  usePageTitle('Spa packages');
  return <><PageBanner title="Signature Packages" sub="Call for pricing." img={IMG.b} /><Packages /></>;
}
