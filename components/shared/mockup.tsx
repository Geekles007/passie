import { PropsWithChildren } from 'react';

type MockupProps = PropsWithChildren & {};

const Mockup = ({ children }: MockupProps) => {
  return (
    <div className='relative h-[600px] w-[300px] rounded-[50px] bg-gray-500'>
      <div className='absolute inset-[3px] rounded-[48px] bg-black'>
        <div className='absolute inset-[6px] overflow-hidden rounded-[44px] bg-gray-100'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Mockup;
