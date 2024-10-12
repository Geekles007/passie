import { AnimatePresence, MotionConfig, delay, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import useOutsideClick from '../header/hooks/use-outside-click';
import Panel from './panel';

type CustomBottomNavigationProps = {
  items: any[];
};

const iconAnimate = {
  initial: { y: 35, opacity: 0, filter: 'blur(10px)' },
  show: (custom: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.2,
      delay: 0.3 + 0.05 * custom,
    },
  }),
  exit: (custom: number) => ({
    y: 35,
    opacity: 0,
    transform: 'blur(10px)',
    transition: {
      duration: 0.2,
      delay: 0.05 * custom,
    },
  }),
};

const animation = {
  initial: { opacity: 0, width: 0 },
  show: {
    opacity: 1,
    width: 'auto',
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
    width: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const CustomBottomNavigation = ({ items }: CustomBottomNavigationProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  return (
    <MotionConfig>
      <AnimatePresence>
        <div className='fixed bottom-2 left-0 flex w-full justify-center'>
          <motion.div
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRadius: '30px',
            }}
            layoutId='menu'
            variants={animation}
            initial='initial'
            animate='show'
            exit='hide'
            transition={{
              duration: 0.5,
              type: 'spring',
              bounce: 0.2,
            }}
            layout
            className=' mx-auto flex h-10 w-52 max-w-[220px] items-center gap-2 bg-black px-1 shadow-sm'
          >
            <AnimatePresence>
              {items.map((item, index) => (
                <motion.a
                  variants={iconAnimate}
                  initial='initial'
                  animate={!open ? 'show' : ''}
                  custom={index}
                  onClick={() => {
                    if (item?.key === 'add') {
                      setOpen(true);
                    }
                  }}
                  onMouseOver={() => setHovered(index)}
                  className='flex h-8 w-8 items-center justify-center rounded-full text-white  '
                  key={index}
                >
                  {hovered === index ? (
                    <motion.div
                      layoutId='map'
                      initial={{ scale: 0.7 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        bounce: 0,
                      }}
                      whileTap={{ scale: 0.9 }}
                      className='absolute h-8 w-8 rounded-full bg-white/[.2]'
                    />
                  ) : null}
                  {hovered === index && (
                    <motion.div
                      layoutId='tooltip'
                      className='absolute bottom-12 rounded-full bg-black p-1 px-2 text-xs text-white'
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 0.2, delay: 0.1 },
                        }}
                      >
                        {item?.title}
                      </motion.span>
                    </motion.div>
                  )}
                  <motion.span layoutId={item?.key}>{item?.icon}</motion.span>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {open && <Panel onClose={() => setOpen(false)} open={open} ref={ref} />}
      </AnimatePresence>
    </MotionConfig>
  );
};

export default CustomBottomNavigation;
