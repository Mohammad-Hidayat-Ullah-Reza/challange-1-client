import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditDataModal = ({
  setUserId,
  setUserData,
  userId,
  userData,
  refetch,
  sectors,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormUpdate = (data, e) => {
    fetch(`https://interview-challange-1-server.vercel.app/userData`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userId, data }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("successfully updated");
          refetch();
        }
        e.target.reset();
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Edit your Information
          </h3>

          <form onSubmit={handleSubmit(handleFormUpdate)}>
            {/* ---------name--------- */}

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Edit Name"
                className="input input-bordered w-full"
                defaultValue={userData.name}
              />
            </div>

            {/* ---------select--------- */}

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Select Sectors:</span>
              </label>
              <select
                {...register("sectors", { required: true })}
                className="select select-bordered"
              >
                <option selected disabled>
                  {userData.sector}
                </option>
                {sectors[0].sectors.map((s, i) => (
                  <option key={i} className="whitespace-pre">{`${s}`}</option>
                ))}
              </select>
            </div>

            <div className="modal-action">
              <button type="submit">
                <label htmlFor="my-modal-6" className="btn btn-primary">
                  Save
                </label>
              </button>
              <label htmlFor="my-modal-6" className="btn btn-secondary">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDataModal;
