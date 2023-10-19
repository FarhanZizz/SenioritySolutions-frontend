import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const maxWords = 8; // Set the maximum word count

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + " ...";
    }
    return description;
  };
  return (
    <div className="card w-full bg-base-200 shadow-xl image-full">
      <div className="card-body ">
        <div className="flex items-center justify-between">
          <h2 className="card-title">{service.name}</h2>
          <div className="badge badge-primary badge-outline lowercase">
            {service.category}
          </div>
        </div>
        <p>{truncateDescription(service.description)}</p>
        <div className="card-actions justify-around items-center">
          <h1 className="text-primary font-semibold">${service.price}</h1>
          <h1 className="text-primary font-semibold lowercase">
            {service.location}
          </h1>
          <Link
            to={`/service/${service.id}`}
            className="btn btn-primary btn-sm"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
