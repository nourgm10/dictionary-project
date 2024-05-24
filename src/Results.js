import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.error) {
    if (props.photosError) {
      return (
        <div className="Results">
          <h2>
            Sorry, we couldn't find anything for "{props.keyword}
            ". Please double-check your spelling or try another word.
          </h2>
        </div>
      );
    } else {
      return (
        <div className="Results">
          <h2>
            Sorry, we couldn't find a definition for "{props.keyword}", but here
            are some cool photos nonetheless!
          </h2>
        </div>
      );
    }
  } else if (props.results) {
    return (
      <div className="Results">
        <h1 className="text-lowercase">{props.results.word}</h1>
        {props.results.phonetics.length > 0 && (
          <div>
            <Phonetic phonetic={props.results.phonetics[0]} />
          </div>
        )}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
