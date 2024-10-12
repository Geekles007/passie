import { Bell } from 'lucide-react';
import { DIState } from '../models/DIState';
import { MotionConfig, motion } from 'framer-motion';
import { animations } from '../lib/animations';

type DynamicIslandProps = {
  state?: DIState;
};

const hideContent = { opacity: 0, scale: 0.5 };

const DynamicIsland = ({ state = 'idle' }: DynamicIslandProps) => {
  return (
    <MotionConfig transition={{ stiffness: 0, damping: 0, mass: 0 }}>
      <motion.div
        animate={animations?.[state as DIState]?.container}
        className='absolute left-1/2 top-2 h-7 w-24 -translate-x-1/2 rounded-3xl bg-black'
      >
        <motion.div
          animate={
            state === 'ring'
              ? animations?.[state as DIState]?.content
              : hideContent
          }
          exit={hideContent}
          className='flex h-full w-full items-center justify-between p-2 text-white'
        >
          <Bell size={15} />
          <span className='text-xs'>Ring</span>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default DynamicIsland;
