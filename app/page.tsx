'use client';

import { useRef } from 'react';
import MaskMessage from '@/components/mask-message';

export default function Home() {
  const stickyRef = useRef<HTMLDivElement>(null);

  return (
    <main className={'h-screen w-screen'}>
      {/* <Scene /> */}
      {/* <MagneticHeader ref={stickyRef} /> */}
      {/* <StickyCursor stickyElement={stickyRef} /> */}
      {/* <HeaderWithCursor ref={stickyRef} /> */}
      {/* <ValuesFlipper /> */}
      {/* <TestButton /> */}
      {/* <MobilePlayground /> */}
      {/* <LayoutComponent /> */}
      {/* <CustomBottomNavigation items={NAV_ITEMS} /> */}
      {/* <div className='flex h-full w-full items-center justify-center bg-black'>
        <Birthdays />
      </div> */}
      {/* <div className='flex h-full items-center justify-center'>
        <SwipeToRedirect />
      </div> */}
      <MaskMessage />
    </main>
  );
}
