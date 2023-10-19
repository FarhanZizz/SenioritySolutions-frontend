import React from "react";
import { useQuery } from "react-query";
import Service from "./Service";

const AllService = () => {
  const {
    data: services = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        `https://seniority-solutions-backend-dtpieg2yh-farhanzizz.vercel.app/api/v1/service`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(services);
  return (
    <div className="my-10">
      {isLoading && (
        <div className="h-screen w-full flex justify-center items-center">
          <span className="loading text-primary loading-infinity loading-lg"></span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services?.data?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllService;
