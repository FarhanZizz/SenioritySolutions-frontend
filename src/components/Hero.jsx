import { Link } from "react-router-dom";
import heroImg from "../assets/expanded-hero.jpg";
import heroImg2 from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-[400px] md:min-h-[550px] mt-4 "
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="w-[90%]">
        <div className="max-w-xl text-white">
          <h1 className="mb-5 text-xl md:text-5xl font-bold">
            Unlocking a Better Tomorrow for Seniors
          </h1>
          <p className="mb-5 text-sm">
            SenioritySoultions offers an individualized approach to keep seniors
            safe and sound at home instead of anywhere else.
          </p>
          <Link to="/" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
