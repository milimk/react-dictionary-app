import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";

export default function SearchResult(props) {
  if (props.results) {
    return (
      <div className="SearchResult">
        <div className="row">
          <div className="col resultWord">
            <h1>{props.results.word} </h1>
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
          <div className="col">Related Images</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
