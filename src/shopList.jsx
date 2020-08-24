import React, { useState } from "react";
import ShopIcon from "./components/shopIcon";
import ShopsExample from "./shopsExample";

function Shopdata() {
  function createmanyshops(ShopsExample) {
    return (
      <ShopIcon
        key={ShopsExample.key}
        category={ShopsExample.category}
        price={ShopsExample.price}
        name={ShopsExample.name}
      />
    );
  }
  return (
    <section className="text-gray-700 body-font">
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {ShopsExample.map(createmanyshops)}
        </div>
      </div>
    </section>
  );
}

export default Shopdata;
