import React from 'react';
import { ourservicesdata } from './ourservices-data';
import Link from 'next/link';

const OurServices = () => {
  return (
    <div className="container lg:mb-44">
      <div className="text-center">
        <p className="font-medium text-[#217BF4]">Our Community</p>
        <h2 className="font-bold">Our Services</h2>
      </div>

      <div className="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-8">
        {ourservicesdata.map((item) => {
          return (
            <div className="rounded-2xl bg-slate-100 p-9">
              <a href={item.href}>
                <img src={item.img} alt="" />
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-[#656464]">{item.des}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
