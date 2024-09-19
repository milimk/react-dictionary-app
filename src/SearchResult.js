import React from "react";
import _ from "lodash";
import "./Dictionary.css";
import Meaning from "./Meaning";

export default function SearchResult(props) {
  let capitalizedWord = _.capitalize(props.results.word);

  if (props.results) {
    return (
      <div className="SearchResult">
        <div className="row">
          <div className="col resultWord">
            <h1>{capitalizedWord} </h1>
            <p>{props.results.phonetic}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index} className="meaning">
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
