import React from 'react';
import { servicesdata } from './servicesdata';
import Link from 'next/link';

const Services = () => {
  return (
    <div className="container">
      <div className="mt-20 mb-32 grid lg:grid-cols-3 lg:gap-8">
        {servicesdata.map((item, index) => {
          return (
            <div className="rounded-2xl bg-slate-100 p-9">
              <Link href={item.href}>
                <img src={item.img} alt="" />
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-[#656464]">{item.des}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
