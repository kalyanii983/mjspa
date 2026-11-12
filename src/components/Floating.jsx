import { Link } from 'react-router-dom';
import { wa } from '../utils';

// Floating WhatsApp button + mobile bottom bar (Call | WhatsApp | Book)
export default function Floating() {
  return (<>
    <a className="wa-float" href={wa('Hello MJ Spa!')} aria-label="Chat on WhatsApp"><span>Chat with us</span>💬</a>
    <div className="bar"><a href="tel:+919740418533">Call</a><a href={wa('Hello MJ Spa!')}>WhatsApp</a><Link to="/contact">Book</Link></div>
  </>);
}
