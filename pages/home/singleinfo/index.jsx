import React, { useState } from "react";
import { dataOfTheYouTube } from "../../../src/server/data";
import { useParams } from "react-router-dom";
import avatar from "../../../src/assets/avatar.svg";

const SinglevideoInfo = () => {
  const [data, setdata] = useState(dataOfTheYouTube);

  const { id } = useParams();

  let newdata = data.filter((value) => value.id == id);
  console.log(newdata);

  return (
    <div className="w-[95%] mx-auto bg-white rounded-lg shadow-lg ">
      {/* Video Thumbnail */}
      <div className="relative">
        <div className="w-full">
          <iframe
            className="w-full rounded-lg"
            height={"500px"}
            src="https://www.youtube.com/embed/WEU8UN-Bjuc?si=XZnTHHHnN9GOlKnd"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            aria-controls="youtube"></iframe>
        </div>
        {/* Duration Badge */}
        {/* <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm font-semibold px-2 py-1 rounded">
          {newdata[0].duration}
        </div> */}
      </div>

      {/* Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {newdata[0].title}
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          {newdata[0].views} views • {newdata[0].uploaded}
        </p>

        <div className="flex items-center mt-3">
          <img
            src={avatar}
            alt={newdata[0].channel}
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-800 font-medium">{newdata[0]?.channel}</p>
            <p className="text-gray-500 text-xs"> subscribers</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-3 line-clamp-3">
          {newdata[0].title}
        </p>
      </div>
    </div>
  );
};

export default SinglevideoInfo;
