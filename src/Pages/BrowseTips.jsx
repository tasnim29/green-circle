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
  const [sortOrder, setSortOrder] = useState("asc");

  // console.log(tips);
  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 300);
  if (load) return <Loader></Loader>;
  const handleOnchange = (e) => {
    setSelectedDiff(e.target.value);
  };

  const filteredTip = tips
    .filter((tip) => {
      const matchedDifficulty =
        selectedDiff === "" || tip.difficulty === selectedDiff;
      const matchedSearch =
        search === "" || tip.title.toLowerCase().includes(search.toLowerCase());
      return matchedDifficulty && matchedSearch;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-primary"
        }`}
      >
        🌱 Tips From Users
      </h1>

      {/* full section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* button functionalities */}
        <div className="lg:col-span-2 space-y-4">
          {/* search menu */}
          <div className="flex items-center gap-2 w-full md:w-48 bg-white rounded-lg shadow-sm px-3 py-2 border border-green-300">
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
            className={`select select-bordered w-full md:w-48 ${
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
          {/* sorting */}
          <div className="relative inline-block text-left">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered bg-white text-primary border-primary w-full md:w-48"
            >
              <option value="asc">Sort by Title: A → Z</option>
              <option value="desc">Sort by Title: Z → A</option>
            </select>
          </div>
        </div>
        {/* cards */}
        <div className="lg:col-span-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {filteredTip.map((tip, index) => (
              <div
                key={tip._id}
                className="bg-white bg-gradient-to-br from-green-100 via-green-50 to-white shadow-md rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-52 object-cover"
                />

                {/* Content Below Image */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      by {tip.username} ({tip.email})
                    </p>

                    <div className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      <p>
                        <span className="font-semibold">Category:</span>{" "}
                        {tip.category}
                      </p>
                      <p>
                        <span className="font-semibold">Difficulty:</span>{" "}
                        {tip.difficulty}
                      </p>
                      <p>
                        <span className="font-semibold">No:</span> {index + 1}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 text-right">
                    <Link
                      to={`/tipDetails/${tip._id}`}
                      className="btn btn-primary"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTips;
