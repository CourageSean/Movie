import React from "react";

export default function Weather(props) {
  return (
    <div>
      <h4>{props.day} </h4>
      <img src={props.imgUrl} alt="" />
      <h4>
        <span>{props.tempDay}</span>{" "}
        <span style={{ color: "blue" }}>{props.tempNight} </span>{" "}
      </h4>
    </div>
  );
}
