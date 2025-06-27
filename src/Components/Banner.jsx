import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/Banner/banner-1.jpg";
import image2 from "../assets/Banner/banner-2.png";
import image3 from "../assets/Banner/banner-3.jpg";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      image: image1,
      title: "Welcome to Green Circle",
      subtitle: "Connect with Gardeners Nationwide",
      buttonText: <Link to="/exploreGardeners">Explore Now</Link>,
    },
    {
      image: image2,
      title: "Grow Together",
      subtitle: "See tips and discover gardening tricks",
      buttonText: <Link to="/browseTips">Join The Community</Link>,
    },
    {
      image: image3,
      title: "Nurture Nature",
      subtitle: "Start your green journey with us",
      buttonText: <Link to="/">Start Gardening</Link>,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto ">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-md"
          >
            <img
              src={slide.image}
              alt={`Slide ${idx + 1}`}
              className="absolute right-0 top-0 h-full object-cover w-full lg:w-1/2"
            />
            <div className="absolute inset-0 flex items-center px-6 lg:px-20 bg-gradient-to-r from-primary to-transparent ">
              <div className="max-w-xl text-left space-y-4 text-base-200">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-lg">{slide.subtitle}</p>
                <button className="px-8 py-3 cursor-pointer rounded-md bg-white text-primary hover:scale-105 border-2 border-primary">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
