import { AnimatePresence, motion } from 'framer-motion';
import Mockup from '../shared/mockup';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { PEOPLES } from './data';

type LayoutComponentProps = {};

const LayoutComponent = ({}: LayoutComponentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
      <Mockup>
        <AnimatePresence>
          {open ? (
            <motion.div
              animate={{ width: 128 }}
              initial={{ width: 176 }}
              exit={{ width: 176 }}
              onClick={() => setOpen((old) => !old)}
              transition={{
                duration: 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              className='absolute left-1/2 top-2 h-10 -translate-x-1/2 rounded-full bg-black p-1'
            />
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {!open ? (
            <motion.div
              animate={{ width: 176 }}
              initial={{ width: 128 }}
              exit={{ width: 128 }}
              transition={{
                duration: 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 10,
              }}
              onClick={() => setOpen((old) => !old)}
              className='absolute left-1/2 top-2 flex h-10 -translate-x-1/2 items-center rounded-full bg-black p-1'
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='flex pl-2 text-xs font-semibold text-white'
              >
                <strong>Checking</strong>
              </motion.div>
              <div className='absolute right-1 z-10 flex items-center -space-x-2'>
                {PEOPLES.slice(0, 3).map((people, index) => (
                  <motion.img
                    key={index}
                    src={`https://api.dicebear.com/9.x/dylan/svg?seed=${people.name}`}
                    alt={people.name}
                    className='h-8 w-8 bg-white object-cover'
                    layoutId={`people-${index}`}
                    style={{
                      borderRadius: 999,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {open ? (
            <div className='mt-16 flex w-full items-center justify-between px-6 py-4'>
              {PEOPLES.slice(0, 3).map((people, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center gap-2'
                >
                  <motion.img
                    src={`https://api.dicebear.com/9.x/dylan/svg?seed=${people.name}`}
                    alt={people.name}
                    className='h-12 w-12 bg-white object-cover'
                    layoutId={`people-${index}`}
                    style={{
                      borderRadius: 999,
                    }}
                  />
                  <motion.span
                    className='text-sm text-white'
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.05 },
                    }}
                  >
                    {people.name.split(' ')[0]}
                  </motion.span>
                </div>
              ))}
              <motion.div
                className='flex flex-col items-center justify-center gap-2'
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05 },
                }}
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white'>
                  <Plus className='text-black' />
                </div>
                <span className='text-sm text-white'>Add</span>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
      </Mockup>
    </div>
  );
};

export default LayoutComponent;
