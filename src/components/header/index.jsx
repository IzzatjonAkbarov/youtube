import React from "react";
import search from "../../assets/Search.svg";
import Create from "../../assets/Create.svg";
import grid from "../../assets/grid.svg";
import notifacation from "../../assets/notifacation.svg";
import avatar from "../../assets/avatar.svg";

const Header = () => {
  return (
    <div className="contianer1">
      <div className="w-full py-3 flex items-center justify-between">
        <form
          action=""
          className="w-[40%] border flex items-center justify-between border-gray h-[29px] rounded ">
          <input
            className="w-full outline-none p-1"
            type="text"
            placeholder="Search"
          />
          <button className="h-full bg-[#f6f6f6] rounded  px-4">
            <img src={search} alt="" />
          </button>
        </form>

        <div className="flex items-center gap-5">
          <div className="imgs flex items-center gap-5">
            <img src={Create} alt="" />
            <img src={grid} alt="" />
            <img src={notifacation} alt="" />
          </div>
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
