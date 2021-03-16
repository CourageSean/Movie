import React from "react";

export default function (props) {
  return (
    <div>
      <img src={props.imgUrl} alt="" />
      <h4 className="name">{props.name}</h4>
      <h4 className="popularity">{props.popularity} </h4>
      <button onClick={() => props.delete()}>delete</button>
    </div>
  );
}
