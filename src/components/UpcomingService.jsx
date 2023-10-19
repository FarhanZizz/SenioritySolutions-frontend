import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GiTechnoHeart } from "react-icons/gi";
const UpcomingService = () => {
  return (
    <div className="my-14 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-10">
      <div>
        <h1 className="text-primary text-3xl mb-4 md:text-center lg:text-left">
          Our Upcoming Services
        </h1>
        <p>
          These upcoming services promise to enhance your quality of life,
          offering solutions to various needs and interests, from health and
          convenience to personal growth and recreation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center bg-primary text-white p-8 rounded-lg">
          <AiFillCar className="text-5xl " />
          <h1 className=" text-xl my-3 text-center">Transportation</h1>
          <p className="text-center">
            Ride with Peace of Mind, Your Journey, Our Priority.
          </p>
        </div>
        <div className="flex flex-col items-center bg-primary text-white p-8 rounded-lg">
          <GiTechnoHeart className="text-5xl " />
          <h1 className=" text-xl my-3 text-center">Telehealth</h1>
          <p className="text-center">Connecting You to a Healthier Tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingService;
