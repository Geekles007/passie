import {
  AnimatePresence,
  MotionConfig,
  motion,
  useSpring,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { People } from './birthday';
import useOutsideClick from '../header/hooks/use-outside-click';

type ModalProps = {
  selected: People;
  onClose?: () => void;
};

const giftAnim = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const animation = {
  initial: {
    height: 0,
  },
  show: {
    height: 'auto',
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Modal = ({ selected: person, onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const date = new Date(person?.birthday);
  const y = useSpring(0, { stiffness: 200, damping: 20, mass: 0.5 });

  useOutsideClick(ref, () => {
    onClose?.();
  });

  useEffect(() => {
    y.onChange(() => {
      if (y.get() > 30) {
        onClose?.();
      }
    });
  }, [y]);

  return (
    <div className='absolute inset-x-0 bottom-0 z-50 '>
      <motion.div
        className='rounded-2xl bg-gray-800'
        ref={ref}
        style={{ y }}
        layoutId={`userinfo-${person?.name}`}
      >
        <div className='flex w-full justify-center'>
          <motion.div
            dragConstraints={{ bottom: 0, top: 0 }}
            dragElastic={0.1}
            className='mt-4 h-1.5 w-12 cursor-grab rounded-full bg-gray-500 aria-pressed:cursor-grabbing'
            drag='y'
          />
        </div>
        <div className='h-[370px] p-6'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-2'>
              <motion.div
                layoutId={`avatar-${person?.birthday}-${person?.name}`}
                className='relative -ml-2 mt-1 h-16 w-16 rounded-full border border-solid border-gray-900 bg-white first:ml-0'
              >
                <Image fill alt={``} src={`${person?.avatar}`} />
              </motion.div>
              <div className=' mt-2 flex flex-col justify-start'>
                <motion.h2
                  className='text-2xl font-bold text-white'
                  layoutId={`userName-${person?.birthday}-${person?.name}`}
                >
                  {person?.name}
                </motion.h2>
                <div className='flex items-center gap-2'>
                  <motion.p
                    layoutId={`date-${person?.birthday}-${person?.name}`}
                    className='text-md text-gray-400'
                  >
                    {date?.toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'long',
                    })}
                  </motion.p>
                  <div className='h-0.5 w-0.5 rounded-full bg-gray-600' />
                  <p className='text-md text-gray-600'>in 13 days</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <motion.p
                layoutId={`age-${person?.birthday}-${person?.name}`}
                className='text-2xl font-bold text-white'
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
          <AnimatePresence mode='popLayout'>
            <motion.div
              variants={giftAnim}
              initial='initial'
              animate='show'
              exit='hide'
              className='mt-6 flex flex-col gap-6'
            >
              <span className='text-[10px] text-gray-400'>GIFT IDEAS</span>
              <div className='flex flex-col gap-2'>
                {person?.gifts?.map((gift) => (
                  <div
                    key={`gift-${gift?.name}`}
                    className='mb-4 flex items-center'
                  >
                    <input
                      id='disabled-checkbox'
                      type='checkbox'
                      value=''
                      className='h-6 w-6 rounded-2xl border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
                    />
                    <label
                      htmlFor='disabled-checkbox'
                      className='ms-2 flex w-full justify-between text-xl font-medium text-gray-400 dark:text-gray-500'
                    >
                      <div className='flex items-center gap-2'>
                        <strong className='text-gray-200'>{gift?.name}</strong>
                        {/* <div className='h-1 w-1 rounded-full bg-gray-500' />
                        <span className='text-gray-500'></span> */}
                      </div>
                      <strong className='text-gray-200'>${gift?.price}</strong>
                    </label>
                  </div>
                ))}
                <button className='flex items-center justify-between text-gray-500'>
                  <span className='text-lg '>Add new item</span>
                  <Plus />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
