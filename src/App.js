import "semantic-ui-css/semantic.min.css";

import React from "react";
import Accordion from "./components/Accordion";
const items = [
  { title: " What is a taco?", content: " Amazing handheld assault weapon" },
  {
    title: "Why eat Tacos? ",
    content: "I thought we answered that before....",
  },
  {
    title: " this is the third column heading",
    content: "Yeah I hope this accordion works out great",
  },
];
export default () => {
  return (
    <div>
      {" "}
      Holla Widgets App! <Accordion items={items} />{" "}
    </div>
  );
};
