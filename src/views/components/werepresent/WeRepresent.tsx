import React from 'react';
import { werepresentdata } from './werepresent-data';

const WeRepresent = () => {
  return (
    <div>
      <div className="companies-bg bg-style"></div>
      <div className="container">
        <div className=" mt-20 grid lg:grid-cols-2 lg:gap-8">
          {werepresentdata.map((item) => {
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
      </div>
    </div>
  );
};

export default WeRepresent;