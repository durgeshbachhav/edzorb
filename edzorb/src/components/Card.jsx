import React from "react";

const Card = ({ title, chapters, contents, price, image }) => {
  return (
    <div className="w-full p-2 hover:cursor-pointer bg-white rounded-lg shadow-md  md:w-80 lg:w-96">
      <div className="mb-4">
        <img
          src={image}
          alt={title} // Use the title or a more descriptive alt text
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center mb-2">
          <div className="mr-4">{chapters}</div>
          <div>{contents}</div>
        </div>
        <div className="text-gray-600 font-medium">{price}</div>
      </div>
    </div>
  );
};

export default Card;
