import React from "react";
import advise from "../assets/advice.png";

const Advise = () => {
  return (
    <div
      className="hero my-14 p-8 md:p-20"
      style={{
        backgroundImage: `url(${advise})`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between">
        <div></div>
        <div>
          <h1 className="text-primary text-3xl md:text-4xl mb-5 md:text-right">
            Looking for Advice?
          </h1>
          <p className="md:text-lg md:text-right">
            Your request will be answered withing 24 hours
          </p>
          <div className="flex gap-8 my-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="input input-bordered w-full max-w-xs bg-transparent border-0 border-b-2 border-primary rounded-none focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs bg-transparent border-0 border-b-2 border-primary rounded-none focus:outline-none"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-24 bg-transparent border-0 border-b-2 border-primary rounded-none focus:outline-none"
            placeholder="Your Message"
          ></textarea>

          <div className="flex justify-center lg:justify-end">
            <button className="btn btn-primary mt-10 btn-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advise;
