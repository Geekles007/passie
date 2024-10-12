import { cn } from '@/utils';
import { motion } from 'framer-motion';
import React from 'react';

type LayoutSwitchProps = {
  onChange: (value: boolean) => void;
  isSwitched: boolean;
};

const LayoutSwitch = ({ onChange, isSwitched }: LayoutSwitchProps) => {
  return (
    <motion.button
      className='grid grid-cols-3 gap-1 overflow-hidden'
      whileTap={{ scale: 0.9 }}
      onClick={() => onChange(!isSwitched)}
    >
      <div className='h-1 w-1 rounded-full bg-gray-100'></div>
      <div className='h-1 w-1 rounded-full bg-gray-100'></div>
      <div className='h-1 w-1 rounded-full bg-gray-100'></div>
      <div className='h-1 w-1 rounded-full bg-gray-100'></div>
      <motion.div
        layout
        className={cn(
          'h-1 rounded-full bg-gray-100',
          isSwitched && 'col-span-2 '
        )}
      ></motion.div>
      <motion.div
        layout
        className={cn(
          'h-1 w-1 rounded-full bg-gray-100',
          isSwitched && 'hidden opacity-0'
        )}
      ></motion.div>
      <div className='h-1 w-1 rounded-full bg-gray-100'></div>
      <motion.div
        layout
        className={cn(
          'h-1 rounded-full bg-gray-100',
          isSwitched && 'col-span-2 '
        )}
      ></motion.div>
      <motion.div
        layout
        className={cn(
          'h-1 w-1 rounded-full bg-gray-100',
          isSwitched && 'hidden opacity-0'
        )}
      ></motion.div>
    </motion.button>
  );
};

export default LayoutSwitch;
