import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="bg-style contact-bg"></div>

      <div className="container mt-11">
        <div className=" grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border">
            <h3 className="rounded-t-xl border-b bg-slate-200 p-11 font-semibold">
              Our Registered Office
            </h3>
            <div className="p-11">
              <h4>Oscar Enterprise</h4>
              <p className="text-gray-500">
                House: 27, Road: 09, Sector: 04
                <br />
                Uttara Model Town, Dhaka-1230, Bangladesh
                <br />
                Tel: +88 02 58953112, 58957859, 58954917
                <br />
                Fax: +88 02 58957142
                <br />
                Email: mti.aviation.gen@gmail.com
              </p>
            </div>
          </div>

          <div className="rounded-xl border">
            <h3 className="rounded-t-xl border-b bg-slate-200 p-11 font-semibold">
              Nepal Office
            </h3>
            <div className="p-11">
              <h4>A One Complex</h4>
              <p className="text-gray-500">
                Bhagwatisthan, Thamel,
                <br />
                Kathmandu, Nepal.
                <br />
                Fax: +977-1-4271260,
                <br />
                Cell: +977-980-8463489
                <br />
                Email:
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border">
          <h3 className="rounded-t-xl border-b bg-slate-200 p-11 font-semibold">
            Our Sister Concern
          </h3>
          <div className="p-11">
            <h4>1. Madina Trade International</h4>
            <h4>2. Aero Repairing Sources International, Bangladesh</h4>
            <h4>3. Madina Agro Complex, Bangladesh</h4>
            <h4>4. Afifa Enterprise, Bangladesh</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
