import Hero from '../sections/Hero';
import Wisdom from '../sections/Wisdom';
import MenuList from '../sections/MenuList';
import Tranquility from '../sections/Tranquility';
import Treats from '../sections/Treats';
import Insta from '../sections/Insta';
import { usePageTitle } from '../utils';

export default function Home() {
  usePageTitle();
  return <><Hero /><Wisdom /><MenuList /><Tranquility /><Treats /><Insta /></>;
}
