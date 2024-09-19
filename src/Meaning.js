import React from "react";
import _ from "lodash";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  let capitalizedPartOfSpeech = _.capitalize(props.meaning.partOfSpeech);
  let capitalizedDefinition = _.capitalize(props.meaning.definition);
  let capitalizedExample = _.capitalize(props.meaning.example);

  return (
    <div className="Meaning">
      <h3>{capitalizedPartOfSpeech}</h3>

      <p>{capitalizedDefinition}</p>
      <p>
        <em>{capitalizedExample}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
