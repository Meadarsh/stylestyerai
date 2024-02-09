import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      {" "}
      <div className="h-[40vh] font-changa flex justify-between pt-4 text-xl bg-black">
        <div className="w-1/2">
          <img src="/logo.png" alt="n/a" className="h-24 ml-4" />
        </div>
        <div className="text-white w-1/3">
          <div className="h-1/2 text-3xl flex pr-3 justify-end gap-3">
            <RiTwitterXLine/>
            <RiInstagramFill/>
          </div>
          <div>
            <p>About</p>
            <p>Check Our Design</p>
            <p>Privacy Policy</p>
            <p>Return & Refund</p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center bg-black pb-3 font-changa">
        <p className="text-white">
          Copyright &copy; 2023 Stylesterai
        </p>
      </div>
    </>
  );
};

export default Footer;
