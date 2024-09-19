import React from "react";
import "./Dictionary.css";
import _ from "lodash";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {" "}
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{_.capitalize(synonym)} </li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
