import React, { useState } from "react";
import { toast } from "react-hot-toast";
import EditDataModal from "./EditDataModal";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const ShowDataSection = ({ allUserData, refetch, sectors }) => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState("");

  const handleDelete = (id) => {
    console.log(id);
    if (id) {
      fetch(`https://interview-challange-1-server.vercel.app/userData`, {
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

  const handleSetState = (id, name, sector) => {
    setUserId(id);
    setUserData({ name, sector });
  };

  console.log(userId, userData);
  return (
    <div className="max-w-5xl w-full mx-auto">
      <h2 className="text-center text-2xl font-bold my-5"> All Users Data</h2>
      <div className="mx-auto w-full">
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
                    <button
                      onClick={() =>
                        handleSetState(d._id, d.data.name, d.data.sectors)
                      }
                      className="btn btn-sm mr-3"
                      title="Edit"
                    >
                      <label
                        htmlFor="my-modal-6"
                        className="w-full h-full flex items-center justify-center"
                      >
                        <FiEdit2 className="hover:cursor-pointer"></FiEdit2>
                      </label>
                    </button>
                    <button
                      onClick={() => handleDelete(d._id)}
                      className="btn btn-sm"
                      title="Delete"
                    >
                      <RiDeleteBack2Fill className="hover:cursor-pointer"></RiDeleteBack2Fill>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <EditDataModal
          setUserId={setUserId}
          setUserData={setUserData}
          userId={userId}
          userData={userData}
          refetch={refetch}
          sectors={sectors}
        ></EditDataModal>
      </div>
    </div>
  );
};

export default ShowDataSection;
