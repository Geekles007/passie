import { motion, useSpring, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Swiper = () => {
  const x = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });
  const rotate = useTransform(x, [0, 0], [100, 90]);
  const width = useTransform(x, [0, 250], [0, 250]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (x.get() > 50) {
      setOpen(true);
    }
  }, [x]);

  return (
    <>
      <div className='h-22 absolute bottom-0 w-full rounded-[44px] bg-white p-4'>
        <div className='relative h-14 w-full overflow-hidden rounded-[40px] bg-teal-100'>
          <motion.div
            style={{ width }}
            className='absolute left-0 z-10 h-14 w-14 rounded-full bg-teal-600'
          ></motion.div>
          <motion.button
            drag='x'
            style={{ x }}
            dragConstraints={{ left: 193, right: 0 }}
            layoutId='overlay'
            className='absolute z-20 flex h-14 w-14 cursor-grab items-center justify-center rounded-[40px] bg-teal-600'
          >
            <ChevronRight
              style={{ transform: `rotate(${rotate}deg)` }}
              color='#fff'
            />
          </motion.button>
        </div>
      </div>

      {open && (
        <motion.div
          layout
          layoutId='overlay'
          className='absolute inset-0 z-50 h-full w-full bg-teal-600'
        ></motion.div>
      )}
    </>
  );
};

export default Swiper;
