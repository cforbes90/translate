import "semantic-ui-css/semantic.min.css";

import React, { useState } from "react";
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
  { label: "The Sunset Red", value: "red" },
  { label: "The Beautiful Blue", value: "blue" },
  {
    label: "Sound of Music Green",
    value: "green",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      Holla Widgets App!
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
