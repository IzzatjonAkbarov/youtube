import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../main-layout";
import History from "../../../pages/History";
import Library from "../../../pages/Library";
import Likedvideos from "../../../pages/Likedvideos";
import Subscription from "../../../pages/Subscriptions";
import Trending from "../../../pages/Trending";
import Home from "../../../pages/home";
import Watchlater from "../../../pages/Watchlater";
import Yourvideos from "../../../pages/Yourvideos";
import Notfound from "../../../pages/notfound";
import SinglevideoInfo from "../../../pages/home/singleinfo";
import Login from "../login";
import ProtectRoute from "../protectroute";

const RouterComponents = () => (
  <>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <MainLayout />
          </ProtectRoute>
        }>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/library" element={<Library />} />
        <Route path="/likedvideos" element={<Likedvideos />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/yourvideos" element={<Yourvideos />} />
        <Route path="/home/:id" element={<SinglevideoInfo />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </>
);

export default RouterComponents;
// const RouterComponents = () => (
//   //   <>
//   //     <Routes>
//   //       <Route
//   //         path="/"
//   //         element={
//   //           <ProtectRoute>
//   //             <MainLayout />
//   //           </ProtectRoute>
//   //         }>
//   //         <Route path="/history" element={<History />} />
//   //         <Route index element={<Home />} />
//   //         <Route path="/library" element={<Library />} />
//   //         <Route path="/likedvideos" element={<Likedvideos />} />
//   //         <Route path="/subscription" element={<Subscription />} />
//   //         <Route path="/trending" element={<Trending />} />
//   //         <Route path="/watchlater" element={<Watchlater />} />
//   //         <Route path="/yourvideos" element={<Yourvideos />} />
//   //         <Route path="/home/:id" element={<SinglevideoInfo />} />
//   //       </Route>

//   //       <Route path="*" element={<Notfound />} />
//   //       <Route path="/login" element={<Login />} />
//   //     </Routes>
//   //   </>
//   // );
