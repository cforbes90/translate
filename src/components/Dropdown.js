import React, { useState, useEffect, useRef } from "react";
const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  //Declaring useRef

  const ref = useRef();

  // This useEffect only needs to run one becuase it is attaching anEventListerner to the HTML .
  //Use effect can return a function. that return function can be used to clean up the useEffeect
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    //console.log(event.target);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log("You clicked item!");
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label"> Select a Color</label>
        <div
          onClick={() => {
            console.log("Dropdown has been Clicked!");
            setOpen(!open);
          }}
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
