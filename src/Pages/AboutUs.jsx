import React, { use } from "react";
import image from "../assets/aboutUs.png";
import { AuthContext } from "../Context/AuthContext";

const AboutUs = () => {
  const { theme } = use(AuthContext);
  return (
    <div className="max-w-7xl mx-auto">
      <section
        className={`px-4 py-16  text-center text-base-content ${
          theme === "dark"
            ? "bg-gary-950"
            : "bg-gradient-to-b from-base-100 to-base-200"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-2xl md:text-4xl font-semibold  mb-6 ${
              theme === "dark" ? "text-base-200" : "text-primary"
            }`}
          >
            Growing Together — A Community Rooted in Nature
          </h2>
          <p
            className={`text-lg mb-4 ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            <strong className="text-xl">Green Circle</strong> is a vibrant
            online gardening community built for plant lovers of all kinds.
            Whether you're into vertical gardening, hydroponics, or composting —
            this is your space to connect, share, and learn.
          </p>
          <p
            className={`text-lg mb-4 ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            We bring together gardeners from around the country to explore
            expert tips, share personal growing stories, and find like-minded
            enthusiasts. Our mission is to empower you with reliable resources
            and a welcoming community to help your garden thrive.
          </p>
          <p
            className={`text-lg mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-black"
            }`}
          >
            Through collaboration, seasonal tips, and events, Green Circle
            nurtures your journey from beginner planter to confident grower.
            We’re not just about plants — we’re about people who grow with them.
          </p>
          <h3 className="text-md md:text-lg text-accent font-medium">
            Built by gardeners, for gardeners. 🌱
          </h3>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={image}
            alt="Gardening tools and products"
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
