import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { PiHandshakeFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";

const Services = () => {
  return (
    <div className="mt-14">
      <h1 className="text-primary text-center text-3xl max-w-lg mx-auto">
        Everything you need to support you in your efforts as a family caregiver
      </h1>
      <div className="w-[90%] mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center bg-[#eaeaea] p-8 rounded-lg">
          <FaUserFriends className="text-5xl " />
          <h1 className="text-primary text-xl my-3">Companionship</h1>
          <p className="text-center">
            Bringing Smiles, One Conversation at a Time.
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#eaeaea] p-8 rounded-lg">
          <GiHotMeal className="text-5xl " />
          <h1 className="text-primary text-xl my-3 text-center">
            Meal Preparation
          </h1>
          <p className="text-center">Delicious Meals, Made with Love.</p>
        </div>
        <div className="flex flex-col items-center bg-[#eaeaea] p-8 rounded-lg">
          <PiHandshakeFill className="text-5xl " />
          <h1 className="text-primary text-xl my-3 text-center">
            Personal Care
          </h1>
          <p className="text-center">
            Caring for Your Well-Being, Because You Matter.
          </p>
        </div>
        <div className="flex flex-col items-center bg-[#eaeaea] p-8 rounded-lg">
          <GrWorkshop className="text-5xl " />
          <h1 className="text-primary text-xl my-3 text-center">
            Household Chores
          </h1>
          <p className="text-center">Home Comfort, Our Expertise.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
