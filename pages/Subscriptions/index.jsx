import React, { useState } from "react";
import { subscriptions } from "../../src/server/subscription";

const Subscription = () => {
  let [data, setdata] = useState(subscriptions);
  console.log(data);

  return (
    <div className="flex flex-col gap-5 px-10 mx-auto h-[750px] overflow-scroll">
      {subscriptions.map((channel) => {
        return (
          <div
            key={channel.id}
            className="flex w-full items-center bg-white p-4 rounded-2xl shadow-md ">
            <img
              src={channel.img}
              alt={channel.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex flex-col flex-grow">
              <h2 className="text-lg font-semibold">{channel.name}</h2>
              <p className="text-gray-500 text-sm">{channel.videos} videos</p>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Subscribed
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Subscription;
