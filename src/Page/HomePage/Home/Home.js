import React from "react";
import { useLoaderData } from "react-router-dom";
import FormSection from "../FormSection/FormSection";
import ShowDataSection from "../ShowDataSection/ShowDataSection";

const Home = () => {
  const sectors = useLoaderData();
  return (
    <div>
      <FormSection sectors={sectors}></FormSection>
      <ShowDataSection></ShowDataSection>
    </div>
  );
};

export default Home;
