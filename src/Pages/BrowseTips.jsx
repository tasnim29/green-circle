import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const BrowseTips = () => {
  const { theme } = use(AuthContext);
  const tips = useLoaderData();

  const [selectedDiff, setSelectedDiff] = useState("");
  // console.log(tips);
  const handleOnchange = (e) => {
    setSelectedDiff(e.target.value);
  };
  const filteredTip =
    selectedDiff === ""
      ? tips
      : tips.filter((Tip) => Tip.difficulty === selectedDiff);

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-green-700"
        }`}
      >
        🌱 Tips From Users
      </h1>
      {/* dropdown */}
      <select
        defaultValue={""}
        onChange={handleOnchange}
        name="difficulty"
        className={`select select-bordered w-full ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-green-50 text-green-900 border-green-500"
        }`}
      >
        <option value="" disabled>
          Select difficulty
        </option>
        <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr
              className={`  transition duration-1000 ${
                theme === "dark" ? "text-white " : "text-black"
              }`}
            >
              <th>No</th>
              <th>UserName</th>
              <th>Title & Image</th>

              <th>Category</th>
              <th>Difficulty</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTip.map((tip, index) => (
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
