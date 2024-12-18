import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from '../navdata';
import clsx from 'clsx';

const DasktopNavbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div>
        <nav className="container my-2 hidden lg:block">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link className="flex items-center font-bold" href="/">
                <img
                  width={70}
                  src="https://res.cloudinary.com/softenin/image/upload/v1734505354/oscar/WhatsApp_Image_2024-12-16_at_11.46.49_PM_itgps9.png"
                  alt="Brand Logo"
                />
                <h2>OSCAR ENTERPRISE</h2>
              </Link>
            </div>

            <div className="flex items-center gap-10 text-[#656464]  ">
              {links.map((link) => {
                return (
                  <Link
                    className={clsx(
                      'hover:text-black',
                      link.id == 4 &&
                        'rounded-xl bg-[#217BF4] px-9 py-4 text-white '
                    )}
                    key={link.id}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DasktopNavbar;
