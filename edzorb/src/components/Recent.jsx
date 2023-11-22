import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BlogCard from "./BlogCard";
import  Slider  from 'react-slick'

const Recent = () => {
  const postdata = [
    {
      title: "The Art of Learning",
      date: "November 10, 2023",
      description:
        "Discover the strategies for effective learning and skill development.",
    },
    {
      title: "Exploring Nature: A Journey Through Forests",
      date: "October 25, 2023",
      description:
        "Embark on a fascinating adventure exploring the wonders of forests and biodiversity.",
    },
    {
      title: "Cooking Masterclass: Culinary Delights",
      date: "December 5, 2023",
      description:
        "Learn the art of cooking through a comprehensive masterclass on various cuisines.",
    },
    {
      title: "Financial Planning for Beginners",
      date: "September 15, 2023",
      description:
        "Get started on your journey to financial literacy with expert advice and tips.",
    },
    {
      title: "Fitness and Wellness: Achieving Balance",
      date: "November 30, 2023",
      description:
        "Find harmony between physical fitness and mental well-being with holistic practices.",
    },
  ];


  const settings = {
     dots: true,
     infinite: false,
     speed: 300,
     slidesToShow: 4,
     slidesToScroll: 4,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   };

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-10 md:px-8 lg:px-20">
        <h1 className="text-2xl font-bold">Recent What's New?</h1>
        <div>
          <FaArrowRight size={20} color="#111d4a" />
        </div>
      </div>
      <div className="w-full  py-10 md:px-8  flex flex-wrap justify-center ">
        {postdata.map((postdata, index) => (
          <div
            key={index}
            className="w-full  py-10 md:px-8  flex-shrink-0 w sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-4 "
          >
            <BlogCard
              title={postdata.title}
              date = { postdata.date}
              description={postdata.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
