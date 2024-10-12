import React from 'react';
import { useMousePosition } from './useMousePosition';
import { motion } from 'framer-motion';

const MaskMessage = () => {
  const { x, y } = useMousePosition();
  const [hovered, setHovered] = React.useState(false);
  const size = hovered ? 400 : 40;

  return (
    <div className='h-screen bg-black'>
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
        className='mask absolute flex h-full w-full cursor-default items-center justify-center text-pink-100'
      >
        <p
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className='max-w-screen-lg text-[64px] font-bold leading-[66px]'
        >
          Would you marry me 💍 and spend the rest of your life with me. You are
          all I need.
        </p>
      </motion.div>

      <div className='main flex h-full w-full cursor-default items-center justify-center text-pink-100'>
        <p className='max-w-screen-lg text-[64px] font-bold leading-[66px]'>
          I love you sweetie 💕 I can't imagine my life without you. You are my
          sunshine ☀️
        </p>
      </div>
    </div>
  );
};

export default MaskMessage;
