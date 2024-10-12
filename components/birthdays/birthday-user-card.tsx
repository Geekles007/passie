import React, { HTMLAttributes } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { People } from './birthday';

type BirthdayUserCardProps = HTMLAttributes<HTMLDivElement> & {
  person: People;
  onClick?: () => void;
};

const BirthdayUserCard = ({
  children,
  className,
  person,
  onClick,
  ...props
}: BirthdayUserCardProps) => {
  const date = new Date(person?.birthday);
  return (
    <motion.div
      layoutId={`userinfo-${person?.name}`}
      className={cn(
        'w-full cursor-pointer rounded-2xl bg-gray-800 p-3',
        className
      )}
      onClick={onClick}
    >
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <motion.div
            layoutId={`avatar-${person?.birthday}-${person?.name}`}
            className='relative -ml-2 mt-1 h-12 w-12 rounded-full border border-solid border-gray-900 bg-white first:ml-0'
          >
            <Image fill alt={``} src={`${person?.avatar}`} />
          </motion.div>
          <div className='flex flex-col'>
            <motion.h2
              layoutId={`username-${person?.birthday}-${person?.name}`}
              className='text-xl font-bold text-white'
            >
              {person?.name}
            </motion.h2>
            <motion.p
              layoutId={`date-${person?.birthday}-${person?.name}`}
              className='text-sm text-gray-400'
            >
              {date?.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
              })}
            </motion.p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <motion.p
            layoutId={`age-${person?.birthday}-${person?.name}`}
            className='text-lg font-bold text-white'
          >
            {person?.age}
          </motion.p>
          <motion.p
            layoutId={`year-${person?.birthday}-${person?.name}`}
            className='text-sm leading-3 text-gray-400'
          >
            Year
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default BirthdayUserCard;
