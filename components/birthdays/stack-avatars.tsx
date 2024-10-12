'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { People } from './birthday';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { randomIntFromInterval } from './helpers';
import { colors } from '@/lib/constants';

type StackAvatarsProps = {
  people: People[];
};

const StackAvatars = ({ people = [] }: StackAvatarsProps) => {
  const peopleList = [...people];
  const listToDisplay = peopleList?.splice(0, 3);

  return (
    <div className='flex items-center'>
      {listToDisplay.map((person, index) => {
        const color = colors[randomIntFromInterval(0, 10)];
        return (
          <motion.div
            key={`person-avatar-${person?.birthday}-${person?.name}`}
            style={{ backgroundColor: `${color}` }}
            className={cn(
              'relative -ml-2 mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-solid border-gray-900 first:ml-0'
            )}
          >
            <Image alt={``} height={30} width={30} src={`${person?.avatar}`} />
          </motion.div>
        );
      })}
      {peopleList.length > 0 && (
        <div className='relative -ml-2 mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-solid border-gray-900 bg-gray-800 first:ml-0'>
          <span className='text-[10px] text-white'>{`+${peopleList?.length}`}</span>
        </div>
      )}
    </div>
  );
};

export default memo(StackAvatars);
