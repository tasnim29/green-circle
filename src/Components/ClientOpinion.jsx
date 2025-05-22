import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import quoteIcon from "../assets/qouteIcon.jpg";
import { CiStar } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";

const clientsPromise = fetch("/Clients.json").then((res) => res.json());

const ClientOpinion = () => {
  const data = use(clientsPromise);
  console.log(data);
  const { theme } = use(AuthContext);
  return (
    <div className="max-w-6xl mx-auto">
      <h1
        className={`text-4xl font-bold text-center mb-8 transition duration-1000 ${
          theme === "dark" ? "text-white " : "text-green-700"
        }`}
      >
        <Typewriter
          words={["  ✅ What Our Clients Say"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed
        ></Typewriter>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
        {data.map((client) => (
          <div
            className={`p-5 flex gap-5 items-center rounded-xl ${
              theme === "dark" ? "shadow-xl shadow-white " : "shadow-2xl"
            }`}
          >
            <div className="relative inline-block w-32 flex-shrink-0">
              <img
                className="w-32 h-32 object-cover rounded-xl"
                src={client.image}
                alt=""
              />
              <img
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full"
                src={quoteIcon}
                alt=""
              />
            </div>

            <div>
              <h1 className="text-sm mb-2 text-gray-500">
                {client.testimonial}
              </h1>

              <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">{client.name}</h1>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((j, i) => (
                    <span className="text-sm" key={i}>
                      {i < client.rating ? "⭐" : <CiStar size={20} />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClientOpinion;
