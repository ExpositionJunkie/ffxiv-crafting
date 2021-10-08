import React from 'react'
import "./Style/Character.css";

export default function Character({props}) {
  
    return (
      <div className="charWrap">
        <h1>Character Screen:</h1>
        <h1>{props.Name}</h1>
        <h2>{props.Server}</h2>
        <img src={props.Avatar} alt="Character avatar" />
      </div>
    );
  }
  
