import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '@/lib/constants';
import Link from 'next/link';
import LinkItem from '@/components/nav/link';
import Curve from '@/components/curve';

type NavProps = {};

const Nav = ({}: NavProps) => {
  const links = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Works',
      link: '/works',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];
  return (
    <motion.div
      variants={menuSlide}
      animate={'show'}
      exit={'hide'}
      initial={'initial'}
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.title}>Navigation</div>
          <div className={styles.links}>
            {links.map((item, index) => (
              <LinkItem index={index} key={`link-${index}`} href={item?.link}>
                {item?.title}
              </LinkItem>
            ))}
          </div>
        </div>
        <div className={styles.socials}>
          <Link href={'/'}>Awwwards</Link>
          <Link href={'/'}>Instagram</Link>
          <Link href={'/'}>Dribbble</Link>
          <Link href={'/'}>LinkedIn</Link>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
