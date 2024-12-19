import React from 'react';

const Footer = () => {
  return (
    <div className="">
      <div className="flex items-center bg-[#2B2B39] py-16">
        <div className=" container justify-between  text-gray-200 lg:flex">
          <div className=" ">
            <h5 className="text-xl font-semibold">Home</h5>
            <div className="text-base ">
              <p className="my-4 ">Home</p>
              <p className="">Community</p>
              <p className="my-4 ">Events</p>
              <p className="">Contact</p>
            </div>
          </div>

          <div className=" mt-14 lg:mt-0">
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

      <div className="hidden bg-[#20202D] py-3 lg:block">
        <div className="container grid grid-cols-3 items-center  text-gray-200">
          <p>All Right Reserve by</p>
          <div className="flex justify-center">
            <img
              width={50}
              src="https://res.cloudinary.com/softenin/image/upload/v1734505354/oscar/WhatsApp_Image_2024-12-16_at_11.46.49_PM_itgps9.png"
              alt=""
            />
            <h2 className="flex items-center font-semibold lg:pl-2">
              Oscar Enterprise
            </h2>
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

      <div className=" bg-[#20202D] py-3 lg:hidden">
        <p className="text-center text-white">All Right Reserve by</p>
      </div>
    </div>
  );
};

export default Footer;
