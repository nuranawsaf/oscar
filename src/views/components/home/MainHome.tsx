import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Companies from './companies/Companies';
import OurServices from './our-services/OurServices';

const MainHome = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <OurServices />
      <Companies />
    </div>
  );
};

export default MainHome;
