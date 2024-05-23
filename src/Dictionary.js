import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  useEffect(() => {
    const savedResults = localStorage.getItem("dictionaryResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  function handleResponse(response) {
    setResults(response.data[0]);
    localStorage.setItem("dictionaryResults", JSON.stringify(response.data[0]));
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    localStorage.removeItem("dictionaryResults");
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2 className="question">What word would you like to look up?</h2>
      <form onSubmit={search}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Type a word..."
              autoFocus="on"
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100 button"
            />
          </div>
        </div>
      </form>
      <Results results={results} />
    </div>
  );
}
