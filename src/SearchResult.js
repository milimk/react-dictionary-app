import React from "react";
import "./Dictionary.css";
import Meaning from "./Meaning";

export default function SearchResult(props) {
  if (props.results) {
    return (
      <div className="SearchResult">
        <div className="row">
          <div className="col border">
            <h2>{props.results.word} </h2>
          </div>
        </div>
        <div className="row">
          <div className="col border">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col border">Related Images</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
