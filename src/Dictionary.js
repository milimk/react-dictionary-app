import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
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
        <div className="row">
          <div className="col-4 border">
            <h2>Dictionary App</h2>
            <form onSubmit={searchWords}>
              <input type="search" onChange={handleSearch} />
            </form>
          </div>
          <div className="col-8 border">
            <div className="row">
              <div className="col border">Display Searched Word</div>
              <div className="col border">Verb</div>
            </div>
            <div className="row">
              <div className="col border">Noun</div>
              <div className="col border">Adjective</div>
            </div>
            <div className="row">
              <div className="col border">Related Images</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
