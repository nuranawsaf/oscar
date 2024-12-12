import React from 'react';

const Footer = () => {
  return (
    <div className="mt-28 ">
      <div className="flex items-center bg-[#2B2B39] py-16">
        <div className=" container flex  justify-between text-gray-200">
          <div className=" ">
            <h5 className="text-xl font-semibold">Home</h5>
            <div className="text-base ">
              <p className="my-4 ">Home</p>
              <p className="">Community</p>
              <p className="my-4 ">Events</p>
              <p className="">Contact</p>
            </div>
          </div>

          <div className=" ">
            <h5 className="text-xl font-semibold">Contact With Us</h5>
            <div className="text-base ">
              <p className="my-4 ">
                Subscribe to be the first one to know
                <br />
                about updates. Enter your email
              </p>
              <img
                src="https://res.cloudinary.com/softenin/image/upload/v1734036482/oscar/email-send_ix5enr.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#20202D] py-5">
        <div className="container grid grid-cols-3 items-center  text-gray-200">
          <p>All Right Reserve by</p>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/softenin/image/upload/v1734036894/oscar/logo_gvfdxg.png"
              alt=""
            />
          </div>
          <div className="flex justify-end">
            <img
              className=""
              src="https://res.cloudinary.com/softenin/image/upload/v1734036980/oscar/social-icon_xp5k0i.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
