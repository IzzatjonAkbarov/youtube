import React from "react";
import Aside from "../aside";
import Mainside from "../mainside";
import Header from "../header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <Aside />
      <div className="w-[85%]">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
