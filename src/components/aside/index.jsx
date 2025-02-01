import React from "react";
import menubar from "../../assets/Hamburger-Menü.svg";
import logo from "../../assets/logo.svg";
import group from "../../assets/Group.svg";
import trending from "../../assets/trending.svg";
import subscription from "../../assets/subscription.svg";
import library from "../../assets/library.svg";
import history from "../../assets/history.svg";
import Yourvideos from "../../assets/Yourvideos.svg";
import Watchlater from "../../assets/Watchlater.svg";
import Likedvideos from "../../assets/Likedvideos.svg";

Watchlater;

import { NavLink } from "react-router-dom";

library;
const Aside = () => {
  return (
    <div className="w-[20%]  h-screen">
      <div className="flex items-center gap-6 p-5">
        <img src={menubar} alt="" />
        <img src={logo} alt="" />
      </div>

      <div className="">
        <div>
          <NavLink
            to={"/home"}
            className="w-full py-3 px-5 flex items-center gap-4">
            <img src={group} alt="" />
            <p className="text-[14px] font-medium">Home</p>
          </NavLink>
          <NavLink
            to={"/trending"}
            className="w-full py-3 px-5 flex items-center gap-4">
            <img src={trending} alt="" />
            <p className="text-[14px] font-medium">Trending</p>
          </NavLink>
          <NavLink
            to={"/subscription"}
            className="w-full py-3 px-5 flex items-center gap-4">
            <img src={subscription} alt="" />
            <p className="text-[14px] font-medium">Subscription</p>
          </NavLink>
        </div>
        <hr />
        <div className="pt-4">
          <NavLink
            to={"/library"}
            className="w-full py-3 px-5 flex items-center gap-4">
            <img src={library} alt="" />
            <p className="text-[14px] font-medium">Library</p>
          </NavLink>
          <NavLink
            to={"/history"}
            className="w-full py-3 px-5 flex items-center gap-4">
            <img src={history} alt="" />
            <p className="text-[14px] font-medium">History</p>
          </NavLink>
          <NavLink
            to={"/yourvideos"}
            className="w-full py-3 px-5 flex items-center gap-4">
            <img src={Yourvideos} alt="" />
            <p className="text-[14px] font-medium">Your videos</p>
          </NavLink>
          <NavLink
            to={"/watchlater"}
            className="w-full py-3  px-5 flex items-center gap-4">
            <img src={Watchlater} alt="" />
            <p className="text-[14px] font-medium">Watch later</p>
          </NavLink>
          <NavLink
            to={"/likedvideos"}
            className="w-full  py-3 px-5 flex items-center gap-4">
            <img src={Likedvideos} alt="" />
            <p className="text-[14px] font-medium">Liked videos</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Aside;
