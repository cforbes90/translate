//useState is how you bring State into a funcitonal component. THere are 2 parts to this
import React, { useState } from "react";

const Accordion = ({ items }) => {
  //THis is the second part to bringing in State to a functional component
  const [activeIndex, setActiveIndex] = useState(null);

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    //Helper function here. Rememebe to use it with an arrow function and onClick function in the code.
    const onTitleClick = () => {
      //the setter function created in the use state initialization. calling a function like this will cause it to re-render
      setActiveIndex(index);
    };
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"> </i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}

      <h1> {activeIndex}</h1>
    </div>
  );
};

export default Accordion;
