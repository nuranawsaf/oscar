import React from 'react';
import { companiesdata } from './companiesdata';

const Companies = () => {
  return (
    <div className="container mt-28">
      <div className="text-center">
        <p className="font-medium text-[#217BF4]">Our Company</p>
        <h2 className="font-bold">Companies We Represent</h2>
      </div>

      <div className=" mt-20 grid lg:grid-cols-2 lg:gap-8">
        {companiesdata.map((item) => {
          return (
            <div className=" flex  items-center justify-center rounded-2xl border border-gray-300  p-9">
              <div className="w-max">
                <img src={item.img} alt="" />
                <p className="text-center text-[#656464]">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-20 flex justify-center">
        <button className="rounded-xl bg-slate-200 py-4 px-8 text-center font-semibold  text-[#217BF4]">
          See More
        </button>
      </div>
    </div>
  );
};

export default Companies;
