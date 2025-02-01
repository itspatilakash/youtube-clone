import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";
import { TbSearch } from "react-icons/tb";
import { HiOutlineMicrophone } from "react-icons/hi";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";



const Navbar = () => {
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky">
      <div className="flex gap-8 items-center text-2xl text-white">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-3xl text-red-500" />
          <span className="text-2 xl font-bold">YouTube</span>
        </div>
        <div className="flex item-center justify-center gap-5">
          <form>
            <div className="flex items-center bg-zinc-900 h-10 px-4 pr-0 rounded-3xl">
              <div className="flex gap-5 items-center pr-5 ">
                <input type="text" placeholder="Search .... " className="w-96 bg-zinc-900 focus:outline-none border-none " />
              </div>
              <button className="  flex items-center justify-center bg-zinc-800 rounded-r-3xl h-10 w-16" >
              <TbSearch className="text-xl "/>
              </button>
            </div>
          </form>
          <div className=" text- xl p-3 bg-zinc-900 rounded-full ">
            <HiOutlineMicrophone/>
          </div>
          <div className="flex gap-5 items-center text-xl">
            <RiVideoAddLine />
            <div className="relative">
            <IoMdNotifications />
            <span className="absolute bottom-2 left-2 " > 9+</span>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
