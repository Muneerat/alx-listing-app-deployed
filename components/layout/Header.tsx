import Image from "next/image";
import React from "react";
import bag from "@/public/assets/bag.svg";
import logo from "@/public/assets/logo.svg";
import Button from "../common/Button";
import { ImageCarousel } from "@/constants";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header>
      {/* top header */}
      <div className=" text-sm bg-[#34967C] flex justify-center items-center py-3 gap-3 ">
        <Image src={bag} alt="bag" />
        <p className="text-white">Overseas trip? Get the latest information on travel guides</p>
        <div className="bg-black text-white rounded-full py-1.5 px-3">
          <p>More info</p>
        </div>
      </div>
      {/* main header */}
      <nav className="flex justify-between items-center pt-3  bg-white md:max-w-[1400px] mx-auto">
        <Image src={logo} alt="logo" className="w-32 h-10 hidden sm:flex" />
    
        <form className="border-1 border-[#F6F6F6] rounded-4xl pl-8 pr-2 py-3 flex  md:w-full md:max-w-3xl  ">
        <div className="flex flex-col sm:shrink-2 sm:flex-2 md:pr-4">
          <h5 className="text-sm font-medium text-[#161117]">Location</h5>
          <input type="text" placeholder="Search for destination" className="text-[#BEBEBE] text-[13px] font-medium focus:outline-0 outline-0 " />
         
        </div>
        <div className="md:flex hidden flex-col pl-4 pr-2 border-[#E9E9E9] border-l">
          <h5 className="text-sm font-medium text-[#161117]">Check in</h5>
          <input type="text" placeholder="Add date" className="text-[#BEBEBE] text-[13px] font-medium focus:outline-0 outline-0 w-22" />
         
        </div>
          <div className="flex sm:hidden flex-col pl-4 sm:pr-2 border-[#E9E9E9] border-l">
          <h5 className="text-sm font-medium text-[#161117]">Add Date</h5>
          <input type="text" placeholder="Add date" className="text-[#BEBEBE] text-[13px] font-medium focus:outline-0 outline-0 w-22" />
         
        </div>
        <div className="md:flex hidden flex-col  pl-4 pr-2 border-[#E9E9E9] border-l">
          <h5 className="text-sm font-medium text-[#161117]">Check out</h5>
          <input type="text" placeholder="Add date" className="text-[#BEBEBE] text-[13px] font-medium focus:outline-0 outline-0 w-22" />
         
        </div>
        <div className="md:flex hidden flex-col shrink-2 pl-4 pr-2 border-[#E9E9E9] border-l">
          <h5 className="text-sm font-medium text-[#161117]">People</h5>
          <input type="text" placeholder="Add guest" className="text-[#BEBEBE] text-[13px] font-medium focus:outline-0 outline-0 w-22" />
         
        </div>
        <div className="h-11 w-11 bg-[#FFA800] rounded-full flex justify-center items-center">
          <Search className="text-white size-6" />
        </div>
        </form>
        <div className="md:flex items-center gap-4 hidden">
          <Button text="Sign in" style="text-white" />
          <Button
            text="Sign up"
            style="bg-white text-black border border-gray-300"
          />
        </div>
      </nav>
      {/* images carousel */}
      <div className="border-t border-gray-300 my-4 px-4 "></div>
      <div className=" w-full max-w-[1350px] flex justify-between gap-4 my-4 mx-auto   md:px-0 overflow-auto">
        {ImageCarousel.map((image, index) => (
          <div key={index} className="flex justify-center items-center flex-col w-full hover:border-b-2 py-4 border-[#0F4E3D] ">
            <Image src={image.src} alt={image.alt} width={35} height={35} />
           
              <p className="text-center text-xs w-max text-[#616161]">{image.caption}</p>
         
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
