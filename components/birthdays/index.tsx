import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import LayoutSwitch from './layout-switch';
import StackAvatars from './stack-avatars';
import BirthdayUserCard from './birthday-user-card';
import { cn } from '@/utils';
import useMeasure from 'react-use-measure';
import Modal from './modal';
import { BIRTHDAYS } from '@/lib/constants';
import { People } from './birthday';
import GridView from './grid-view';
import gsap from 'gsap';

const Birthdays = () => {
  const [isSwitched, setIsSwitched] = React.useState(false);
  const [selected, setSelected] = React.useState<People | null>(null);
  const [chosen, setChosen] = React.useState(0);
  const [ref, bounds] = useMeasure();
  const [avatarRef, avatarBounds] = useMeasure();

  return (
    <motion.div
      animate={{ height: bounds.height }}
      className='relative w-full max-w-[450px] overflow-hidden rounded-2xl border border-solid border-gray-800 bg-gray-900'
    >
      <div className='relative p-6' ref={ref}>
        <div className='flex w-full items-center justify-between'>
          <motion.h2
            layout
            key={isSwitched?.toString()}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: 50 }}
            className='text-2xl text-white'
          >
            {!isSwitched ? 'Birthdays' : new Date().getFullYear()}
          </motion.h2>
          <LayoutSwitch onChange={setIsSwitched} isSwitched={isSwitched} />
        </div>
        <div className='relative mt-6 w-full'>
          {!isSwitched && (
            <>
              <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-7 bg-gradient-to-r from-gray-900 to-transparent' />
              <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-7 bg-gradient-to-l from-gray-900 to-transparent' />
            </>
          )}
          <AnimatePresence mode='wait'>
            <motion.div
              layout
              exit={{
                height: avatarBounds.height,
                transition: { ease: [0.64, 0, 0.78, 0] },
              }}
              // initial={{
              //   height: avatarBounds?.height,
              // }}
              className={cn(
                'scrolling relative w-full overflow-y-visible',
                !isSwitched && 'overflow-x-scroll'
              )}
            >
              {!isSwitched && (
                <div ref={avatarRef} className={cn('grid grid-flow-col gap-4')}>
                  {BIRTHDAYS.map((item, index) => {
                    return (
                      <motion.div
                        transition={{
                          type: 'spring',
                          stiffness: 240,
                          damping: 24,
                        }}
                        key={'birthday-' + item?.month}
                        id={'birthday-' + item?.month}
                        layoutId={'birthday-' + item?.month}
                        onClick={() => {
                          setChosen(index);
                        }}
                        className='flex cursor-pointer flex-col'
                      >
                        <div className='flex items-center gap-2'>
                          {chosen === index && (
                            <motion.div
                              animate={{ opacity: 1 }}
                              initial={{ opacity: 0 }}
                              exit={{ opacity: 0 }}
                              className='h-1 w-1 rounded-full bg-blue-500'
                            />
                          )}
                          <span className='text-[10px] text-gray-400'>
                            {item?.month?.substring(0, 3)?.toUpperCase()}
                          </span>
                        </div>

                        <StackAvatars people={item?.people} />
                      </motion.div>
                    );
                  })}
                </div>
              )}
              {isSwitched && <GridView chosen={chosen} setChosen={setChosen} />}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode='popLayout'>
          {!isSwitched && (
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              exit={{
                y: 50,
                opacity: 0,
              }}
              initial={{
                y: 50,
                opacity: 0,
              }}
              className='mt-8 flex flex-col'
            >
              <span className='text-[10px] text-gray-400'>UPCOMING</span>
              <div className='mt-2 flex flex-col gap-2'>
                {BIRTHDAYS?.[chosen]?.people?.map((person, index) => {
                  return (
                    <BirthdayUserCard
                      person={person}
                      key={`person-${index}`}
                      onClick={() => setSelected(person)}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {selected && (
            <Modal onClose={() => setSelected(null)} selected={selected} />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Birthdays;
