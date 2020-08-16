import React, { useState } from "react";
const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label"> Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          // ternary statement: if open is true, then apply visisble active, if not then put in empty string
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"> </i>
          <div className="text">{selected.label}</div>
          {/* ternary statement: if open is true, add visibile transisition. If not, then apply empty string */}
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
