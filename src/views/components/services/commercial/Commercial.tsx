import React from 'react';
import { nepalcustomers, uscustomersdata } from './commercialdata';

const Commercial = () => {
  return (
    <div>
      <div className="services-bg bg-style"></div>

      <div className="container mt-10 lg:mt-24">
        <img
          src="https://res.cloudinary.com/softenin/image/upload/v1734032154/oscar/home-icon1_s2el2f.png"
          alt=""
        />
        <h4 className="font-semibold">Commercial Aviation</h4>
        <p className="text-gray-500">
          Oscar enterprise offers its services and covers all the requirements
          of all the commercial airlines of Bangladesh and Nepal.
        </p>
        <div className="mt-9 grid gap-6 lg:grid-cols-3 lg:gap-0">
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734068889/oscar/ser-1_qrucqu.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734068889/oscar/ser2_eidiac.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734068889/oscar/ser3_wu99sy.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-slate-200">
        <div className="container mt-14 py-14">
          <h4 className="font-semibold">Our Customers in Bangladesh</h4>
          <div className="text-gray-600">
            <p>1- Biman Airlines</p>
            <p>2- US Bangla Airlines</p>
            <p>3- Novo Air</p>
            <p>4- Air Astra</p>
            <p>5- Regent Airways</p>
            <p>6- Sky Capital Cargo</p>
            <p>7- Bismilla Cargo</p>
            <p>8- Hello Airlines</p>
            <p>9- Bangladesh Flying Academy</p>
            <p>10- BRB airlines</p>
            <p>11- Square air limited</p>
            <p>12- Galaxy Flying Academy</p>
            <p>13- Arirang Flying Academy</p>
            <p>14- Fly Dhaka</p>
            <p>15- R & R aviation</p>

            <div className="mt-11 grid gap-4 lg:grid-cols-3 lg:gap-8">
              {uscustomersdata.map((item) => {
                return <img src={item.img} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mt-14 py-14">
          <h4 className="font-semibold">Our Customers in Nepal</h4>
          <div className="text-gray-600">
            <p>1- Nepal Airlines</p>
            <p>2- Buddha Airlines</p>
            <p>3- Himalaya Airlines</p>
            <p>4- Shree Airlines</p>
            <p>5- Sita Airlines</p>
            <p>6- Yeti Airlines</p>
            <p>7- Tara Air</p>
            <p>8- Saurya Airlines</p>
            <p>9- Air Dynasty</p>

            <div className="mt-11 mb-10 grid gap-4 lg:mb-28 lg:grid-cols-3 lg:gap-8">
              {nepalcustomers.map((item) => {
                return <img src={item.img} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
