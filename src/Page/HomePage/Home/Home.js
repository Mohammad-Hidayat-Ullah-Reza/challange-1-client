import React from "react";
import { useLoaderData } from "react-router-dom";
import FormSection from "../FormSection/FormSection";
import ShowDataSection from "../ShowDataSection/ShowDataSection";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const sectors = useLoaderData();

  const { data: allUserData = [], refetch } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const res = await fetch(
        `https://interview-challange-1-server.vercel.app/userData`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="p-2 md:p-10">
      <h1
        data-aos="fade-down"
        className="text-4xl text-center font-bold my-5 md:my-0 text-blue-900"
      >
        Challenge 1
      </h1>
      <div className="p-2 md:p-10">
        <FormSection sectors={sectors} refetch={refetch}></FormSection>
        <ShowDataSection
          allUserData={allUserData}
          refetch={refetch}
          sectors={sectors}
        ></ShowDataSection>
      </div>
    </div>
  );
};

export default Home;
