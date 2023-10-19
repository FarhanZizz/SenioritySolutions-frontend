import React from "react";

const Newsletter = () => {
  return (
    <div className="my-20 lg:w-1/2 mx-auto">
      <div className="bg-[#eaeaea] text-primary p-10 rounded-2xl">
        <h1 className="text-2xl text-center font-bold">
          Subscribe To Our Newsletter!
        </h1>
        <p className="text-center my-3 text-black">
          Get weekly tips, discount offers and wholsome messages
        </p>
        <div className="form-control lg:w-3/4 mx-auto">
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered w-full focus:outline-none text-black"
            />
            <button className="btn btn-square btn-primary px-10">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
