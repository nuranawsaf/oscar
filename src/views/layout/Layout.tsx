import React from 'react';

import dynamic from 'next/dynamic';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const ToggleButton = dynamic(
  () => import('../shared/ToggleButton/ToggleButton'),
  {
    ssr: false,
  }
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <div className=" absolute top-6  right-8">
        {/*
          The following props can be passed: light, dark, size, tooltip, darkIcon & lightIcon 
          Note: For customizing darkIcons and lightIcons, you should use react-icons
          */}
        {/* <ToggleButton tooltip /> */}
      </div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
