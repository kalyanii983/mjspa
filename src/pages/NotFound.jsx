import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { IMG } from '../data';

export default function NotFound() {
  return <><PageBanner title="Page not found" img={IMG.hero} /><section className="sec center"><Link className="btn gold" to="/">Back to home</Link></section></>;
}
