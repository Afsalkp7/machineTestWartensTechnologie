import React from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="flex justify-between bg-black bg-opacity-50 px-5 mx-24 mt-5 rounded-lg absolute">
      <div className="logoContainer px-5 pt-5">
        <img className="w-52" src={LOGO_URL} />
      </div>
      <div className="navItems flex">
        <ul className="flex m-5 p-5">
          <li className="px-5 text-xs font-bold text-white">
            HOME
          </li>
          <li className="px-5 text-xs font-bold text-white">
            WHY ORION
          </li>
          <li className="px-5 text-xs font-bold text-white">
            WHAT WE DO
          </li>
          <li className="px-5 text-xs font-bold text-white">
            COUNTRIES
          </li>
          <li className="px-5 text-xs font-bold text-white">
            ORION PRIME
          </li>
          <li className="px-5 text-xs font-bold text-white">
            WHATS NEW
          </li>
        </ul>
        <span className="mt-7">
            <button className="bg-blue-300 text-sm font-semibold rounded-md px-5 py-3">CONTACT US</button>
        </span>
        
      </div>
    </div>
  );
};
export default Header;

