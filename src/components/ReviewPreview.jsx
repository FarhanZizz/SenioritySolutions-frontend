import React from "react";

const ReviewPreview = () => {
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-primary text-3xl mb-8 text-center">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-[#eaeaea] p-8 rounded-lg">
          <p>
            SenioritySolutions has been a lifesaver for my family. Their caring
            and professional caregivers made a world of difference in providing
            the best care for my elderly parents. Highly recommended!
          </p>
          <h1 className="text-lg text-primary mt-4">- Saiful Islam</h1>
        </div>
        <div className="bg-[#eaeaea] p-8 rounded-lg">
          <p>
            I can't thank SenioritySolutions enough for their exceptional
            healthcare services. They have a dedicated team that truly cares for
            the well-being of seniors. My elderly aunt has never been happier!
          </p>
          <h1 className="text-lg text-primary mt-4">- Jaya Chakraborty</h1>
        </div>
        <div className="bg-[#eaeaea] p-8 rounded-lg">
          <p>
            The technology solutions provided by SenioritySolutions have
            transformed the way I stay connected with my healthcare providers.
            It's a seamless experience that puts my health at the forefront.
          </p>
          <h1 className="text-lg text-primary mt-4">- Runa Chowdhury</h1>
        </div>
      </div>
    </div>
  );
};

export default ReviewPreview;
