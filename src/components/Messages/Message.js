import React from "react";
import "./Message.css";

export const Message = (props) => {
  const types = ["success","error","info","warning"];
  const type = types.includes(props.type) ? props.type : "";
  const className = props.className!="Message-lz" ? props.className : "";
  return (
    <div className={`Message-lz ${type} ${className} `}>
      <div className="message-content">{props.children}</div>
    </div>
  );
};