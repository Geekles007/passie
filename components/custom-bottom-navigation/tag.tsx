import React, { PropsWithChildren } from 'react';

type TagProps = PropsWithChildren & {};

const Tag = ({ children }: TagProps) => {
  return (
    <div className='isolate rounded-xl  border border-solid border-gray-600 bg-white/20 px-2 py-0  shadow-lg ring-1 ring-black/5'>
      <span className='text-[10px] font-light text-gray-300'>{children}</span>
    </div>
  );
};

export default Tag;
