import React, { useState, useEffect } from "react";

function Validate() {
  const data = { name: "Rahul", class: "Smart Boy" };

  const url = "https://ytezo.sse.codesandbox.io/testAPI";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then((res) => console.log(res));

  return <>hii this is validate</>;
}
export default Validate;
