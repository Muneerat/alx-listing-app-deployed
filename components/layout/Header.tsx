import Image from "next/image";
import React from "react";
import bag from "@/public/assets/bag.svg";
import logo from "@/public/assets/logo.svg";
import Button from "../common/Button";
import { ImageCarousel } from "@/constants";

const Header = () => {
  return (
    <header>
      {/* top header */}
      <div className=" text-sm bg-[#34967C] flex justify-center items-center py-3 gap-3">
        <Image src={bag} alt="bag" />
        <p>Overseas trip? Get the latest information on travel guides</p>
        <div className="bg-black text-white rounded-full py-1.5 px-3">
          <p>More info</p>
        </div>
      </div>
      {/* main header */}
      <nav className="flex justify-between items-center pt-3 px-6 bg-white ">
        <Image src={logo} alt="logo" className="w-32 h-10" />
        <div>
          <input
            type="serch"
            placeholder="Search for properties, cities, or landmarks"
            className="border border-gray-300 rounded-full px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-[#34967C]"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button text="Sign in" style="text-white" />
          <Button
            text="Sign up"
            style="bg-white text-black border border-gray-300"
          />
        </div>
      </nav>
      {/* images carousel */}
      <div className=" w-full flex justify-between mt-4 border-t border-gray-300 py-4 px-4">
        {ImageCarousel.map((image, index) => (
          <div key={index} className="">
            <Image src={image.src} alt={image.alt} width={40} height={40} />
            <div className="text-[#616161]">
              <p>{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
