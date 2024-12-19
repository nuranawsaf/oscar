import * as React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { links } from '../navdata';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggle }: { toggle: any }) => {
  return (
    <motion.ul
      className="absolute top-0 right-0 z-30 h-full w-screen bg-white px-4 md:w-full"
      variants={variants}
    >
      <Link href="/">
        <div className="flex w-max cursor-pointer items-center gap-x-1 py-4">
          <img
            width={50}
            src="https://res.cloudinary.com/softenin/image/upload/v1734505354/oscar/WhatsApp_Image_2024-12-16_at_11.46.49_PM_itgps9.png"
            alt="Brand Logo"
          />
          <h2 className="font-semibold">Oscar Enterprise</h2>
        </div>
      </Link>

      <div className=" mt-12">
        {links.map((link) => (
          <MenuItem toggle={toggle} link={link} key={link.id} />
        ))}
      </div>
    </motion.ul>
  );
};

export default Navigation;
