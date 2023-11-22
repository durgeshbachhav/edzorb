import React from "react";

const BlogCard = ({ title, date, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-80 h-60">
      <p className="text-gray-500">{date}</p>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default BlogCard;
