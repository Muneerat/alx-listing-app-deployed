import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#34967C] text-white py-2"></div>
      <div className="bg-[#222222] text-[#CACACA] py-8 ">
        <div className="container mx-auto px-4 pb-10">
          <div className="flex justify-between flex-wrap">
            <div className="w-2/6">
              <Image
                src="/assets/whiteLogo.svg"
                alt="logo"
                width={50}
                height={50}
              />
              <p className="text-sm pt-5">
                ALX is a platform where travelers can discover and book unique,
                comfortable, and affordable lodging options worldwide. From cozy
                city apartments and tranquil countryside retreats to exotic
                beachside villas, ALX connects you with the perfect place to
                stay for any trip.
              </p>
            </div>
            <div className="">
              <h5 className="text-lg font-bold py-4">Explore </h5>
              <ul className="text-base text-[#CACACA] space-y-2.5">
                <li>Apartments in Dubai</li>
                <li>Hotels in New York </li>
                <li>Villa in Spain</li>
                <li>Mansion in Indonesia</li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-lg font-bold py-4">Company </h5>
              <ul className="text-base text-[#CACACA] space-y-2.5">
                <li>About us</li>
                <li>Blog</li>
                <li>Career</li>
                <li>Customers</li>
                <li>Brand</li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-lg font-bold py-4">Help </h5>
              <ul className="text-base text-[#CACACA] space-y-2.5">
                <li>Support</li>
                <li>Cancel booking</li>
                <li>Refunds Process </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-2"></div>
        <div className="container mx-auto flex md:flex-row flex-col  justify-between">
          <p>
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details here
          </p>
          <div className="flex space-x-4 ">
            <p>Terms of Service</p>
            <p>Policy service</p>
            <p>Cookies Policy</p>
            <p>Refunds Process</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
