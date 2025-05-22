import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
import { useLoaderData } from "react-router";
import likeAnimation from "../assets/buttonAnimation.json";
import Lottie from "lottie-react";

const TipDetailsPage = () => {
  const tipDetails = useLoaderData();
  // console.log(tipDetails);
  const [showLikeAnimation, setShowLikeAnimation] = useState(false);

  const {
    _id,
    title,
    type,
    difficulty,
    description,
    category,
    availability,
    image,
    totalLiked,
  } = tipDetails;
  console.log(totalLiked);

  const handleLike = (id) => {
    // console.log(id);
    fetch(`http://localhost:3000/shareTip/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after db", data);
        setShowLikeAnimation(true);
        setTimeout(() => {
          setShowLikeAnimation(false);
        }, 2000);
      });
  };

  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-3xl font-bold text-green-900 text-center mb-4">
        Explore this Gardening Tip
      </h2>

      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-green-50 border border-green-200 rounded-lg shadow-md lg:flex-row sm:mx-auto">
        {/* Left Image Section */}
        <div className="relative lg:w-1/2">
          <img
            src={image}
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full rounded-l-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="relative flex flex-col justify-center p-8 bg-green-100 lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-green-900 uppercase rounded-full bg-green-300">
              {availability}
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold text-green-900 leading-none sm:text-4xl">
            {title}
          </h5>
          <p className="mb-2 text-green-800">
            <span className="font-bold">Description:</span> {description}
          </p>
          <p className="mb-2 text-green-800">
            <span className="font-bold">Type:</span> {type}
          </p>
          <p className="mb-2 text-green-800">
            <span className="font-bold">Difficulty:</span> {difficulty}
          </p>
          <p className="mb-2 text-green-800">
            <span className="font-bold">Category:</span> {category}
          </p>

          {/* Like Button */}
          <button
            onClick={() => handleLike(_id)}
            className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 hover:scale-105 rounded-full w-max cursor-pointer"
          >
            <SlLike size={20} /> Like
          </button>
          {showLikeAnimation && (
            <div
              className="absolute inset-0 flex items-center justify-center z-20"
              style={{ width: 450, height: 400 }}
            >
              <Lottie animationData={likeAnimation} loop={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TipDetailsPage;
