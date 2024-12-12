import React from 'react';
import { ourservicesdata } from './ourservices-data';

const OurServices = () => {
  return (
    <div className="container">
      <div className="text-center">
        <p className="font-medium text-[#217BF4]">Our Community</p>
        <h2 className="font-bold">Our Services</h2>
      </div>

      <div className="mt-20 grid lg:grid-cols-3 lg:gap-8">
        {ourservicesdata.map((item) => {
          return (
            <div className="rounded-2xl bg-slate-100 p-9">
              <img src={item.img} alt="" />
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-[#656464]">{item.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
