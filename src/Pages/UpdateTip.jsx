import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateTip = () => {
  const tip = useLoaderData();
  const {
    _id,
    title,
    type,
    difficulty,
    description,
    category,
    availability,
    image,
  } = tip;
  const { user, theme } = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTip = Object.fromEntries(formData.entries());
    // console.log(updatedTip);

    // update mongodb
    fetch(`https://green-circle-server.vercel.app/shareTip/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("after DB", data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your tip has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div
      className={` py-10 transition duration-1000 ${
        theme === "dark" ? "bg-gray-950" : "bg-green-50"
      }`}
    >
      <div className="my-20 max-w-5xl mx-auto  ">
        <div className="text-center mb-10">
          <h1
            className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
              theme === "dark" ? "text-white " : "text-green-700"
            }`}
          >
            🌱 You can Update your Garden Tip
          </h1>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                UserName
              </label>
              <input
                name="username"
                type="text"
                value={user.displayName}
                className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
              />
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={user.email}
                className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
              />
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 shadow-md rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Title
              </label>
              <input
                name="title"
                type="text"
                defaultValue={title}
                className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
                placeholder="Enter title"
              />
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Plant Type
              </label>
              <input
                name="type"
                type="text"
                defaultValue={type}
                className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
                placeholder="Enter Plant Type"
              />
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Difficulty Level
              </label>
              <select
                name="difficulty"
                className={`select select-bordered w-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-green-50 text-green-900 border-green-500"
                }`}
                defaultValue={difficulty}
              >
                <option value="" disabled>
                  Select difficulty
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Description
              </label>
              <input
                name="description"
                type="text"
                defaultValue={description}
                className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
                placeholder="Enter Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Category
              </label>
              <select
                name="category"
                className={`select select-bordered w-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-green-50 text-green-900 border-green-500"
                }`}
                defaultValue={category}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Composting">Composting</option>
                <option value="Plant-Care">Plant Care</option>
                <option value="Vertical-Gardening">Vertical Gardening</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Availability
              </label>
              <select
                name="availability"
                className={`select select-bordered w-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-green-50 text-green-900 border-green-500"
                }`}
                defaultValue={availability}
              >
                <option value="" disabled>
                  Select Availability
                </option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </fieldset>
          </div>
          <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4 mt-5">
            <label className="label text-xl font-semibold text-green-900">
              Images url
            </label>
            <input
              name="image"
              type="text"
              defaultValue={image}
              className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
              placeholder="Enter Images url"
            />
          </fieldset>
          <button className="bg-green-700 text-white w-full py-2 mt-5 cursor-pointer hover:bg-green-800 rounded-lg">
            Update Tip
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTip;
