import React from 'react';
import { companiesdata } from './companiesdata';
import Link from 'next/link';

const Companies = () => {
  return (
    <div className="container mt-28">
      <div className="text-center">
        <p className="font-medium text-[#217BF4]">Our Company</p>
        <h2 className="font-bold">Companies We Represent</h2>
      </div>

      <div className="mt-8 grid gap-4 lg:mt-20 lg:grid-cols-2 lg:gap-8">
        {companiesdata.map((item) => {
          return (
            <div className=" flex  items-center justify-center rounded-2xl border border-gray-300 p-4 lg:p-9">
              <div className="lg:w-max">
                <img src={item.img} alt="" />
                <p className="text-center text-[#656464]">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-6 flex justify-center lg:my-20">
        <Link href="/companies">
          <button className="rounded-xl bg-slate-200 px-8 py-2 text-center text-[#217BF4] lg:py-4  lg:font-semibold">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Companies;
