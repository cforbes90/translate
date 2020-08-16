import "semantic-ui-css/semantic.min.css";

import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Beautiful Blue", value: "red" },
  {
    label: "Sound of Music Green",
    value: "green",
  },
];

export default () => {
  return (
    <div>
      {" "}
      Holla Widgets App! <Dropdown options={options} />{" "}
    </div>
  );
};
