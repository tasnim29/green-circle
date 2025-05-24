import React, { use, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FcSearch } from "react-icons/fc";
import Loader from "../Components/Loader";

const BrowseTips = () => {
  const { theme } = use(AuthContext);
  const tips = useLoaderData();

  const [search, setSearch] = useState("");
  const [selectedDiff, setSelectedDiff] = useState("");
  // console.log(tips);
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 300);
  if (load) return <Loader></Loader>;
  const handleOnchange = (e) => {
    setSelectedDiff(e.target.value);
  };
  // const filteredTip =
  //   selectedDiff === ""
  //     ? tips
  //     : tips.filter((Tip) => Tip.difficulty === selectedDiff);

  const filteredTip = tips.filter((tip) => {
    const matchedDifficulty =
      selectedDiff === "" || tip.difficulty === selectedDiff;
    const matchedSearch =
      search === "" || tip.title.toLowerCase().includes(search.toLowerCase());

    return matchedDifficulty && matchedSearch;
  });

  return (
    <div className="max-w-5xl mx-auto my-20">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-green-700"
        }`}
      >
        🌱 Tips From Users
      </h1>

      {/* search menu */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex items-center gap-2 w-full md:w-72 bg-white rounded-lg shadow-sm px-3 py-2 border border-green-300">
          <FcSearch size={20} className="text-gray-500" />
          <input
            className={`w-full bg-transparent focus:outline-none text-sm ${
              theme === "dark" ? "text-black" : "text-green-900"
            }`}
            type="search"
            name="search"
            placeholder="Search by title"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* dropdown menu */}
        <select
          defaultValue={""}
          onChange={handleOnchange}
          name="difficulty"
          className={`select select-bordered w-full md:w-52 ${
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
      </div>
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
              <th>User</th>
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
