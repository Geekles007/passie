import { delay } from 'framer-motion';
import { DIState } from '../models/DIState';

export const animations: {
  [key in DIState]?: {
    container?: any;
    content?: any;
  };
} = {
  idle: {
    container: {
      height: '28px',
      width: '96px',
    },
    content: {
      scale: 1,
      opacity: 1,
    },
  },
  ring: {
    container: {
      height: '28px',
      width: '128px',
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    content: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  timer: {
    container: {
      height: '50px',
      width: '200px',
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    content: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
  listening: {
    container: {
      height: '100px',
      width: '230px',
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    content: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  },
};
