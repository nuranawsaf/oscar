import * as React from 'react';
import { useRef } from 'react';

import Link from 'next/link';

import { motion, useCycle } from 'framer-motion';

import { useDimensions } from '../../../../utils/useDimensions';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(25px at 750px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 50,
    },
  },
};

const MobileNavbar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className="block px-4 py-3 lg:hidden">
      <div className="wrapper">
        {/* LOGO */}
        <Link href="/">
          <div className="flex w-max cursor-pointer items-center gap-x-1">
            <img
              width={50}
              src="https://res.cloudinary.com/softenin/image/upload/v1734505354/oscar/WhatsApp_Image_2024-12-16_at_11.46.49_PM_itgps9.png"
              alt="Brand Logo"
            />
            <h2 className="font-semibold">Oscar Enterprise</h2>
          </div>
        </Link>

        <motion.div
          className="absolute top-0 right-0 bottom-0 z-20"
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar}>
            <Navigation toggle={() => toggleOpen()} />
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
