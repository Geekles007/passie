import styles from './style.module.scss';
import { motion } from 'framer-motion';

type CurveProps = {};

const Curve = ({}: CurveProps) => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const animation = {
    initial: {
      d: initialPath,
    },
    show: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    hide: {
      d: initialPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className={styles.curving}>
      <motion.path
        variants={animation}
        animate={'show'}
        exit={'hide'}
        initial={'initial'}
      ></motion.path>
    </svg>
  );
};

export default Curve;
