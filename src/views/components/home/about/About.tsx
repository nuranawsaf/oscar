import React from 'react';
import { aboutdata } from './about-data';

const About = () => {
  return (
    <div className="container mt-8 mb-14 text-center lg:mb-28 lg:mt-24">
      <h2 className="mb-5 font-bold">About Us</h2>

      <div className="text-[#656464]">
        <p className="text-justify lg:text-center">
          Oscar Enterprise started its journey with the leadership of Joarder
          Sahriar Kashem and Capt. SANM Oqba in 1983. Sayeeda afifa shireen is
          our sr. Vice president. Since the very beginning OSCAR has been in the
          business of Aviation and Defense Industries of Bangladesh and later on
          it extended its territory in Nepal.
        </p>
        <p className="my-3 text-justify lg:text-center">
          The company came quickly under the lime light in the aviation and
          defense industries of Bangladesh through its representations of
          renowned OEM’s and foreign companies, Oscar has been proudly
          supporting all the commercial airliners of Bangladesh and Nepal, the
          flying academy’s, the military users of Bangladesh and as well as
          power sectors.
        </p>
        <p className="text-justify lg:text-center">
          Oscar enterprise fulfils the majority of the requirements of Aviation
          Tires and Lubricants in Bangladesh for its commercial and military
          customers through GoodYear Aviation Tires and Aeroshell and supports
          all the commercial airliners of Bangladesh and Nepal through Honeywell
          Aerospace. Oscar Enterprise is also engaged in Energy sector,
          Bangladesh Shipping Corporation, Agricultural sector.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-3">
        {aboutdata.map((item, index) => {
          return <img className="mb-6" src={item.img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default About;
