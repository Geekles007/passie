import { cn } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { button } from 'leva';
import { PropsWithChildren, memo, useState } from 'react';

const animation = {
  initial: {
    y: -10,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

interface ValuesFlipperProps {
  // Add props here
}

type TSelected = 'monthly' | 'yearly';

const ValuesFlipper = ({}: ValuesFlipperProps) => {
  const [selected, setSelected] = useState<TSelected>('monthly');

  return (
    <div className='flex flex-col gap-3'>
      <Switcher<TSelected>
        onSelect={setSelected}
        selected={selected}
        list={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'yearly', label: 'Yearly' },
        ]}
      />
      <div className='flex items-center text-xs text-black'>
        <div className='flex items-center font-semibold'>
          <span>$</span>
          <div className='flex h-4 flex-col overflow-hidden'>
            <AnimatePresence>
              <motion.div
                variants={animation}
                initial='initial'
                animate='show'
                exit='hide'
                key={selected}
                className={`transition duration-300`}
              >
                {selected === 'monthly' ? '5.45' : '3.45'}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <span>/month</span>
      </div>
    </div>
  );
};

export default memo(ValuesFlipper);

type SwitcherProps<T> = {
  selected: T;
  onSelect?: (value: T) => void;
  list?: { value: T; label: string }[];
};

const Switcher = <V,>({ selected, onSelect, list }: SwitcherProps<V>) => {
  return (
    <div className='w-fit rounded-full bg-gray-100 p-1'>
      {list?.map(({ value, label }, index) => (
        <SwitcherOption
          onSelect={onSelect}
          key={`${value}${index}`}
          active={selected === value}
          value={value}
        >
          {label}
        </SwitcherOption>
      ))}
    </div>
  );
};

type SwitcherOptionProps<T> = PropsWithChildren & {
  active?: boolean;
  value: T;
  onSelect?: (option: T) => void;
};

const SwitcherOption = <V,>({
  children,
  active = false,
  value,
  onSelect,
}: SwitcherOptionProps<V>) => {
  return (
    <button
      onClick={() => onSelect?.(value)}
      className={cn('w-32 rounded-full px-4 py-1', active && 'bg-white')}
    >
      {children}
    </button>
  );
};
