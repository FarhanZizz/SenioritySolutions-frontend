import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import UpcomingService from "../components/UpcomingService";
import Mission from "../components/Mission";
import ReviewPreview from "../components/ReviewPreview";
import Advise from "../components/Advise";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <UpcomingService />
      <Mission />
      <ReviewPreview />
      <Advise />
      <Newsletter />
    </div>
  );
};

export default Home;
