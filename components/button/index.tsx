import { cn } from '@/utils';
import { Variants, motion } from 'framer-motion';
import { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  errorMessage?: ReactNode | string;
  error?: boolean;
  successMessage?: ReactNode | string;
  success?: boolean;
  loading?: boolean;
  loadingMessage?: ReactNode | string;
};

const animation = {
  initial: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  hide: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const Button = ({
  href,
  children,
  className,
  success,
  loadingMessage = 'Chargement...',
  successMessage = 'Enregistrement reussi',
  errorMessage = 'Enregistrement échoué',
  error,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <a
      className={cn(
        'relative flex cursor-pointer flex-col overflow-hidden rounded-md bg-gray-100 px-10 py-2 text-sm transition duration-300 hover:bg-gray-200',
        className
      )}
      href={href}
      {...props}
    >
      {loading && (
        <CustomSpan
          variants={animation}
          animate={'show'}
          initial='initial'
          exit={'hide'}
          className={cn(``)}
        >
          {loadingMessage}
        </CustomSpan>
      )}
      {!loading && success && (
        <CustomSpan
          variants={animation}
          animate={'show'}
          initial='initial'
          exit={'hide'}
          className={cn(``)}
        >
          {successMessage}
        </CustomSpan>
      )}
      {!loading && error && (
        <CustomSpan
          variants={animation}
          animate={'show'}
          initial='initial'
          exit={'hide'}
          className={cn(``)}
        >
          {errorMessage}
        </CustomSpan>
      )}
      {!loading && !success && !error && children && (
        <CustomSpan
          variants={animation}
          animate={'show'}
          initial='initial'
          exit={'hide'}
          className={cn(``)}
        >
          {children}
        </CustomSpan>
      )}
    </a>
  );
};

export default Button;

type CustomSpanProps = HTMLAttributes<HTMLSpanElement> & {
  animate?: string;
  exit?: string;
  initial?: string;
  variants?: Variants;
};

const CustomSpan = ({
  children,
  animate,
  exit,
  initial,
  variants,
  className,
}: CustomSpanProps) => {
  return (
    <motion.span
      variants={variants}
      animate={animate}
      initial={initial}
      exit={exit}
      className={cn(``, className)}
    >
      {children}
    </motion.span>
  );
};
