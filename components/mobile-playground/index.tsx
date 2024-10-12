import { useState } from 'react';
import DynamicIsland from './components/dynamic-island';
import Mockup from '../shared/mockup';
import { DIState } from './models/DIState';
import { motion } from 'framer-motion';
import { cn } from '@/utils';
const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

const MobilePlayground = () => {
  const [state, setState] = useState<DIState>('idle');
  const [layout, setLayout] = useState(false);

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
      <Mockup>
        <DynamicIsland state={state} />
      </Mockup>
      <motion.div
        layout
        transition={spring}
        className={cn(
          'flex flex-row items-center gap-4 transition-all duration-300',
          layout ? 'flex-col' : 'flex-row'
        )}
      >
        <a onClick={() => setState('idle')}>idle</a>
        <a onClick={() => setState('ring')}>ring</a>
        <a onClick={() => setState('timer')}>timer</a>
        <a onClick={() => setState('listening')}>listening</a>
      </motion.div>
      <a onClick={() => setLayout((old) => !old)}>change</a>
    </div>
  );
};

export default MobilePlayground;
