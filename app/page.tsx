'use client';

import MagneticHeader from '@/components/magnetic-header';
import StickyCursor from '@/components/magnetic-header/sticky-cursor';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import HeaderWithCursor from '@/components/header-with-cursor';
import ValuesFlipper from '@/components/values-flipper';
import Button from '@/components/button';
import TestButton from '@/components/test-button';
import MobilePlayground from '@/components/mobile-playground';
import LayoutComponent from '@/components/layout-component';
import CustomBottomNavigation from '@/components/custom-bottom-navigation';
import { NAV_ITEMS } from '@/lib/constants';
import SwipeToRedirect from '@/components/swipe-to-redirect';
import MaskMessage from '@/components/mask-message';

const Scene = dynamic(() => import('@/components/3d-donut-banner/scene'), {
  ssr: false,
});

const Birthdays = dynamic(() => import('@/components/birthdays'), {
  ssr: false,
});

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
