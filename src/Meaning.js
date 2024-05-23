import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  const firstDefinition = props.meaning.definitions[0];

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <span>&#8226; </span>
          {firstDefinition.definition}
          <br />
          <p className="example">"{firstDefinition.example}"</p>
          <Synonyms synonyms={firstDefinition.synonyms} />{" "}
        </p>
      </div>
    </div>
  );
}
