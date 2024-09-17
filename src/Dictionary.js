import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResult from "./SearchResult";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function searchWords(event) {
    event.preventDefault();

    let apiKey = "0af4f7ebo6ce11605e35ecb7eatc1716";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="container">
        <h2>React Dictionary App</h2>
        <div className="row">
          <div className="col-sm-4 searchSection">
            <form onSubmit={searchWords}>
              <strong>What word do you want to look up?</strong>
              <input
                type="search"
                onChange={handleSearch}
                className="searchInput"
              />
              <small>Examples: Sunset, Pizza, Coding </small>
            </form>
          </div>
          <div className="col-sm-8">
            <SearchResult results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}
