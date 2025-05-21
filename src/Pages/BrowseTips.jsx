import React from "react";
import { Link, useLoaderData } from "react-router";

const BrowseTips = () => {
  const tips = useLoaderData();
  console.log(tips);
  return (
    <div className="max-w-5xl mx-auto my-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>UserName</th>
              <th>Title & Image</th>

              <th>Category</th>
              <th>Difficulty</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={tip._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="font-bold">{tip.username}</div>
                  <div className="text-gray-500">{tip.email}</div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={tip.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{tip.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{tip.category}</div>
                </td>
                <td>
                  <div className="font-bold">{tip.difficulty}</div>
                </td>
                <th>
                  <Link
                    to={`/tipDetails/${tip._id}`}
                    className="bg-green-600 text-white px-3 py-2 font-bold"
                  >
                    See more
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
