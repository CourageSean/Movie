import React from "react";

export default function MovieData(props) {
  return (
    <div className="movie">
      <h4> {props.title} </h4>
      <h4>{props.year}</h4>
      <h4>{props.director}</h4>
      <h4>{props.duration}</h4>
      <h4>{props.rate}</h4>
      <h4>{props.genre}</h4>
    </div>
  );
}
