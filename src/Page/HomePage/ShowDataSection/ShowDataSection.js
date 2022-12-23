import React from "react";
import { toast } from "react-hot-toast";

const ShowDataSection = ({ allUserData, refetch }) => {
  const handleDelete = (id) => {
    console.log(id);
    if (id) {
      fetch(`http://localhost:5000/userData`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success("successfully deleted");
          }
        })
        .catch((e) => console.log(e));
    }
  };

  console.log(allUserData);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Sector</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {allUserData.map((d, i) => (
              <tr key={d._id}>
                <th>{i + 1}</th>
                <td>{d.data.name}</td>
                <td>{d.data.sectors}</td>
                <td>
                  <button className="btn btn-sm">Edit</button>
                  <button
                    onClick={() => handleDelete(d._id)}
                    className="btn btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowDataSection;
