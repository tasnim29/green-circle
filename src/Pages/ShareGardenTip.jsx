import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const ShareGardenTip = () => {
  const { user } = use(AuthContext);
  const handleShareTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTip = Object.fromEntries(formData.entries());
    // console.log(newTip);

    //mongodb post
    fetch("http://localhost:3000/shareTip", {
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
      });
  };
  return (
    <div className="bg-green-50  py-10 ">
      <div className="my-20 max-w-5xl mx-auto bg-green-50 ">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700">
            🌱 Share a Garden Tip
          </h1>
          <p className="text-lg text-green-900 mt-3">
            Grow your knowledge! Share your green thumb secrets with fellow
            garden lovers.
          </p>
        </div>
        <form onSubmit={handleShareTip}>
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
                className="select select-bordered w-full"
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
                className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
                placeholder="Enter Description"
              />
            </fieldset>
            <fieldset className="fieldset bg-green-200 border-green-400 rounded-box border p-4">
              <label className="label text-xl font-semibold text-green-900">
                Category
              </label>
              <select name="category" className="select select-bordered w-full">
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
                className="select select-bordered w-full"
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
              className="input w-full border-green-500 bg-green-50 text-green-900 placeholder-green-700"
              placeholder="Enter Images url"
            />
          </fieldset>
          <button className="bg-green-700 text-white w-full py-2 mt-5 cursor-pointer hover:bg-green-800">
            Share Tip
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareGardenTip;
