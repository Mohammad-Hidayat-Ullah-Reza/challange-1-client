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
      const res = await fetch(`http://localhost:5000/userData`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <FormSection sectors={sectors} refetch={refetch}></FormSection>
      <ShowDataSection
        allUserData={allUserData}
        refetch={refetch}
      ></ShowDataSection>
    </div>
  );
};

export default Home;
