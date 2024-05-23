import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <span>&#8226; </span>
              {definition.definition}
              <br />
              <p className="example">{definition.example}</p>
              <Synonyms synonyms={definition.synonyms} />{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}
