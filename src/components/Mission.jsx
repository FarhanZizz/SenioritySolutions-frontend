import React from "react";
import mission from "../assets/misson.png";

const Mission = () => {
  return (
    <div
      className="hero my-14 p-8 md:p-20"
      style={{
        backgroundImage: `url(${mission})`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="w-full">
        <div className="max-w-xl">
          <h1 className="text-primary text-3xl mb-6">Our Mission</h1>
          <p>
            At SenioritySolutions we believe dignity and respect are two of the
            most valuable commodities in the world. There is no higher praise
            for us than the smile of a happy patient, the thanks of a relieved
            client, or the revitalized embrace of an engaged resident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
