import React from "react";
import Speaker from "./Speaker.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h2>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <img src={Speaker} className="Phonetic-Speaker" alt="Speaker" />
        </a>{" "}
        {props.phonetic.text}
      </h2>
    </div>
  );
}
