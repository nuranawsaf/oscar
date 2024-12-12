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
              <Link href="/">
                <img
                  src="https://res.cloudinary.com/softenin/image/upload/v1734029272/oscar/main-logo_yrejjk.png"
                  alt="Brand Logo"
                />
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
