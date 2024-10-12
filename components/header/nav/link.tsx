import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { slide } from '@/lib/constants';
import Link, { LinkProps } from 'next/link';

type LinkItemProps = LinkProps &
  PropsWithChildren & {
    index: number;
  };

const LinkItem = ({ children, index, ...props }: LinkItemProps) => {
  return (
    <motion.div
      variants={slide}
      custom={index}
      animate={'show'}
      exit={'hide'}
      initial={'initial'}
    >
      <Link {...props}>{children}</Link>
    </motion.div>
  );
};

export default LinkItem;
