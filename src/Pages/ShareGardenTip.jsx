import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const ShareGardenTip = () => {
  const { user, theme } = use(AuthContext);
  const handleShareTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTip = Object.fromEntries(formData.entries());
    // console.log(newTip);

    // newTip.difficulty = parseInt(newTip.difficulty);

    //mongodb post
    fetch("https://green-circle-server.vercel.app/shareTip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTip),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after db", data);
        e.target.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your tip is added",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div
      className={` py-10 transition duration-1000 ${
        theme === "dark" ? "bg-gray-950 " : ""
      }`}
    >
      <div className="">
        <div className="text-center mb-10">
          <h1
            className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
              theme === "dark" ? "text-white " : "text-primary"
            }`}
          >
            🌱 Share a Garden Tip
          </h1>
          <p
            className={`text-lg font-semibold text-center  transition duration-1000 ${
              theme === "dark" ? "text-gray-400 " : "text-primary"
            }`}
          >
            Grow your knowledge! Share your green thumb secrets with fellow
            garden lovers.
          </p>
        </div>
        <form onSubmit={handleShareTip}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset bg-accent border-secondary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                UserName
              </label>
              <input
                name="username"
                type="text"
                value={user.displayName}
                className="input w-full border-green-500 bg-green-50 text-primary placeholder-secondary"
              />
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={user.email}
                className="input w-full border-green-500 bg-green-50 text-primary placeholder-secondary"
              />
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary shadow-md rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Title
              </label>
              <input
                name="title"
                type="text"
                className="input w-full border-green-500 bg-green-50 text-primary placeholder-secondary"
                placeholder="Enter title"
              />
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Plant Type
              </label>
              <input
                name="type"
                type="text"
                className="input w-full border-green-500 bg-green-50 text-primary placeholder-secondary"
                placeholder="Enter Plant Type"
              />
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Difficulty Level
              </label>
              <select
                name="difficulty"
                className={`select select-bordered w-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-green-50 text-primary border-green-500"
                }`}
              >
                <option value="" disabled>
                  Select difficulty
                </option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Description
              </label>
              <input
                name="description"
                type="text"
                className="input w-full border-green-500 bg-green-50 text-primary placeholder-secondary"
                placeholder="Enter Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Category
              </label>
              <select
                name="category"
                className={`select select-bordered w-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-green-50 text-primary border-green-500"
                }`}
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Composting">Composting</option>
                <option value="Plant-Care">Plant Care</option>
                <option value="Vertical-Gardening">Vertical Gardening</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-accent border-primary rounded-box border p-4">
              <label className="label text-xl font-semibold text-primary">
                Availability
              </label>
              <select
                name="availability"
                className={`select select-bordered w-full ${
                  theme === "dark"
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-green-50 text-primary border-green-500"
                }`}
              >
                <option value="" disabled>
                  Select Availability
                </option>
                <option value="Public">Public</option>
                <option value="Hidden">Hidden</option>
              </select>
            </fieldset>
          </div>
          <fieldset className="fieldset bg-accent border-primary rounded-box border p-4 mt-5">
            <label className="label text-xl font-semibold text-primary">
              Images url
            </label>
            <input
              name="image"
              type="text"
              className="input w-full border-primary bg-green-50 text-primary placeholder-secondary"
              placeholder="Enter Images url"
            />
          </fieldset>
          <button className="btn btn-primary mt-5">Share Tip</button>
        </form>
      </div>
    </div>
  );
};

export default ShareGardenTip;
