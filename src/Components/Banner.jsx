import React from "react";
import background from "../assets/background.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const events = [
  {
    id: 1,
    title: "Spring Garden Fest 2025",
    image: "https://i.ibb.co/nMvN3j0z/garden3.jpg",
    date: "2025-04-15",
    location: "Central Park, New York",
  },
  {
    id: 2,
    title: "Urban Balcony Gardening Meetup",
    image: "https://i.ibb.co/4nCztqCj/garden2.jpg",
    date: "2025-06-02",
    location: "GreenHouse Cafe, San Francisco",
  },
  {
    id: 3,
    title: "Hydroponics for Beginners",
    image: "https://i.ibb.co/60Tj3wBP/garden1.jpg",
    date: "2025-05-28",
    location: "Community Eco Center, Seattle",
  },
  {
    id: 4,
    title: "Children’s Planting Day",
    image: "https://i.ibb.co/JR4n6QsK/garden4.jpg",
    date: "2025-05-22",
    location: "Sunshine Public Library, Austin",
  },
];

const Banner = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${background})`,
          filter: "brightness(0.3)",
        }}
      ></div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          A Gardening Community & Resource Hub
        </h1>
        <p className="max-w-2xl text-sm mb-6">
          A platform for gardening enthusiasts to share tips, find local
          gardeners, ask plant care questions, post or join gardening events,
          and connect over shared interests like composting, hydroponics,
          balcony gardens, etc.
        </p>

        <div className="w-full flex justify-center">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id} style={{ width: "300px" }}>
                <div
                  style={{
                    backgroundImage: `url(${event.image})`,
                    width: "300px",
                    height: "400px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    position: "relative",
                    color: "white",
                    border: "4px solid yellow",
                  }}
                >
                  <div
                    className="absolute bottom-2 left-2 p-2 rounded-md text-white"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                  >
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-sm">{event.date}</p>
                    <button className="btn btn-secondary">View More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
