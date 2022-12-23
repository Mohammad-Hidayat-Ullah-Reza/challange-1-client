import { useQuery } from "@tanstack/react-query";
import React from "react";

const ShowDataSection = () => {
  const { data: allUserData = [], refetch } = useQuery({
    queryKey: ["allUserData"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/userData`);
      const data = await res.json();
      return data;
    },
  });

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
                  <button className="btn btn-sm">Delete</button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>
                <button className="btn btn-sm">Edit</button>
                <button className="btn btn-sm">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowDataSection;
