import React from "react";
import { useForm } from "react-hook-form";

const FormSection = ({ sectors }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    fetch(`http://localhost:5000/userData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* ---------name--------- */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-bold">Full Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* ---------select--------- */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select Sectors:</span>
          </label>
          <select
            {...register("sectors", { required: true })}
            className="select select-bordered"
          >
            {sectors[0].sectors.map((s, i) => (
              <option key={i}>{`${s}`}</option>
            ))}
            {/* <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option> */}
          </select>
        </div>

        {/* ---------checkbox--------- */}

        <div className="form-control max-w-xs">
          <label className="label cursor-pointer justify-start">
            <input
              {...register("agreeToTerms", { required: true })}
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text ml-3">Agree to terms</span>
          </label>
        </div>

        {/* ---------button--------- */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSection;
