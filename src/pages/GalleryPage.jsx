import PageBanner from '../components/PageBanner';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import { IMG } from '../data';
import { usePageTitle } from '../utils';

export default function GalleryPage() {
  usePageTitle('Gallery and reviews');
  return <><PageBanner title="Gallery" sub="A peek inside MJ Spa." img={IMG.c} /><Gallery /><Testimonials /></>;
}
