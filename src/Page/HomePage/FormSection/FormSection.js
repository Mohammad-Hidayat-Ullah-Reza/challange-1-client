import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const FormSection = ({ sectors, refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data, e) => {
    fetch(`https://interview-challange-1-server.vercel.app/userData`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("successfully submitted");
          refetch();
        }
        e.target.reset();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="mb-10">
      <h2 className="text-center text-2xl font-bold">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col items-center"
      >
        {/* ---------name--------- */}

        <div className="form-control w-full max-w-5xl">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            {...register("name", { required: "Please enter your name" })}
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-5xl"
          />
          {errors.name && (
            <p className="text-red-600 my-2">{errors.name?.message}</p>
          )}
        </div>

        {/* ---------select--------- */}

        <div className="form-control w-full max-w-5xl">
          <label className="label">
            <span className="label-text">Select Sectors:</span>
          </label>
          <select
            {...register("sectors", { required: true })}
            className="select select-bordered"
          >
            {sectors[0].sectors.map((s, i) => (
              <option key={i} className="whitespace-pre">{`${s}`}</option>
            ))}
          </select>
        </div>

        {/* ---------checkbox--------- */}

        <div className="form-control max-w-5xl w-full">
          <label className="label cursor-pointer justify-start">
            <input
              {...register("agreeToTerms", {
                required: "Please check the box",
              })}
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text ml-3">Agree to terms</span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-red-600 mb-2">{errors.agreeToTerms?.message}</p>
          )}
        </div>

        {/* ---------button--------- */}
        <button type="submit" className="btn btn-block max-w-5xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormSection;
