import PageBanner from '../components/PageBanner';
import About from '../sections/About';
import WhyUs from '../sections/WhyUs';
import Process from '../sections/Process';
import { IMG } from '../data';
import { usePageTitle } from '../utils';

export default function AboutPage() {
  usePageTitle('About our Ayurvedic spa');
  return <><PageBanner title="About MJ Spa" sub="Traditional Ayurveda with modern beauty therapy." img={IMG.about} /><About /><WhyUs /><Process /></>;
}
