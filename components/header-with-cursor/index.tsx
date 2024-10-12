import { headers } from '@/lib/constants';
import { motion } from 'framer-motion';
import { RefObject, forwardRef, useRef, useState } from 'react';

interface IPosition {
  left?: number;
  width: number;
  opacity: number;
}

interface HeaderWithCursorProps {}

const HeaderWithCursor = forwardRef(({}: HeaderWithCursorProps, ref) => {
  const [position, setPosition] = useState<IPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      ref={ref as RefObject<HTMLUListElement>}
      onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
      className='relative mx-auto mt-4 flex w-fit rounded-full border-2 border-black bg-white p-1'
    >
      {headers.map((header) => (
        <HeaderItem
          setCursorPosition={setPosition}
          key={header.title}
          title={header.title}
        />
      ))}
      <Cursor position={position} />
    </ul>
  );
});

export default HeaderWithCursor;

const HeaderItem = ({
  title,
  setCursorPosition,
}: {
  title: string;
  setCursorPosition: (a: any) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseOver={(e) => {
        const width = ref?.current?.getBoundingClientRect().width;
        setCursorPosition({
          left: ref?.current?.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className='z-10 block cursor-pointer rounded-full p-2 px-4 text-xs uppercase text-white mix-blend-difference'
    >
      {title}
    </li>
  );
};

const Cursor = ({ position }: any) => {
  return (
    <motion.li
      animate={position}
      className='absolute z-0 h-8  rounded-full bg-black'
    />
  );
};
