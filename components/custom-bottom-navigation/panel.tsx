import { AnimatePresence, motion } from 'framer-motion';
import { Link, X } from 'lucide-react';
import { forwardRef } from 'react';
import Tag from './tag';
import { LINK_LIST } from '@/lib/constants';

type PanelProps = {
  open: boolean;
  onClose: () => void;
};

const animation = {
  initial: { opacity: 0, y: 35, filter: 'blur(10px)' },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.3,
      delay: 0.4 + 0.05 * custom,
    },
  }),
  hide: {
    opacity: 0,
    y: 35,
    filter: 'blur(10px)',
    transition: {
      duration: 0.3,
    },
  },
};

const Panel = forwardRef<any, PanelProps>(({ open, onClose }, ref: any) => {
  return (
    <>
      {open && (
        <div className='fixed inset-0 z-20 flex h-screen w-screen items-end justify-center'>
          <div className='flex w-full justify-center max-sm:px-2'>
            <AnimatePresence>
              <motion.div
                ref={ref}
                style={{
                  borderRadius: 30,
                }}
                transition={{ delay: 0.3, ease: [0.37, 0, 0.63, 1] }}
                className='relative mb-2 flex h-auto w-96 flex-col items-start justify-start bg-black p-4 pb-8'
                layoutId='menu'
              >
                {/* <motion.a
                  layoutId={'add'}
                  href='#'
                  onClick={onClose}
                  className='absolute right-4 top-4'
                >
                  <X color='#fff' />
                </motion.a> */}
                <motion.input
                  type='text'
                  autoFocus
                  variants={animation}
                  initial='initial'
                  animate='show'
                  exit='hide'
                  custom={0}
                  placeholder='What do you need?'
                  className='w-full border-x-0 border-b border-t-0 border-solid border-gray-500 bg-transparent p-2 text-white outline-none placeholder:text-gray-500'
                />
                <div className='links mt-3 flex w-full flex-col gap-5'>
                  <AnimatePresence>
                    {LINK_LIST?.map(({ group, links }, index) => (
                      <motion.div
                        variants={animation}
                        custom={index + 1}
                        animate={'show'}
                        exit={'hide'}
                        initial={'initial'}
                        className='group'
                        key={group}
                      >
                        <div className='text-xs font-light text-gray-400'>
                          {group}
                        </div>
                        <div className='mt-2 flex flex-col gap-4'>
                          {links?.map(({ title, href }, index) => (
                            <motion.a
                              href={href}
                              key={`${title}${index}`}
                              // variants={animation}
                              // custom={index + 1}
                              // animate={'show'}
                              // exit={'hide'}
                              // initial={'initial'}
                              className='flex items-center gap-3 text-sm text-gray-300'
                            >
                              <Link size={12} />
                              <span className='font-extralight'>{title}</span>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
});

export default Panel;
