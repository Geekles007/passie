'use client';

import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { cn } from '@/utils';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import useOutsideClick from '@/components/header/hooks/use-outside-click';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setActive(false);
  });

  return (
    <>
      <div className={styles.button} onClick={() => setActive((old) => !old)}>
        <div className={cn(styles.line, active ? styles.active : '')}></div>
        <div className={cn(styles.line, active ? styles.active : '')}></div>
      </div>
      <AnimatePresence mode={'wait'}>
        {active && <Nav ref={ref} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
