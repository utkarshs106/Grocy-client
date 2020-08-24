import React, { useState } from "react";

function ShopIcon(props) {
  console.log(props);
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {props.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.name}
        </h2>
        <p className="mt-1">${props.price}</p>
      </div>
    </div>
  );
}

export default ShopIcon;
