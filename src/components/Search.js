import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  //console.log("I run with every render");
  //useEffect for rerendering when code detects that 'term' has changed
  //doesn't have to be arrow functions
  //use effect will only run in one of 3 scenarios. it is the second argument that shows when it gets affected
  //it is blank array, some array with elements, or no array at all
  //no async with useEffect
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    //console.log("I  run at initial render and every render");

    //conditional rendering based off if term has stuff in there
    if (term) {
      search();
    }
    console.log("this is results", results);
  }, [term]);

  const renderedResults = results.map((result) => {
    // console.log("these are page ids", result.pageid);
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            {" "}
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {/* allows us to take a string that has html already in it and convert it back to html.  */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};
export default Search;
