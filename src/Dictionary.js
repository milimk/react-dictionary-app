import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import SearchResult from "./SearchResult";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
    setLoaded(true);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchWords(event) {
    let apiKey = "0af4f7ebo6ce11605e35ecb7eatc1716";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSearch(event) {
    setKeyword(event.target.value);
  }

  function loading() {
    searchWords();
  }

  function handleForm(event) {
    event.preventDefault();
    searchWords();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <h2>React Dictionary App</h2>
          <div className="row">
            <div className="col-sm-4 searchSection">
              <form onSubmit={handleForm}>
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
              <Photos photos={photos} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    loading();
    return "Loading..";
  }
}
