import { BIRTHDAYS } from '@/lib/constants';
import { cn } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import StackAvatars from './stack-avatars';

type GridViewProps = {
  chosen: number;
  setChosen: (chosen: number) => void;
};

const GridView = ({ chosen, setChosen }: GridViewProps) => {
  return (
    <AnimatePresence>
      <div className={cn('grid grid-cols-3 gap-4')}>
        {BIRTHDAYS.map((item, index) => {
          return (
            <motion.div
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 24,
              }}
              layoutId={'birthday-' + item?.month}
              key={'birthday-' + item?.month}
              onClick={() => {
                setChosen(index);
              }}
              className='flex cursor-pointer flex-col'
            >
              <div className='flex items-center gap-2'>
                {chosen === index && (
                  <div className='h-1 w-1 rounded-full bg-blue-500' />
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
    </AnimatePresence>
  );
};

export default GridView;
