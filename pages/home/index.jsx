import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataOfTheYouTube } from "../../src/server/data";
import avatar from "../../src/assets/avatar.svg";
import { ToastContainer } from "react-toastify";
const Home = () => {
  const [data, setdata] = useState(dataOfTheYouTube);

  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-4  gap-y-10 gap-x-3 px-5 h-[750px] overflow-scroll">
      {data.map(
        ({ img, id, title, channel, uploaded, duration, quality, views }) => {
          return (
            <div
              onClick={() => navigate(`/home/${id}`)}
              key={id}
              className="w-full bg-white rounded-lg  shadow-lg">
              <div className="relative">
                <img
                  src={img}
                  alt="Batman Scene"
                  className="w-full h-48 object-cover rounded-lg"
                />

                <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 flex items-center gap-1 rounded-md">
                  <span className="bg-white text-black px-1 rounded-sm">F</span>
                  {quality}
                </div>

                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                  {duration}
                </div>
              </div>

              <div className="p-3 flex">
                <img
                  src={avatar}
                  alt="Movieclips Trailers"
                  className="w-10 h-10 rounded-full mr-3"
                />

                <div className="text-sm text-gray-800">
                  <p className="font-semibold leading-tight">{title}...</p>
                  <p className="text-gray-600 text-xs">
                    {channel} <span className="text-gray-400">•</span> {views}{" "}
                    <span className="text-gray-400">•</span>
                    {uploaded}
                  </p>
                </div>
              </div>
            </div>
          );
        }
      )}
      <ToastContainer />
    </div>
  );
};
export default Home;
