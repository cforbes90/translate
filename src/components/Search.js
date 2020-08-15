import React, { useState, useEffect } from "react";
const Search = () => {
  const [term, setTerm] = useState("");

  console.log("I run with every render");
  //useEffect for rerendering when code detects that 'term' has changed
  //doesn't have to be arrow functions
  //use effect will only run in one of 3 scenarios. it is the second argument that shows when it gets affected
  //it is blank array, some array with elements, or no array at all
  useEffect(() => {
    console.log("I  run at initial render and every render");
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className=" field">
          <label> Enter Search Term </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
