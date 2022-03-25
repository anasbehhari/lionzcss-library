import React from "react";
import "./Button.css";

export const Button = (props) => {
  const types = [
    "primary",
    "error",
    "success",
    "info",
    "warning",
    "info",
    "secondry",
    "pinky",
    "marineblue",
    "facebook",
    "twitter",
    "youtube",
    "dark",
    "outlined",
    ""
  ];
  const type = types.includes(props.type) ? props.type : "";
  const buttonType = ["button","reset","submit"].includes(props.Btype) ? props.Btype : ""
  const className = props.className != "Button-lz" ? props.className : "";
  return (
    <button type={buttonType} className={`Button-lz ${type} ${className} `}>
      {props.children}
    </button>
  );
};
