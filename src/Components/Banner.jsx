import React from "react";

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
    <div className="mt-10 max-w-5xl mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
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
              }}
            >
              <div
                className="absolute bottom-2 left-2  p-2 rounded-md text-white"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
