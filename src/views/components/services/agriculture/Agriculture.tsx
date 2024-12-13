import React from 'react';
import { nepalcustomers, uscustomersdata } from '../commercial/commercialdata';
import { agriculturedata, culturedata } from './agriculturedata';

const Agriculture = () => {
  return (
    <div>
      <div className="services-bg bg-style"></div>

      <div className="container mt-24">
        <img
          src="https://res.cloudinary.com/softenin/image/upload/v1734032155/oscar/home-icon3_vht1jn.png"
          alt=""
        />
        <h4 className="font-semibold">Agriculture</h4>
        <p className="text-gray-500">
          Our Presidents Mr.Joarder Sahriar Kashem has an affinity and affection
          for his own people of his home town for which he has created one of
          the biggest gardens and agro-based company.
        </p>
        <div className="mt-9 grid lg:grid-cols-3">
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734079495/oscar/ag1_uamlfd.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734079495/oscar/ag2_bdadeo.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734079495/oscar/ag3_oyv9ad.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-slate-200">
        <div className="container mt-14 py-14">
          <p className="text-gray-600">
            Oscar Enterprise has its sister concern Madina Agro Complex which is
            a completely Agro-Based project and a garden. A versatile fruit
            garden on 20 acre of Land in the very heart of the West Bengal in
            Sreepur, Magura. Our Agro-Based project follows the scientific
            cultivation of fruits and vegetables of different variety’s and we
            are proud to contribute into our agricultural economy and fulfil a
            lot of demand for the people of Bangladesh; Needless to say, Madina
            Agro Complex has one of the biggest projects in Bangladesh.
          </p>
          <div className="mt-11 grid grid-cols-3 gap-8">
            {agriculturedata.map((item) => {
              return <img src={item.img} alt="" />;
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="container mt-14 py-14">
          <div className="text-gray-600">
            <div className="mt-11 mb-28 grid grid-cols-3 gap-8">
              {culturedata.map((item) => {
                return <img src={item.img} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agriculture;
