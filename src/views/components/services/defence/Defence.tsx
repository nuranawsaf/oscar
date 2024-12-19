import React from 'react';

const Defence = () => {
  return (
    <div>
      <div className="services-bg bg-style"></div>

      <div className="container mt-10 lg:mt-24">
        <img
          src="https://res.cloudinary.com/softenin/image/upload/v1734032155/oscar/home-icon2_pywykv.png"
          alt=""
        />
        <h4 className="font-semibold">Defence</h4>
        <p className="text-gray-500">
          Oscar Enterprise has been proudly supporting the Bangladesh Airforce,
          Army and Navy in various ways and in any of its needs from Aviation
          products to Arms and Ammunition.
        </p>
        <div className="mt-9 grid gap-5 lg:grid-cols-3 lg:gap-0">
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734073304/oscar/def1_mw8zmx.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734073304/oscar/def2_dfvlig.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/softenin/image/upload/v1734073305/oscar/def3_ilzbi2.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-slate-200">
        <div className="container pb-28ay mt-14 pt-20 pb-32">
          <div className="text-gray-600">
            <p>1- Bangladesh Airforce</p>
            <p>2- Bangladesh Navy</p>
            <p>3- Bangladesh Army</p>
            <p>4- DGDP (Directorate General of Defense Purchase)</p>

            <div className="mt-11 grid gap-4 lg:grid-cols-3 lg:gap-8">
              <img
                src="https://res.cloudinary.com/softenin/image/upload/v1734073494/oscar/ar2_nkad90.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/softenin/image/upload/v1734073457/oscar/ar1_irromp.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/softenin/image/upload/v1734073494/oscar/ar2_nkad90.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Defence;
