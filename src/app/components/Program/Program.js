"use client";

import React from "react";
import Development from "../../../../public/images/web-development.jpg";
import Robotics from "../../../../public/images/robotics.jpg";
import videoeditor from "../../../../public/images/video-editor.jpg";
import ProgramCard from "./ProgramCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Program() {
  const Courses = [
    {
      id: 1,
      name: "Full Stack Development Courses",
      image: Development,
    },
    {
      id: 2,
      name: "AI / ML Courses",
      image: Robotics,
    },
    {
      id: 3,
      name: "UI Designer Courses",
      image: videoeditor,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <div className="py-4">
        <div className="flex items-center justify-center pb-8">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-primary pb-1">
              Top skilled{" "}
              <span className="text-primary">IT / NON-IT Courses</span>
            </p>
          </div>
        </div>

        <div className="slider-container gap-2 space-x-2">
          <Slider {...settings}>
            {Courses.map((Course) => (
              <div key={Course.id}>
                <ProgramCard name={Course.name} image={Course.image} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Program;
