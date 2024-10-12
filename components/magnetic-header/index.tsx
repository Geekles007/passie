'use client';

import styles from '@/components/magnetic-header/style.module.scss';
import { cn } from '@/utils';
import { forwardRef, RefObject, useState } from 'react';

type MagneticHeaderProps = {};

// eslint-disable-next-line react/display-name
const MagneticHeader = forwardRef(({}: MagneticHeaderProps, ref) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.header}>
      <div
        ref={ref as RefObject<HTMLDivElement>}
        className={styles.button}
        onClick={() => setActive((old) => !old)}
      >
        <div className={cn(styles.line, active ? styles.active : '')}></div>
        <div className={cn(styles.line, active ? styles.active : '')}></div>
      </div>
    </div>
  );
});

export default MagneticHeader;
