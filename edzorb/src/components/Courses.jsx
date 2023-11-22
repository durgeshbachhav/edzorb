import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const Courses = () => {
  // Dummy data for 10 courses
  const coursesData = [
    {
      title: "Premium+ 3.0(NEWLY LAUNCHED)",
      chapters: "1203 Chapters",
      contents: "3690 Contents",
      price: "₹34998.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Course Title 2",
      chapters: "800 Chapters",
      contents: "2500 Contents",
      price: "₹25000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Another Course",
      chapters: "500 Chapters",
      contents: "1800 Contents",
      price: "₹18000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Introduction to React",
      chapters: "200 Chapters",
      contents: "800 Contents",
      price: "₹8000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Web Development Bootcamp",
      chapters: "150 Chapters",
      contents: "600 Contents",
      price: "₹6000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Data Science Fundamentals",
      chapters: "300 Chapters",
      contents: "1200 Contents",
      price: "₹12000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Machine Learning Basics",
      chapters: "250 Chapters",
      contents: "1000 Contents",
      price: "₹10000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "JavaScript Mastery",
      chapters: "400 Chapters",
      contents: "1500 Contents",
      price: "₹15000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "Python for Beginners",
      chapters: "100 Chapters",
      contents: "400 Contents",
      price: "₹4000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
    {
      title: "UX/UI Design Essentials",
      chapters: "180 Chapters",
      contents: "700 Contents",
      price: "₹7000.00",
      image:
        "https://d1hx9upfjhq3l6.cloudfront.net/institute/edzorblaw/product_images/113/7ecd5c2f9b844bee89543ad7193b9420.jpeg",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-20">
        <h1 className="text-2xl font-bold">Courses</h1>
        <div>
          <FaArrowRight size={20} color="#111d4a" />
        </div>
      </div>
      <div className="w-full  py-10 md:px-8  flex flex-wrap justify-center ">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="w-full  py-10 md:px-8  flex-shrink-0 w sm:w-1/2 md:w-1/2 lg:w-1/3 px-2 mb-4 "
          >
            <Card
              title={course.title}
              chapters={course.chapters}
              contents={course.contents}
              price={course.price}
              image={course.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
