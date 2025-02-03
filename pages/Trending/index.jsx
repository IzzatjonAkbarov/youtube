import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataOfTheYouTube } from "../../src/server/data";
import avatar from "../../src/assets/avatar.svg";
const Trending = () => {
  const [data, setdata] = useState(dataOfTheYouTube);
  let reverceddata = data.reverse();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3  gap-y-10 gap-x-3 px-5 h-[750px] overflow-scroll">
      {reverceddata.map(
        ({ img, id, title, channel, uploaded, duration, quality, views }) => {
          return (
            <div
              onClick={() => navigate(`/home/${id}`)}
              key={id}
              className="w-full bg-white rounded-lg  shadow-lg">
              {/* Thumbnail Section */}
              <div className="relative">
                <img
                  src={img}
                  alt="Batman Scene"
                  className="w-full h-48 object-cover rounded-lg"
                />

                {/* HD Badge */}
                <div className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 flex items-center gap-1 rounded-md">
                  <span className="bg-white text-black px-1 rounded-sm">F</span>
                  {quality}
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
                  {duration}
                </div>
              </div>

              {/* Video Details */}
              <div className="p-3 flex">
                {/* Channel Icon */}
                <img
                  src={avatar}
                  alt="Movieclips Trailers"
                  className="w-10 h-10 rounded-full mr-3"
                />

                {/* Text Content */}
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
    </div>
  );
};
export default Trending;
