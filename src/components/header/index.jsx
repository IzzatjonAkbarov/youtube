import React from "react";
import search from "../../assets/Search.svg";
import Create from "../../assets/Create.svg";
import grid from "../../assets/grid.svg";
import notifacation from "../../assets/notifacation.svg";
import avatar from "../../assets/avatar.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="contianer1">
        <div className="w-full py-3 flex items-center justify-between">
          <form
            action=""
            className=" mx-auto w-[50%] border flex items-center justify-between border-gray h-[29px] rounded ">
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
              <NavLink to={"/subscription"}>
                <img src={notifacation} alt="" />
              </NavLink>
            </div>
            <label htmlFor="check">
              <i className="fa-solid fa-user"></i>
            </label>{" "}
          </div>
        </div>
      </div>
      <input className="hidden" id="check" type="checkbox" />
      <div className="profile fixed w-[100%]   top-0 right-0  h-screen z-50">
        <div className="flex w-full">
          <label
            className="h-screen w-[50%] bg-[#ffffff71] backdrop-blur-xl"
            htmlFor="check">
            <div className=""></div>
          </label>
          <div className=" bg-[rgb(255,241,241)] p-6  shadow-md    w-[50%]">
            <div className="flex items-start p-5 justify-between">
              <img src={avatar} alt="" className="w-24 h-24 " />
              <button onClick={() => logout()}>
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </div>
            <h2 className="text-xl font-semibold"></h2>
            <p className="text-gray-500 text-sm">100 subscribers</p>
            <p className="text-gray-700 mt-2">Stay hard</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
