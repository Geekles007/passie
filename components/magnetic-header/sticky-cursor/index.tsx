'use client';

import styles from './style.module.scss';
import { RefObject, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type StickyCursorProps = {
  stickyElement: RefObject<HTMLDivElement>;
};

const StickyCursor = ({ stickyElement }: StickyCursorProps) => {
  const [hovered, setHovered] = useState(false);

  const cursorSize = hovered ? 60 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { stiffness: 300, damping: 20, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      stickyElement.current!.getBoundingClientRect();

    const center = { x: left + width / 2, y: top + height / 2 };
    if (hovered) {
      mouse.x.set(center.x - cursorSize / 2);
      mouse.y.set(center.y - cursorSize / 2);
    } else {
      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);
    }
  };

  const onMouseHovering = (e: MouseEvent) => {
    setHovered(true);
  };

  const onMouseLeaving = (e: MouseEvent) => {
    setHovered(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    stickyElement.current?.addEventListener('mouseover', onMouseHovering);
    stickyElement.current?.addEventListener('mouseleave', onMouseLeaving);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      stickyElement.current?.removeEventListener('mouseover', onMouseHovering);
      stickyElement.current?.removeEventListener('mouseleave', onMouseLeaving);
    };
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
    ></motion.div>
  );
};

export default StickyCursor;
